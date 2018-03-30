import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = { template: `
  <div>
    <ul>
      <li><router-link to="/foo">/foo</router-link></li>
      <li><router-link to="/bar">/bar</router-link></li>
    </ul>
    <h1>Electron + Vue + Parcel</h1>
  </div>
`}
const Foo = { template: `
  <div>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/bar">/bar</router-link></li>
    </ul>
    <h1>foo!</h1>
  </div>
` }
const Bar = { template: `
  <div>
    <ul>
      <li><router-link to="/foo">/foo</router-link></li>
      <li><router-link to="/">/</router-link></li>
    </ul>
    <h1>bar!</h1>
  </div>
` }

const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

export function createRouter() {
  return new VueRouter({
    routes
  })
}
