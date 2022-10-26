import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      
      path: "/login",
      name: "login",
      component: () => import("../pages/Login.vue"),
    },

    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
  ],
});
router.beforeEach(async (to, from, next) => {
  const isLogin = localStorage.getItem("token");
  if (isLogin || to.name === "login") {
    next();
  } else {
    next({
      name: "login",
    });
  }
});

export default router;
