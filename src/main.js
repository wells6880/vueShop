import Vue from 'vue'
import '../static/css/normalize.css'
import '../static/css/base.css'
import Layout from './layout.vue'
import VueRouter from 'vue-router'
import IndexPage from './pages/index.vue'
import DetailPage from './pages/detail.vue'
import DetailAnalysis from './pages/detail/analysis.vue'
import DetailCount from './pages/detail/count.vue'
import DetailForecast from './pages/detail/forecast.vue'
import DetailPublish from './pages/detail/publish.vue'
import OrderListPage from  './pages/orderList.vue'

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  routes:[
    // {
    //   path:'/',
    //   redirect:'/',
    // },
    {
      path:'/',
      component:IndexPage,
    },
    {
      path:'/detail',
      component:DetailPage,
      redirect:'/detail/analysis',
      children:[
        {
          path:'analysis',
          component:DetailAnalysis
        },
        {
          path:'count',
          component:DetailCount
        },
        {
          path:'forecast',
          component:DetailForecast
        },
        {
          path:'publish',
          component:DetailPublish
        },
      ]
    },
    {
      path:'/orderList',
      component:OrderListPage
    }
  ]
});

new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {Layout}
});
