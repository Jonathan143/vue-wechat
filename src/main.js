// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'muse-ui-progress/dist/muse-ui-progress.css';
import NProgress from 'muse-ui-progress';
Vue.use(NProgress);

Vue.config.productionTip = false;
/* eslint-disable no-new */

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload);
NProgress.config({
  zIndex: 2000,          // progress z-index
  top: 0,                // position fixed top
  speed: 300,            // progress speed
  color: '#ff4081',      // color
  size: 2,               // progress size
  className: ''          // progress custom class
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

router.beforeEach((to,from,next) => {
  NProgress.start();
  next()
});
router.afterEach(() => {
  NProgress.done();
});
