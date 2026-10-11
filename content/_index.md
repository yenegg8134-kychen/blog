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
