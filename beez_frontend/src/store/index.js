import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  //vue의 data
  state: {
    //message 컴포넌트
    correctMessage: "",
    failMessage: "",
    //사용자 Main 화면
    total: "",
    //한달 충전, 혜택 가능 금액(금액 변경 용이하게)
    maxWonCharge: 2000000, //한달 충전가능금액
    wonOfMon: "",
    maxIncentive: 500000, //한달 혜택가능금액
    incOfMon: "",
    incentiveRate: 100,
  },
  //mutations : 상태값을 변경시키는 로직 state를 수정
  mutations: {
    //message 컴포넌트
    message: (state, payload) => {
      state.correctMessage = payload;
    },

    //사용자 Main 화면
    login: (state) => {
      var params = {
        email: localStorage.getItem("email"),
      };
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");
      axios
        .post("/api/user/main", params)
        .then((res) => {
          state.total = res.data.data[0];
          console.log(res);
        })
        .catch(() => {});
    },
    //사용자 충전 화면
    chargeMain: (state) => {
      var params = {
        email: localStorage.getItem("email"),
      };
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");
      axios
        .post("/api/charge/main", params)
        .then((res) => {
          state.wonOfMon = res.data.data[0];
          state.incOfMon = res.data.data[1];
          console.log(res);
        })
        .catch(() => {});
    },
  },
  //비동기를 사용하거나 여러 mutations 연달아 실행할때,
  actions: {},
  getters: {},
});
