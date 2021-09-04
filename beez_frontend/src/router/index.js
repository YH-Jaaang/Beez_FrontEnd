import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Test from "../views/components/Test.vue";
import Review from "../views/Review.vue";
import Use from "../views/Use.vue";
import Charge from "../views/Charge.vue";
import Payment from "../views/Payment.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Main },
  { path: "/Test", component: Test },
  { path: "/Review", component: Review },
  { path: "/Use", component: Use },
  { path: "/Charge", component: Charge },
  { path: "/Payment", component: Payment },
  { path: "/Review", name: "Review", component: Review },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
