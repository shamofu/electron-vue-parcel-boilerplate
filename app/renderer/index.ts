import Vue from 'vue/dist/vue'

import titleMixin from './utils/title'
import { createRouter } from './router'

Vue.mixin(titleMixin)

new Vue({
  router: createRouter(),
  template: '<router-view />'
}).$mount('#parcel-root')
