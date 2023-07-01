// import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component:()=>import('../views/LayoutView.vue'),
    children:[
      {
        path:'/',
      
        name:'home',
        component:()=>import('../views/HomeView.vue')
      },
      {
        path:'/mine',
        component:()=>import('../views/MineView.vue')
      },
      {
        path:'/search',
        component:()=>import('../views/SearchView.vue')
      },
      {
        path:'/bd',
        component:()=>import('../views/RankingListView.vue')
      }
    ]
  },
  {
    path:'/list/:type',
   component:()=>import('../views/ListView.vue'),
    name:'list'
  },
  {
    path:'/songlist/:type/:id',
   component:()=>import('../views/SongList.vue'),
    name:'songlist'
  },
  {
    path:'/play/:id',
    component:()=>import('../views/PlayView.vue')
  },
  {
    path:'/login',
    component:()=>import('@/views/LoginView.vue')
  },
  {
    path:'/:pathMatch(.*)*',
    component:()=>import('../views/404View.vue')
  },
  {
    path:'/:pathMatch(.*)',
    component:()=>import('../views/404View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 精准匹配高亮显示路由
  linkExactActiveClass:'isActive',
})

export default router
