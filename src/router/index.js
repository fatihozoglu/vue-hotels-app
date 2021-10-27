import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
  },
  {
    path: "/hotels/:name",
    name: "Hotels",
    props: true,
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Hotels.vue"),
  },
  {
    path: "/reservation",
    name: "Reservation",
    props: true,
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Reservation.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
