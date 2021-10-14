import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  //vue의 data
  state: {
<<<<<<< Updated upstream
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
=======
    nickName: localStorage.getItem("nickName"),
    //사용자 Main 화면
    wonBalace: "",
    wonOfMon: "",
    incOfMon: "",
    bzOfMon: "",
    bzBalace: "",
    //한달 충전, 혜택 가능 금액(금액 변경 용이하게)
    maxWonCharge: 2000000, //한달 충전가능금액
    maxIncentive: 500000, //한달 혜택가능금액
    incentiveRate: 100,
    //paymentList
    reviewContents: [],
    toastText: "",
    txHash: "12",
  },
  //mutations : 상태값을 변경시키는 로직 state를 수정
  mutations: {
    //사용자 Main 화면
    main: async (state) => {
      const address = localStorage.getItem("address");

      const contracts = new ethers.Contract(
        CONTRACT_ADDRESS,
        PAYMENT_ABI,
        provider
      );
      await contracts
        .userMainLoad(address)
        .then((res) => {
          state.wonBalace = res["wonBalace"];
          state.wonOfMon = res["WonOfMon"];
          state.incOfMon = res["IncOfMon"];
          state.bzOfMon = res["BzOfMon"] / state.incentiveRate;
          state.bzBalace = res["BzBalace"] / state.incentiveRate;
        })
        .catch(() => {});
    },
    //사용자 리뷰 리스트
    paymentList: async (state, payload) => {
      //const contract = new web3.eth.Contract(PAYMENT_ABI, CONTRACT_ADDRESS);
      const visitor = localStorage.getItem("address");

      const contracts = new ethers.Contract(
        CONTRACT_ADDRESS,
        PAYMENT_ABI,
        provider
      );
      await contracts
        .getReview(visitor, payload.start, payload.end)
        .then((reviewContents) => {
          console.log(reviewContents);
          state.reviewContents = reviewContents;
        });
>>>>>>> Stashed changes
    },
  },
  //비동기를 사용하거나 여러 mutations 연달아 실행할때,
  actions: {},
  getters: {},
});

// const contract = new web3.eth.Contract(PAYMENT_ABI, CONTRACT_ADDRESS);

// await contract.methods
//   .userMainLoad(address) //계정 대입
//   .call()
//   .then((res) => {
//     state.wonBalace = res["wonBalace"];
//     state.wonOfMon = res["WonOfMon"];
//     state.incOfMon = res["IncOfMon"];
//     state.bzOfMon = res["BzOfMon"] / state.incentiveRate;
//     state.bzBalace = res["BzBalace"] / state.incentiveRate;
//   })
//   .catch(() => {});
