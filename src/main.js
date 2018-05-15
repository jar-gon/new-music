import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'common/stylus/index.styl'

/* import VConsole from 'vconsole'
let vConsole = new VConsole()
export default vConsole */

fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: require('common/images/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
