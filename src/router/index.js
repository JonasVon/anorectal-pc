import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const _import = require("./import-" + process.env.NODE_ENV);

export default new Router({
  routes: [
    {
      path: "/",
      component: _import("main"),
      name: "main",
      redirect: "/home",
      children: [
        {
          path: "home",
          component: _import("home"),
          name: "home"
        },
        {
          path: "hospital",
          component: _import("hospital"),
          name: "hospital"
        },
        {
          path: "doctor",
          component: _import("doctor"),
          name: "doctor"
        },
        {
          path: "healthy",
          component: _import("healthy"),
          name: "healthy"
        },
        {
          path: "mall",
          component: _import("mall"),
          name: "mall"
        },
        {
          path: "about",
          component: _import("about"),
          name: "about"
        },
      ]
    },
    {
      path: "login",
      component: _import("login"),
      name: "login"
    },
    {
      path: "register",
      component: _import("register"),
      name: "register"
    },
  ]
})
