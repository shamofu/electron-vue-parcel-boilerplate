import Vue from 'vue/dist/vue'
import { createRouter } from './router'

new Vue({
  router: createRouter(),
  template: '<router-view />'
}).$mount('#parcel-root')
