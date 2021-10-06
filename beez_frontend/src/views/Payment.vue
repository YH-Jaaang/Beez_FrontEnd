<template>
  <div id="app">
    <div>
      <h1 id="page_title">
        <FontAwesomeIcon :icon="faQrcode" style="color:#f8b704" />
        결제하기
      </h1>
    </div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-card id="card_qr" title="QR코드 인식">
        <div class="qrbtn">
          <div class="pay_form">
            <b-form-group
              description="오른쪽 버튼을 눌러 QR코드를 인식해주세요."
            >
              <b-form-input
                id="payForm"
                v-model="form.scanned"
                required
                disabled
                >{{ form.scanned }}</b-form-input
              >

              <b-button v-b-modal.pay_modal>
                <FontAwesomeIcon :icon="faQrcode" style="color:#f8b704" />
              </b-button>
            </b-form-group>
            <!-- </b-form> -->
          </div>

          <b-modal id="pay_modal" hide-header ok-only>
            <p class="qrheader my-2">가게의 QR코드를 인식해주세요.</p>
            <div class="camera">
              <vue-qr-reader
                v-if="show"
                v-on:code-scanned="codeScanned"
                v-on:error-captured="errorCaptured"
                :stop-on-scanned="true"
                :draw-on-found="true"
                :responsive="false"
              />
            </div>

            <p class="qrsuccess my-2">
              {{ qrsuccess }}
            </p>
          </b-modal>
        </div>
      </b-card>

      <b-card id="card_qr" title="결제금액 입력">
        <div class="pay_amount">
          <b-form-group>
            <a>결제금액</a>
            <b-form-input
              id="pay_amount"
              v-model="form.price"
              type="number"
              required
              style="float:right"
            ></b-form-input>
          </b-form-group>

          <div id="bz_amount">
            <b-button v-b-toggle.bzForm>BZ 사용</b-button>
            <b-collapse id="bzForm" class="mt-1">
              <b-card>
                <b-form-group>
                  <li>
                    <a>보유 BZ</a>
                    <a style="float:right">
                      {{ this.$store.state.bzBalace | comma }}
                      <FontAwesomeIcon
                        :icon="faBitcoin"
                        style="color:#76512c"
                        size="lg"
                      />
                    </a>
                  </li>
                  <li>
                    <a>사용 BZ</a>
                    <b-form-input
                      v-model="form.bz"
                      :state="validation"
                      type="number"
                    ></b-form-input>
                  </li>
                </b-form-group>

                <!-- <b-button size="sm">사용</b-button> -->
                <a id="font-red" style="float:right">{{ error }}</a>

                <div class="bz_detail">
                  <a>
                    <FontAwesomeIcon
                      :icon="faBitcoin"
                      style="color:#76512c"
                      size="lg"
                    />
                    BZ 사용 방법</a
                  >
                  <li>
                    <a
                      >- BZ를 사용하시려면 [사용 BZ]를 입력하시고 [사용]을
                      눌러주세요.</a
                    >
                  </li>
                  <li>
                    <a
                      >- 사용하신 BZ는 [결제내역]에서 사용된 내역을 확인할 수
                      있습니다.</a
                    >
                  </li>
                  <li>
                    <a
                      >- 결제금액에서 BZ 사용금액을 뺀 나머지 금액은 결제시
                      현금잔액으로 결제되며, 충전된 현금잔액만 BZ와 함께 사용할
                      수 있습니다.</a
                    >
                  </li>
                </div>
              </b-card>
            </b-collapse>
          </div>

          <div class="pay_modal">
            <b-modal id="p_modal" ref="pay_modal" hide-footer title="결제 정보">
              <div class="d-block">
                <a class="posit_rel margin138">현금 결제</a>
                <a class="posit_rel" style="float:right">{{ won }} 원</a>
              </div>
              <div class="d-block">
                <a class="posit_rel margin138">BZ 결제</a>
                <a class="posit_rel" style="float:right">{{ form.bz }} BZ</a>
              </div>
              <div class="d-block" id="total_pay">
                <a class="posit_rel margin90">총 결제금액</a>
                <a class="posit_rel2" style="float:right"
                  >{{ form.price }} 원</a
                >
              </div>
              <div class="text-center">
                <b-button class="mt-3" inline-block @click="hideModal"
                  >취소</b-button
                >
                <b-button class="mt-3" inline-block @click="payPost"
                  >확인</b-button
                >
              </div>
            </b-modal>
          </div>

          <div class="form_btn text-center">
            <b-button type="reset">취소</b-button>
            <b-button type="submit" ref="pay_btn" :disabled="error.length > 9"
              >결제</b-button
            >
          </div>
        </div>
      </b-card>
    </b-form>
  </div>
</template>

