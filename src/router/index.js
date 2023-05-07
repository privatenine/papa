import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pageFirst'
    },
    {
      path: '/pageFirst',
      component: (resolve) => require(['@/views/pageFirst'], resolve),
      hidden: true
    },
    {
      path: '/pageSecond',
      component: (resolve) => require(['@/views/pageSecond'], resolve),
      hidden: true
    },
    {
      path: '/pageThird',
      component: (resolve) => require(['@/views/pageThird'], resolve),
      hidden: true
    }
  ]
})
