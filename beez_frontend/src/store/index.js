import Vue from "vue";
import Vuex from "vuex";
import { PAYMENT_ABI } from "@/contract/ContractABI.js";
import { CONTRACT_ADDRESS } from "@/contract/ContractAddress.js";

Vue.use(Vuex);
const Web3 = require("web3");
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/v3/88ce7dc742a14dec85fde399eaf36090"
  )
);

export default new Vuex.Store({
  //vue의 data
  state: {
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
  },
  //mutations : 상태값을 변경시키는 로직 state를 수정
  mutations: {
    //사용자 Main 화면
    main: async (state) => {
      const address = localStorage.getItem("address");
      const contract = new web3.eth.Contract(PAYMENT_ABI, CONTRACT_ADDRESS);

      await contract.methods
        .userMainLoad(address) //계정 대입
        .call()
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
    paymentList: async (state, time) => {
      const contract = new web3.eth.Contract(PAYMENT_ABI, CONTRACT_ADDRESS);
      const visitor = localStorage.getItem("address");
      // foreach 파싱해서 배열에 넣기 const 배열(포문돌리기)
      await contract.methods
        .getReview(visitor, time)
        .call()
        .then((reviewContents) => {
          console.log(reviewContents);
          state.reviewContents = reviewContents;
        });
    },
  },
  //비동기를 사용하거나 여러 mutations 연달아 실행할때,
  actions: {},
  getters: {},
});