<script>
import VueQrReader from "../components/VueQrReader.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { PAYMENT_ABI } from "@/contract/ContractABI.js";
import { CONTRACT_ADDRESS } from "@/contract/ContractAddress.js";
import axios from "axios";

export default {
  name: "app",
  components: {
    VueQrReader,
    FontAwesomeIcon,
  },
  data() {
    return {
      errorMessage: "",
      qrsuccess: "",
      show: true,

      //아이콘
      faQrcode,
      faBitcoin,

      //결제 입력폼
      form: {
        scanned: "",
        price: "",
        bz: "",
      },
      myBz: 33,
      won: "",
      error: "",
      userpPrivateKey: "",
      userAddress: "",
    };
  },
  beforeCreate() {
    this.$store.commit("main");
  },
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  methods: {
    //QR카메라
    codeScanned(code) {
      this.form.scanned = code;
      this.qrsuccess = "QR코드 인식 성공";
    },
    errorCaptured(error) {
      switch (error.name) {
        case "NotAllowedError":
          this.errorMessage = "Camera permission denied.";
          break;
        case "NotFoundError":
          this.errorMessage = "There is no connected camera.";
          break;
        case "NotSupportedError":
          this.errorMessage =
            "Seems like this page is served in non-secure context.";
          break;
        case "NotReadableError":
          this.errorMessage =
            "Couldn't access your camera. Is it already in use?";
          break;
        case "OverconstrainedError":
          this.errorMessage = "Constraints don't match any installed camera.";
          break;
        default:
          this.errorMessage = "UNKNOWN ERROR: " + error.message;
      }
      console.error(this.errorMessage);
    },

    //결제 입력폼
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
      this.$refs["pay_modal"].show();
      this.won = parseInt(this.form.price) - parseInt(this.form.bz * 100);
    },
    onReset(event) {
      event.preventDefault();
      this.form.scanned = "";
      this.form.price = "";
      this.form.bz = "";
    },

    //최종 결제 버튼 후 모달
    hideModal() {
      this.$refs["pay_modal"].hide();
    },
    //db에서 address, privateAddress받아오기
    async payPost() {
      // const privateKey = "";
      // const userAddress ="";
      (async () => {
        //이런식으로 header 토큰 삽입 => security 활성화.
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("token");

        //axios전달(/api로 시작 => vue.config.js에서 그렇게 설정, 무조건 spring에서 dto를 이용하여 값 전달 받아야함)
        await axios
          .get("/api/users")
          .then((res) => {
            //여기서 Correct.vue 처리 해주면 됨
            alert(res.data);
            console.log(res);
            this.userpPrivateKey = res.data.data.privateKey;
            this.userAddress = res.data.data.walletAddress;
            console.log(this.userpPrivateKey);
            console.log(this.userAddress);
          })
          .catch((err) => {
            alert(err);
          });
      })();

      const Web3 = require("web3");
      const web3 = new Web3(
        new Web3.providers.HttpProvider(
          "https://ropsten.infura.io/v3/88ce7dc742a14dec85fde399eaf36090"
        )
      );
      //msg.sender credentials(자격증명) - PRIVATE_ADDRESS를 활용
      const PRIVATE_KEY = this.userpPrivateKey; //바꿔

      /****************************Solidity 매개변수****************************/
      const to_ADDRESS = this.userAddress; //사용자(db) 원토큰 백만원, 비즈 십만원
      const recipient_ADDRESS = "0x6368b1714c35a7af7a3f632cb2dc0c47023c2b26"; //소상공인(qr)
      const cost = this.form.price; //입력값
      const won_mount = this.won; //입력값을 활용해 계산
      const beez_mount = this.form.bz * 100; //입력값
      /***********************************************************************/

      const sendRawTx = (rawTx) =>
        new Promise((resolve, reject) =>
          web3.eth
            .sendSignedTransaction(rawTx)
            .on("transactionHash", resolve)
            .on("error", reject)
        );

      const { address: from } = web3.eth.accounts.privateKeyToAccount(
        PRIVATE_KEY
      );
      const contract = new web3.eth.Contract(PAYMENT_ABI, CONTRACT_ADDRESS); //import 컨트랙트 - ABI, ADDRESS
      //const query = await contract.methods.addWhitelisted(
      const query = await contract.methods.payment(
        to_ADDRESS,
        recipient_ADDRESS,
        cost,
        won_mount,
        beez_mount,
        "1633177666" //충전시간
      );
      const transaction = {
        to: CONTRACT_ADDRESS,
        from,
        value: "0",
        data: query.encodeABI(),
        gasPrice: web3.utils.toWei("2", "gwei"),
        gas: Math.round((await query.estimateGas({ from })) * 1.5), // 1.5 coefficient, just make sure that gas amount is enough
        nonce: await web3.eth.getTransactionCount(from, "pending"),
      };
      const signed = await web3.eth.accounts.signTransaction(
        transaction,
        PRIVATE_KEY
      );
      await sendRawTx(signed.rawTransaction)
        .then((res) => {
          //응답이오면 출력인데 백앤드에서 요청을 보내면 응답이 보통은 옴
          //solidity에서 retruns가 없어서 요청이 안오는 것 같다.
          console.log(res);
        })
        .catch(() => {
          console.log("다시");
        });
      //console.log(hash);
      this.$router.push("/");
    },
  },
  computed: {
    validation() {
      const text = this;
      if (this.form.price.length == 0) text.error = "결제금액을 입력해주세요.";
      else if (this.form.bz.length == 0) text.error = "";
      else if (this.form.price < this.form.bz * 100)
        text.error = "BZ 사용금액이 결제금액을 초과하였습니다.";
      else if (this.$store.state.bzBalace < this.form.bz)
        text.error = "사용 가능한 BZ가 부족합니다.";
      else text.error = "사용 가능합니다.";
      return true;
    },
  },
};
</script>

