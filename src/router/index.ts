import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import index from "@/pages/index";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
