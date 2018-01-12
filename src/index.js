import {LoadMore, LoadMoreParent, LoadMoreBody} from './loadmore.js';

export default {
  install(Vue) {
    Vue.directive('scroll-loadmore', LoadMore)
    Vue.directive('scroll-loadmoreparent', LoadMoreParent)
    Vue.directive('scroll-loadmorebody', LoadMoreBody);
  }
};
