import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import VueCookies from "vue-cookies";
import axios from "axios";

//fontAwesome (bootstrapIcon과 동시 사용 가능)
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(far);
library.add(fab);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(VueCookies);
axios.defaults.baseURL = "https://172.30.1.44:9091";
//토큰, 유저아이디, 지갑주소 확인하기
// const storage = window.sessionStorage;
// console.log(storage.getItem("jwt-auth-token"));
// console.log(storage.getItem("login_user"));
// console.log(storage.getItem("wallet_address"));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
