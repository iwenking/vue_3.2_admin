import { createRouter, createWebHistory } from 'vue-router'

const publicRoutes = [
  {
    path:"/login",
    component:()=>import("@/views/login/index")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:publicRoutes
})

export default router
