<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import {
  CONTRACT_ADDRESS,
  WON_CONTRACT_ADDRESS,
} from "@/contract/ContractAddress.js";
import { PROVIDER } from "@/contract/Provider.js";
import { ethers } from "ethers";
import { PAYMENT_ABI, WONTOKEN_ABI } from "@/contract/ContractABI.js";

export default {
  name: "App",
  beforeCreate() {
    //유저 충전 toast 모든페이지에서 확인 가능
    const abi = WONTOKEN_ABI;
    const provider = PROVIDER;
    const contract = new ethers.Contract(WON_CONTRACT_ADDRESS, abi, provider);
    contract.on("chargeResult", (to) => {
      //console.log(to, parseInt(chargeAmount), parseInt(chargeInc));
      if (to.toLowerCase() == localStorage.getItem("address").toLowerCase()) {
        this.$toaster.success("충전이 완료되었습니다.");
        this.$store.commit("main");
      }
    });
    const payload = {
      start: 7,
      end: 0,
      page: 2,
    };
    const abi2 = PAYMENT_ABI;
    const contract2 = new ethers.Contract(CONTRACT_ADDRESS, abi2, provider);
    contract2.on("paymentResult", (to, recipient) => {
      console.log(recipient);
      if (
        recipient.toLowerCase() == localStorage.getItem("address").toLowerCase()
      ) {
        this.$toaster.success("결재가 완료되었습니다.");
        this.$store.commit("paymentList", payload);
      }
    });
  },
  // mathods: {
  //   getServerSideProps({ req, res, params }) {
  //     if (!req.headers.referer) {
  //       res.statusCode = 302;
  //       res.setHeader("Location", `/<link>`); // Replace <link> with your url link
  //       res.end();
  //     }
  //     return { props: {} };
  //   },
  // },
};
</script>
