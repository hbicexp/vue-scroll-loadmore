# vue-scroll-loadmore

> A Vue.js 2.0 directive for vue component.  
> Load more data when scroller arrived end.  
> Scroller滚动到最后时加载数据。

## Quick Start

``` javascript
import Vue from 'vue'
import LoadMore from 'vue-scroll-loadmore'
Vue.use(LoadMore)
```

``` html
<template>
  <div v-scroll-loadmore='loadmore'>
  <!-- handle scroll event for element -->
  </div>
<template>
```
``` html
<template>
  <div v-scroll-loadmoreparent='loadmore'>
  <!-- handle scroll event for offsetParent -->
  </div>
<template>
```

``` html
<template>
  <div v-scroll-loadmorebody='loadmore'>
  <!-- handle scroll event for documenet.body -->
  </div>
<template>
```

``` javascript
methods: {
  loadmore: function(){
    ...
  }
}
```

## Compatibility 
Chrome@latest, Firefox@latest, Edge@latest, IE11

## QA
H Tags casuse height issue.
Please avoid use H1,H2,H3,H4 when render UI or Set css of H Tags with "display:inline-block".


## LICENSE
BSD