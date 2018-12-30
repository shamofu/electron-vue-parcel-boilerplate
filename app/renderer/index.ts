import Vue from 'vue/dist/vue.min'
import VueRouter from 'vue-router'

import titleMixin from './utils/title'
import { createRouter } from './router'

Vue.use(VueRouter)
Vue.mixin(titleMixin)

new Vue({
  router: createRouter(),
  template: '<router-view />'
}).$mount('#root')
