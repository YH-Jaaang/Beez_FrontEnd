<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import { WON_CONTRACT_ADDRESS } from "@/contract/ContractAddress.js";
import { PROVIDER } from "@/contract/Provider.js";
import { ethers } from "ethers";
import { WONTOKEN_ABI } from "@/contract/ContractABI.js";

export default {
  name: "App",
  async beforeCreate() {
    //유저 충전 toast 모든페이지에서 확인 가능
    const abi = WONTOKEN_ABI;
    const provider = PROVIDER;
    const contract = await new ethers.Contract(
      WON_CONTRACT_ADDRESS,
      abi,
      provider
    );
    await contract.on("chargeResult", (to, chargeAmount, chargeInc) => {
      console.log(to, parseInt(chargeAmount), parseInt(chargeInc));
      if (to == localStorage.getItem("address")) {
        this.$toaster.success("충전이 완료되었습니다.");
        this.$store.commit("main");
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
