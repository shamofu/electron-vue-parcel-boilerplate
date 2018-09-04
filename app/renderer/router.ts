import VueRouter from 'vue-router'

const Home = { template: `
  <div>
    <ul>
      <li><router-link to="/foo" id="foo">/foo</router-link></li>
      <li><router-link to="/bar" id="bar">/bar</router-link></li>
    </ul>
    <h1>Electron + Vue + Parcel</h1>
  </div>
`, title: 'Electron-Vue-Parcel-Boilerplate' }
const Foo = { template: `
  <div>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/bar">/bar</router-link></li>
    </ul>
    <h1>foo!</h1>
  </div>
`, title: 'Foo' }
const Bar = { template: `
  <div>
    <ul>
      <li><router-link to="/foo">/foo</router-link></li>
      <li><router-link to="/">/</router-link></li>
    </ul>
    <h1>bar!</h1>
  </div>
`, title: 'Bar' }

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
