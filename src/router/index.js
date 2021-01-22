import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const _import = require("./import-" + process.env.NODE_ENV);

export default new Router({
  routes: [
    {
      path: "/",
      component: _import("home"),
      name: "home",
    }
  ]
})
