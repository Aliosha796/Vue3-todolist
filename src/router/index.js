import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
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
  const isLogin = window.sessionStorage.getItem("token");
  // if (isLogin || to.name === "login") {
  //   next();
  // } else {
  //   next({
  //     name: "login",
  //   });
  // }
  if (to.path === "/login") {
    return next();
  } else if (!isLogin) {
    next("/login");
  } else {
    next();
  }
});

export default router;
