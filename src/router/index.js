import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/event",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/flex",
      name: "flex",
      component: () => import("../views/FlexView.vue"),
    },
    {
      path: "/obj",
      name: "obj",
      component: () => import("../views/ObjectView.vue"),
    },
  ],
});

export default router;
