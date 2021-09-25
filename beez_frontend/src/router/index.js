import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    //시작 페이지
    path: "/",
    name: "Start",
    components: {
      default: () => import("@/views/Start.vue"),
      header: () => import("@/layout/StartHeader.vue"),
      footer: () => import("@/layout/Footer.vue"),
    },
  },
  //사용자 페이지
  {
    path: "/Main",
    components: {
      default: () => import("@/views/Main.vue"),
      header: () => import("@/layout/Header.vue"),
      footer: () => import("@/layout/Footer.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/ChargeList",
    components: {
      default: () => import("@/views/ChargeList.vue"),
      header: () => import("@/layout/Header.vue"),
      footer: () => import("@/layout/Footer.vue"),
    },
  },

  {
    path: "/Charge",
    components: {
      default: () => import("@/views/Charge.vue"),
      header: () => import("@/layout/Header.vue"),
      footer: () => import("@/layout/Footer.vue"),
    },
  },
  {
    path: "/Payment",
    components: {
      default: () => import("@/views/Payment.vue"),
      header: () => import("@/layout/Header.vue"),
      footer: () => import("@/layout/Footer.vue"),
    },
  },
  // 소상공인 페이지
  {
    path: "/StoreMain",
    components: {
      default: () => import("@/views/StoreMain.vue"),
      header: () => import("@/layout/StoreHeader.vue"),
      footer: () => import("@/layout/Footer.vue"),
    },
  },
  {
    path: "/StoreReviewList",
    components: {
      default: () => import("@/views/StoreReviewList.vue"),
      header: () => import("@/layout/StoreHeader.vue"),
      footer: () => import("@/layout/Footer.vue"),
    },
  },
  {
    path: "/StoreQR",
    components: {
      default: () => import("@/views/StoreQR.vue"),
      header: () => import("@/layout/StoreHeader.vue"),
      footer: () => import("@/layout/Footer.vue"),
    },
  },
  {
    path: "/StoreExchangeToken",
    components: {
      default: () => import("@/views/StoreExchangeToken.vue"),
      header: () => import("@/layout/StoreHeader.vue"),
      footer: () => import("@/layout/Footer.vue"),
    },
  },
  {
    path: "/StoreWithdrawal",
    components: {
      default: () => import("@/views/StoreWithdrawal.vue"),
      header: () => import("@/layout/StoreHeader.vue"),
      footer: () => import("@/layout/Footer.vue"),
    },
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;