import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Addaccount from '../components/addaccount'
import Details from '../components/details'
import PageDetails from '../components/money/detail'
import AddPageDetails from '../components/money/adddetails'
import Yeardetails from '../components/details/yeardetails'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/addaccount',
      name:'addaccount',
      component:Addaccount
    },{
      path:'/details',
      name:'details',
      component:Details
    },
    ,{
      path:'/yeardetails',
      name:'yeardetails',
      component:Yeardetails
    },
    ,{
      path:'/pagedetails',
      name:'pagedetails',
      component:PageDetails
    },{
      path:'/addpagedetails',
      name:'addpagedetails',
      component:AddPageDetails
    }
  ]
})
