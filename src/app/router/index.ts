import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/pages/Auth/index.vue"),
    },
    {
      path: "/chat",
      name: "chats",
      component: () => import("@/pages/Chats/index.vue"),
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("@/pages/User/index.vue"),
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("@/pages/Post/index.vue"),
    },
    {
      path: "/chat/:id",
      name: "chat",
      component: () => import("@/pages/Chat/index.vue"),
    },
  ],
})

export default router