<style>
/*-----------------폰트, @media---------------------------- */
@font-face {
  font-family: "BCcardB";
  src: url("../fonts/BCcardL.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}

#page_title {
  font-family: BCcardB;
  text-align: center;
  color: #f8b704;
  font-weight: 900;
  border-bottom: 3px solid #f8b704;
  margin: 10%;
}

#card_qr {
  font-family: BCcardB;
  border: 3px solid #76512c;
  border-radius: 30px;
  margin: 4% 6%;
  color: #76512c;
}

#card_qr .card-body {
  padding: 5%;
}

#card_qr .card-title {
  color: #76512c;
  border-bottom: 2.5px solid #76512c;
  font-weight: 900;
  margin-bottom: 20px;
}

/*---------------------------QR 코드 입력창------------------------------ */
.qrbtn {
  font-size: 17px;
}

#payForm {
  width: 85%;
}

.pay_form {
  width: 100%;
}

.pay_form .form-control {
  background-color: rgba(164, 162, 158, 0.463);
  /* border: 2px solid #76512c; */
  border-radius: 10px;
  display: inline-block;
}

.pay_form .form-group {
  width: 100%;
  text-align: center;
}

/*---------------------------QR 버튼/ QR 모달------------------------------ */

#card_qr .btn {
  color: #fff;
  background-color: #76512cb8;
  display: inline-block;
}

#pay_modal {
  font-family: BCcardB;
  color: #f8b704;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

#pay_modal .btn {
  color: #fff;
  background-color: #76512cb8;
}

.qrsuccess {
  color: #fb0000;
}

.qrheader {
  margin: 5%;
  border-bottom: 3px solid #f8b704;
}

/*---------------------------결제 폼------------------------------ */
.form_btn .btn {
  margin-top: 30px;
  margin-left: 14px;
  margin-right: 14px;
  font-size: 17px;
}

.pay_amount a {
  color: #76512c;
  font-weight: 600;
  margin-left: 5px;
}

.pay_amount .form-control {
  background-color: rgba(255, 194, 82, 0.285);
  border: 2px solid rgba(255, 194, 82, 0.285);
  border-radius: 10px;
  display: inline-block;
}

.pay_amount .form-group {
  /* text-align: center; */
  margin-bottom: 10px;
}

#pay_amount {
  width: 75%;
}

/*---------------------------BZ 폼------------------------------ */
#bz_amount .btn {
  margin-right: 10px;
  /* color: #f8b704; */
  font-weight: 600;
  background-color: #f8b704;
  margin-top: 10px;
}

#bzForm .card {
  background-color: rgba(253, 249, 136, 0.285);
  border-radius: 15px;
}

#bzForm .form-control {
  width: 50%;
  float: right;
}

/* #bzForm .btn {
  float: right;
  margin-bottom: 5px;
  margin-top: 5px;
} */

#font-red {
  color: rgb(226, 38, 38);
  font-size: 13px;
  margin-right: 7px;
}

.bz_detail {
  margin-top: 4.8rem;
  color: black;
  font-size: 11px;
}

/*---------------------------결제 버튼 후 모달------------------------------ */

#p_modal {
  font-family: BCcardB;
  color: #76512c;
  font-weight: 600;
}

#p_modal .btn {
  color: #76512c;
  background-color: #ffde02;
  width: 25%;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 14px;
  font-weight: 700;
}

#total_pay {
  border-top: 2px solid #76512c;
  margin-top: 2%;
  margin-left: 0%;
  margin-right: 11%;
}

#total_pay {
  position: relative;
  right: -5%;
}
</style>
