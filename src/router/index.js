import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'

Vue.use(Router)

// const files = require.context('./modules', true, /\.js$/)
// files.keys().forEach((path) => {
//   console.log(files(path).default)
// })
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
