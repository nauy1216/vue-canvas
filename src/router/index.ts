import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "test",
    component: () => import(/* webpackChunkName: "about" */ "../views/test/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
