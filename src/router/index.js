import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from "@/pages/AboutMe.vue";
import Cv from "@/pages/Cv.vue";
import Home from "@/pages/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about-me",
      name: "about",
      component: AboutMe
    },
    {
      path: "/cv",
      name: "cv",
      component: Cv
    },
  ]
})

export default router
