---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2026-10-07
type: landing

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: me
      text: ''
      headings:
        about: '簡介'
        education: '學歷'
        interests: '研究興趣'
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle
  - block: markdown
    content:
      title: '寫作主張'
      text: |-
        學術論述錨定考銓五大環節：考選、任用、培訓、考績、保障；以制度同形 (Institutional Isomorphism)、街頭官僚 (Street-Level Bureaucracy)、行政負擔 (Administrative Burden)、路徑依賴 (Path Dependence) 等理論為錨，辯證制度張力。

        本站文章分為學術寫作與實務評論兩類，前者求嚴謹，後者求有用。
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
