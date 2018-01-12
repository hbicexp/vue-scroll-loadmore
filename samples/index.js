import Vue from 'vue'

import VueScrollLoadMore from '../src/index.js'
Vue.use(VueScrollLoadMore)

import LoadMore from './LoadMore.vue';
var vue = new Vue({
    el: '#app1',
    render: function (createElement) {
        return createElement(LoadMore);
    },
});

import LoadMoreParent from './LoadMoreParent.vue';
var vue = new Vue({
    el: '#app2',
    render: function (createElement) {
        return createElement(LoadMoreParent);
    },
});

import LoadMoreBody from './LoadMoreBody.vue';
var vue = new Vue({
    el: '#app3',
    render: function (createElement) {
        return createElement(LoadMoreBody);
    },
});

