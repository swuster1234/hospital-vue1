import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/log_in'
    // 当页面自动进入时，使其跳转到登录页
  },
  {
    path: '/log_in',     //登录
    name: 'log_in',
    component: () => import('../views/log_in/index.vue')
  },
  {
    path: '/home_page',    //首页
    name: 'home_page',
    component: () => import('../views/home_page/index.vue'),


    // 病人管理，药品管理等都是home_page的子路由
    children:[
      {
        path:'/首页',//首页
        name:'首页',
        component: () => import('../views/home_page/首页/index.vue'),
      },
      {
        path:'/病人管理',//病人管理
        name:'病人管理',
        component: () => import('../views/home_page/病人管理/index.vue'),
      },
      {
        path:'/医疗器械管理',//医疗器械管理
        name:'医疗器械管理',
        component: () => import('../views/home_page/医疗器械管理/index.vue'),
      },
      {
        path:'/药品信息',//药品信息
        name:'药品信息',
        component: () => import('../views/home_page/药品管理/药品信息.vue'),
      },
      {
        path:'/药品借阅情况',//药品借阅情况
        name:'药品借阅情况',
        component: () => import('../views/home_page/药品管理/药品借阅情况.vue'),
      },
      {
        path:'/护士管理',//护士照料患者数据情况
        name:'护士管理',
        component: () => import('../views/home_page/护士管理/nurse.vue'),
      },

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
