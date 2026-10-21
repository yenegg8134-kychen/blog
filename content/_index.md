---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2026-10-07
type: landing

sections:
  - block: markdown
    content:
      title: ''
      text: |-
        ## 元老
        **一位以行政人為軸心的觀察者。**

        種田看天吃飯，我看的是制度如何影響每個公務員的一天。AI、友善職場、HR 賦能、世代共事——未來十年的題目。[關於我 →](/about/)
    design:
      columns: '1'
  - block: markdown
    content:
      title: 主題分類
      text: |-
        **考銓與人力**：[考選](/tags/考選/)｜[任用](/tags/任用/)｜[培訓](/tags/培訓/)｜[年金](/tags/年金/)

        **制度與組織**：[組織管理](/tags/組織管理/)｜[數位治理](/tags/數位治理/)｜[勞動市場](/tags/勞動市場/)｜[職涯發展](/tags/職涯發展/)｜[政策觀察](/tags/政策觀察/)

        **國別比較**：[法國](/tags/法國/)｜[美國](/tags/美國/)｜[澳洲](/tags/澳洲/)｜場域：[國營事業](/tags/國營事業/)

        全部文章請見[文章總覽](/archive/)（依年份排列）。
    design:
      columns: '1'
  - block: collection
    id: posts
    content:
      title: 最新文章
      subtitle: ''
      text: ''
      page_type: blog
      count: 10
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: card
      spacing:
        padding: [0, 0, 0, 0]
---
