<template>
  <div>
    <b-card id="card_TokenChange">
      <img src="../assets/Card3.png" alt="card" />
    </b-card>

    <div class="exchange_section">
      <ul class="Storebank_ac">
        <li>
          <a>{{ bank_na }} 은행</a>
          <a style="float:right">{{ account_no }}</a>
        </li>
      </ul>

      <b-form>
        <ul class="detail_bz_ceo">
          <li>
            <a>환전가능 BZ</a>
            <a style="position:relative; left:20px">{{ form.bzAmount }} 개</a>
          </li>

          <ul class="change_token">
            <b-input-group append="BZ">
              <b-form-input
                v-model="form.bzInput"
                type="text"
                @keyup="tokenValid"
                :state="state"
              ></b-form-input>
            </b-input-group>

            <b-input-group append="원">
              <b-form-input v-model="form.bzToWon" disabled>{{
                form.bzToWon
              }}</b-form-input>
            </b-input-group>

            <li>
              <a id="font-red">{{ error }}</a>
            </li>
          </ul>
        </ul>

        <div class="exchange_btn text-center">
          <b-button @click="showExModal" :disabled="error.length > 9">
            환전
          </b-button>
          <b-button id="wi_btn" href="/StoreMain">취소</b-button>
        </div>
      </b-form>

      <div class="exchange_modal" id="dd">
        <b-modal
          id="ex_modal"
          ref="exchange_modal"
          hide-footer
          title="환전 정보"
        >
          <div class="d-block">
            <a class="posit_rel margin">출금가능 BZ</a>
            <a class="posit_rel" style="float:right"> {{ form.bzAmount }} BZ</a>
          </div>
          <div class="d-block">
            <a class="posit_rel margin">환전 BZ</a>
            <a class="posit_rel" style="float:right"> {{ form.bzInput }} BZ</a>
          </div>
          <div class="d-block">
            <a class="posit_rel margin">환전 금액</a>
            <a class="posit_rel" style="float:right"> {{ form.bzToWon }} 원</a>
          </div>
          <div class="d-block" id="total_excharge">
            <a class="posit_rel margin2">잔여 BZ</a>
            <a class="posit_rel2" style="float:right">{{ rest_bz }} BZ</a>
          </div>

          <b-button class="mt-3" @click="exchangePost"
            >확인</b-button
          >
          <b-button class="mt-3" @click="hideModal">취소</b-button>
        </b-modal>
      </div>
    </div>
    <b-card id="end_StoreExchangeToken">
      <li>
        <h4>
          BZ 환전 안내<FontAwesomeIcon
            :icon="faAngleRight"
            style="float:right"
          />
        </h4>
      </li>
      <li>
        <h4>
          BZ 규정<FontAwesomeIcon :icon="faAngleRight" style="float:right" />
        </h4>
      </li>
    </b-card>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default {
  components: { FontAwesomeIcon },
  data() {
    return {
      bank_na: "KB 국민",
      account_no: "748 ****** 25437",
      error: "",
      rest_bz: "",

      form: {
        bzAmount: "50", //비즈량
        bzInput: "", //비즈 환전 폼
        bzToWon: "", // 결과 값
      },

      //아이콘
      faRedo,
      faAngleRight,
    };
  },
  methods: {
    showExModal() {
      this.$refs["exchange_modal"].show();
      // alert(JSON.stringify(this.form));
    },
    hideModal() {
      this.$refs["exchange_modal"].hide();
    },
    exchangePost() {
      // axios
      //   .get("http://localhost:9091/charge/amount", {
      //     params: {
      //       address: VueCookies.get("Address"),
      //       charge: this.form.number,
      //     },
      //   })
      //   .then((res) => {
      //     console.log(res.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      this.$router.push("/StoreMain");
    },
    tokenValid() {
      this.form.bzInput = this.form.bzInput.replace(/[^0-9]/g, "");
    },
  },
  computed: {
    state() {
      const text = this;
      if (this.form.bzInput.length == 0) {
        text.form.bzToWon = this.form.bzInput * 100;
        text.error = "환전할 BZ를 입력해주세요.";
      } else if (parseInt(this.form.bzInput) > parseInt(this.form.bzAmount)) {
        text.form.bzToWon = this.form.bzInput * 100;
        text.error = "환전가능 BZ가 부족합니다.";
      } else {
        /*parseInt(this.form.bzInput) <= parseInt(this.form.bzAmount);*/
        text.form.bzToWon = this.form.bzInput * 100;
        text.error = "환전 가능합니다.";
        text.rest_bz =
          parseInt(this.form.bzAmount) - parseInt(this.form.bzInput);
      }
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
@font-face {
  font-family: "GmarketSansTTFMedium";
  src: url("../fonts/GmarketSansTTFMedium.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}
/*--------------------------card--------------------------- */
#card_TokenChange {
  background-color: #b9ddf7;
  border: 2px solid rgb(51, 28, 155);
  border-radius: 50px;
  width: 12rem;
  height: 17rem;
  margin: 30px auto;
}

#card_TokenChange img {
  margin: 1px -30px;
  height: 13rem;
}

/*-------------------------- changetoken-section -------------------------- */
.exchange_section {
  font-family: BCcardB;
  font-weight: 600;
  margin: 30px 30px 30px 30px;
}

.Storebank_ac {
  font-size: 15px;
  background-color: #0aa6df23;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 30px;
}
/* .bank_ac li {
  padding: 10px;
} */

/*--------------------------BEEZ_amount/changetoken_amount------------------------------- */
.BZ_am {
  font-size: 12px;
  margin-left: 10px;
}

.change_token {
  font-size: 20px;
}

.change_token .form-control {
  display: inline-block;
  background-color: rgba(125, 174, 224, 0.463);
  border: 2px solid rgba(125, 174, 224, 0.463);
  border-radius: 10px;
  padding: 10px;
  width: 84%;
  margin-bottom: 10px;
}

.change_token .input-group-text {
  background-color: rgba(125, 174, 224, 0.463);
  border-radius: 10px;
  margin-bottom: 10px;
  width: 45px;
  color: #100055;
  font-weight: 600;
}

#font-red {
  color: rgb(226, 38, 38);
  font-size: 13px;
  margin-right: 7px;
}
/*-------------------------- 비즈-------------------------- */
.detail_bz_ceo {
  color: #100055;
  font-weight: 600;
  background-color: #0a6adf1a;
  border-radius: 17px;
  padding: 8px 14px;
  /* border: 2px solid #76512c; */
}
.detail_bz_ceo li {
  padding-top: 9px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 15px;
}

/*-------------------------- 환전 버튼-------------------------- */
.exchange_btn {
  font-family: BCcardB;
  margin-top: 30px;
}

.exchange_btn .btn {
  color: #100055;
  background-color: #0a6adf1a;
  margin-left: 25px;
  margin-right: 25px;
  font-size: 20px;
  font-weight: 900;
  border: 1px solid #fff;
  border-radius: 15px;
  width: 25%;
  margin-bottom: 15%;
}
@media (max-width: 400px) {
  #changetoken_amount {
    display: inline-block;
    background-color: rgba(125, 174, 224, 0.463);
    /* border: 2px solid #76512c; */
    border-radius: 10px;
    padding: 10px;
    width: 83%;
  }
}

/*-------------------------- 환전 모달창-------------------------- */
.modal-header {
  margin: 3%;
}
.modal-title {
  font-weight: 800;
}

#ex_modal {
  font-family: BCcardB;
  color: #100055;
  padding: 10px;
  top: 10%;
}

#ex_modal .btn {
  color: #100055;
  background-color: rgba(125, 174, 224, 0.463);
  width: 30%;
  margin-left: 15%;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid white;
}

#total_excharge {
  border-top: 2px solid #100055;
  margin-top: 2%;
  margin-left: 0%;
  margin-right: 11%;
}

#total_excharge {
  position: relative;
  right: -5%;
}
#total_charge {
  border-top: 2px solid #76512c;
  margin-top: 2%;
  margin-left: 0%;
  margin-right: 11%;
}

#total_charge {
  position: relative;
  right: -5%;
}

#align_right {
  float: right;
}
.posit_rel {
  position: relative;
  right: 19%;
}

.posit_rel2 {
  position: relative;
  right: 15%;
}

.posit_rel.left {
  left: 20px;
}

.posit_rel.margin {
  left: 20%;
}

.posit_rel.margin2 {
  left: 17%;
}
/*--------------------------------안내----------------------------------------*/
#end_StoreExchangeToken {
  font-family: "GmarketSansTTFMedium";
}
#end_StoreExchangeToken .card-body {
  font-weight: 600;
  padding: 0;
}
#end_StoreExchangeToken li {
  padding-left: 6%;
  padding-right: 6%;
  padding-top: 4%;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
