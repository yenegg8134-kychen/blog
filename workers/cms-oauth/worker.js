/* CMS 後台 GitHub 登入用的 OAuth 中轉。
 * Sveltia CMS 的 github backend 需要一個 server 端來做
 * OAuth code → access_token 交換（瀏覽器端不能放 client_secret）。
 * 流程：/admin 點登入 → 彈窗開 /auth → 跳 GitHub 授權 → 回 /callback → 把 token 傳回 CMS。
 * Secrets（在部署 workflow 用 wrangler secret put 設定）：
 *   GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET
 */
const CALLBACK_ORIGIN = 'https://cms-oauth.kychen.de5.net';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/auth') {
      const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        scope: 'repo',
        redirect_uri: `${CALLBACK_ORIGIN}/callback`,
      });
      return Response.redirect(
        `https://github.com/login/oauth/authorize?${params.toString()}`,
        302,
      );
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) {
        return new Response('Missing code', { status: 400 });
      }
      let tokenJson;
      try {
        const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code,
          }),
        });
        tokenJson = await tokenRes.json();
      } catch (e) {
        return new Response('Token exchange failed', { status: 502 });
      }
      if (!tokenJson.access_token) {
        return new Response('OAuth failed', { status: 500 });
      }
      const msg =
        'authorization:github:success:' +
        JSON.stringify({ token: tokenJson.access_token, provider: 'github' });
      const html =
        '<!doctype html><html><body><script>\n' +
        '(function() {\n' +
        '  function receiveMessage(e) {\n' +
        '    window.opener.postMessage(' +
        JSON.stringify(msg) +
        ', e.origin);\n' +
        '    window.removeEventListener("message", receiveMessage, false);\n' +
        '  }\n' +
        '  window.addEventListener("message", receiveMessage, false);\n' +
        '  window.opener.postMessage("authorizing:github", "*");\n' +
        '})();\n' +
        '</script></body></html>';
      return new Response(html, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' },
      });
    }

    return new Response('cms-oauth ok', { status: 200 });
  },
};
