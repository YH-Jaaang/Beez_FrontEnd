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
  //회원가입 페이지
  {
    path: "/SignUp",
    components: {
      default: () => import("@/views/SignUp.vue"),
      header: () => import("@/layout/StartHeader.vue"),
      footer: () => import("@/layout/Footer.vue"),
    },
  },
  //message 컴포넌트
  // {
  //   path: "/Correct",
  //   component: import("@/layout/Footer.vue"),
  //   name: "correct",
  // },
  // {
  //   path: "/Fail",
  //   components: {
  //     default: () => import("@/views/components/Fail.vue"),
  //   },
  // },
  {
    path: "/PasswordCheck",
    components: {
      default: () => import("@/views/PasswordCheck.vue"),
    },
    // beforeEnter: function(to, from, next) {
    //   // 인증 값 검증 로직 추가
    // },
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
    path: "/PaymentList",
    components: {
      default: () => import("@/views/PaymentList.vue"),
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
  {
    path: "/StoreWithdrawalList",
    components: {
      default: () => import("@/views/StoreWithdrawalList.vue"),
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
router.beforeEach(function(to, from, next) {
  // to: 이동할 url에 해당하는 라우팅 객체
  if (
    to.matched.some(function(routeInfo) {
      return routeInfo.meta.authRequired;
    })
  ) {
    // 이동할 페이지에 인증 정보가 필요하면 경고 창을 띄우고 페이지 전환은 하지 않음
    next("/PasswordCheck");
  } else {
    console.log("routing success : '" + to.path + "'");
    next(); // 페이지 전환
  }
});
export default router;
