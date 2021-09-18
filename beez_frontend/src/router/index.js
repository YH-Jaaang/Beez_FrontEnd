import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../views/Main.vue";
import Test from "../views/components/Test.vue";
import Review from "../views/Review.vue";
import Use from "../views/Use.vue";
import Charge from "../views/Charge.vue";
import Payment from "../views/Payment.vue";
import Start from "../views/Start.vue";
//소상공인 뷰
import StoreMain from "../views/StoreMain.vue";
import StoreExchangeToken from "../views/StoreExchangeToken";
import StoreWithdrawal from "../views/StoreWithdrawal";

import StartHeader from "../layout/StartHeader.vue";
import Header from "../layout/Header.vue";
import StoreHeader from "../layout/StoreHeader.vue";
import Footer from "../layout/Footer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    components: { default: Start, header: StartHeader, footer: Footer },
  },
  {
    path: "/Main",
    components: { default: Main, header: Header, footer: Footer },
  },
  {
    path: "/Test",
    components: { default: Test, header: Header, footer: Footer },
  },
  {
    path: "/Review",
    components: { default: Review, header: Header, footer: Footer },
  },
  {
    path: "/Use",
    components: { default: Use, header: Header, footer: Footer },
  },
  {
    path: "/Charge",
    components: { default: Charge, header: Header, footer: Footer },
  },
  {
    path: "/Payment",
    components: { default: Payment, header: Header, footer: Footer },
  },
  {
    path: "/Review",
    components: { default: Review, header: Header, footer: Footer },
  },
  // 소상공인 페이지
  {
    path: "/StoreMain",
    components: { default: StoreMain, header: StoreHeader, footer: Footer },
  },
  {
    path: "/StoreExchangeToken",
    components: {
      default: StoreExchangeToken,
      header: StoreHeader,
      footer: Footer,
    },
  },
  {
    path: "/StoreWithdrawal",
    components: {
      default: StoreWithdrawal,
      header: StoreHeader,
      footer: Footer,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
