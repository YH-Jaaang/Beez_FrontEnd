import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  //vue의 data
  state: {
    token: null,
    email: null,
    nickname: null,
    role: null,
    total: "",
  },
  //mutations : 상태값을 변경시키는 로직 state를 수정
  mutations: {
    login: (state) => {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");
      axios
        .get("/api/hello")
        .then((res) => {
          state.total = res.data[0];
        })
        .catch(() => {});
    },
  },
  //비동기를 사용하거나 여러 mutations 연달아 실행할때,
  actions: {},
  getters: {},
});
