---
title: theme-reco
date: 2020-05-29
---

This is theme-recos.
```js
module.exports = (option, context) => {
  return {
    enhanceAppFiles() {
      return {
         name: 'dynamic-code',
         content: `export default ({ Vue }) => { Vue.mixin('$source', '${
           context.sourceDir
         }') }`
       }
    }
  }
}
```

### 分页
<br/>
<Paper></Paper>

<<<@/.vuepress/components/Paper.vue

### 按钮
<br/>

<Button/>

<<<@/.vuepress/components/Button.vue