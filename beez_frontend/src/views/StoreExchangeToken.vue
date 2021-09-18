<template>
  <div>
    <b-card id="card_TokenChange">
      <img src="../assets/charge/beez_card.png" alt="card" />
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
                type="number"
                :state="state"
              ></b-form-input>
            </b-input-group>

            <b-input-group append="원">
              <b-form-input v-model="form.bzToWon">{{
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
            <a class="posit_rel margin164">출금가능 BZ</a>
            <a class="posit_rel" style="float:right"> {{ form.bzAmount }} BZ</a>
          </div>
          <div class="d-block">
            <a class="posit_rel margin164">환전 BZ</a>
            <a class="posit_rel" style="float:right"> {{ form.bzInput }} BZ</a>
          </div>
          <div class="d-block">
            <a class="posit_rel margin164">환전 금액</a>
            <a class="posit_rel" style="float:right"> {{ form.bzToWon }} 원</a>
          </div>
          <div class="d-block" id="total_excharge">
            <a class="posit_rel margin100">잔여 BZ</a>
            <a class="posit_rel2" style="float:right">{{ rest_bz }} BZ</a>
          </div>
          <b-button class="mt-3" inline-block @click="hideModal">취소</b-button>
          <b-button class="mt-3" inline-block @click="exchangePost"
            >확인</b-button
          >
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
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
  },
  computed: {
    state() {
      if (this.form.bzInput.length == 0)
        return (
          (this.form.bzToWon = this.form.bzInput * 100),
          (this.error = "환전할 BZ를 입력해주세요.")
        );
      else if (parseInt(this.form.bzInput) > parseInt(this.form.bzAmount)) {
        return (
          (this.form.bzToWon = this.form.bzInput * 100),
          (this.error = "환전가능 BZ가 부족합니다.")
        );
      } else parseInt(this.form.bzInput) <= parseInt(this.form.bzAmount);
      return (
        (this.form.bzToWon = this.form.bzInput * 100),
        (this.error = "환전 가능합니다."),
        (this.rest_bz =
          parseInt(this.form.bzAmount) - parseInt(this.form.bzInput))
      );
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

/*--------------------------card--------------------------- */
#card_TokenChange {
  font-family: BCcardB;
  background-color: #fff;
  /* padding: 10px 7px; */
  border-radius: 50px;
  border: 2.5px solid #76512ce3;
  width: 12rem;
  height: 17rem;
  margin: 30px auto;
}

#card_TokenChange img {
  margin: -12px -31px;
  height: 15rem;
}

/*-------------------------- changetoken-section -------------------------- */
.exchange_section {
  font-family: BCcardB;
  font-weight: 600;
  margin: 30px 30px 30px 30px;
}

.Storebank_ac {
  font-size: 15px;
  background-color: #0adfd711;
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
  color: #100055;
  font-weight: 600;
}

/*-------------------------- 환전 버튼-------------------------- */
.exchange_btn {
  font-family: BCcardB;
  margin-top: 30px;
}

.exchange_btn .btn {
  color: #100055;
  background-color: #e0f5f7;
  margin-left: 25px;
  margin-right: 25px;
  font-size: 25px;
  font-weight: 900;
  border: 2.5px solid #100055;
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
#ex_modal {
  font-family: BCcardB;
  color: #100055;
}

#ex_modal .btn {
  color: #100055;
  background-color: rgba(125, 174, 224, 0.463);
  width: 30%;
  margin-left: 15%;
  font-size: 14px;
  font-weight: 700;
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
</style>
