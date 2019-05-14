import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/index.html",
      alias: "/users"
    },
    {
      path: "/signUp",
      name: "signUp",
      component: () => import("@/views/SignUp.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue")
    },
    {
      path: "/users",
      name: "users",
      component: () => import("@/views/Users.vue")
    },
    {
      path: "/convos",
      name: "convos",
      component: () => import("@/views/Convos.vue")
    },
    {
      path: "/convos/:id",
      name: "convo",
      component: () => import("@/views/Messages.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/Profile.vue")
    }
  ]
});
