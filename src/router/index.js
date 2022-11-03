// import { createRouter, createWebHistory } from "vue-router";
 import Home from "../pages/Home.vue";
 import History from "../pages/Historic.vue";


// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// export default router;

import Vue from "vue";
import Router from "vue-router";
// import handlerBeforeEach from "@/utils/handler-before-each/handlerBeforeEach";

const internalRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/historic",
    name: "historic",
    component: History,
  },
];

Vue.use(Router);

const router = new Router({
  mode: "history",
  //@ts-ignore
  routes: [...internalRoutes],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

// router.beforeEach(async (to, from, next) => {
//   await handlerBeforeEach(to, from, next);
// });

export default router;
