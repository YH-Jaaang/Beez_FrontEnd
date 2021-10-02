<template>
  <div id="app">
    <b-card id="card_charge">
      <img src="../assets/Card3.png" alt="card" />
    </b-card>

    <div class="charge_section">
      <ul class="bank_ac">
        <li>
          <a>{{ bank_na }} 은행</a>
          <a id="align_right">{{ account_no }}</a>
        </li>
      </ul>

      <ul class="charge_am">
        <li class="poss_am">
          <a>충전가능금액</a>
          <a class="posit_rel left">{{ poss_ch }} 원</a>
        </li>
        <li class="poss_am">
          <a>혜택가능금액</a>
          <a class="posit_rel left">{{ poss_am }} 원</a>
        </li>

        <b-form @submit="onSubmit" @reset="onReset">
          <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
          <b-input-group class="form_charge">
            <b-form-input
              v-model="form.number"
              type="number"
              :state="ch_state"
            ></b-form-input>

            <b-input-group-append>
              <b-button id="re_btn" type="reset">
                <FontAwesomeIcon :icon="faRedo" id="btn_color" />
              </b-button>
            </b-input-group-append>
          </b-input-group>
          <li>
            <a id="font-red">{{ error }}</a>
          </li>
        </b-form>
      </ul>
      <div class="text-center">
        <b-button id="ch_btn" @click="showModal" :disabled="error.length > 9">
          충전
        </b-button>
      </div>
    </div>

    <div class="charge_modal" id="dd">
      <b-modal id="ch_modal" ref="charge_modal" hide-footer title="충전 정보">
        <div class="d-block">
          <a class="posit_rel margin138">충전 금액</a>
          <a class="posit_rel" style="float:right">{{ form.number }} 원</a>
        </div>
        <!-- v-if="인센티브 금액이 5만원 초과하였을 경우 보이지 않게, 현재 4.5만원 인센티브 받았는데 다음 충전시 인센티브를
        5만원 초과 했을시 5천원만 인센티브 더주기" -->
        <div class="d-block">
          <a class="posit_rel margin138">인센티브</a>
          <a class="posit_rel" style="float:right"
            >{{ form.number * 0.1 }} 원</a
          >
        </div>
        <div class="d-block" id="total_charge">
          <a class="posit_rel margin90">총 충전금액</a>
          <a class="posit_rel2" style="float:right">{{ charge_amount }} 원</a>
        </div>
        <b-button class="mt-3" inline-block @click="hideModal">취소</b-button>
        <b-button class="mt-3" inline-block @click="chargePost">확인</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      bank_na: "KB 국민",
      account_no: "748 ****** 25437",
      poss_ch: "2000000",
      poss_am: "500,000",
      error: "",
      charge_amount: "",
      //아이콘
      faRedo,

      form: {
        number: "",
      },
      // show: true,
    };
  },

  methods: {
    //충전 입력 폼
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      this.form.number = "";
      // this.show = false;
      // this.$nextTick(() => {
      //   this.show = true;
      // });
    },

    //충전 버튼 후 모달창
    showModal() {
      this.$refs["charge_modal"].show();
    },
    hideModal() {
      this.$refs["charge_modal"].hide();
    },

    //값 전달 axios
    async chargePost() {
      var params = {
        email: localStorage.getItem("email"),
        charge: this.form.number,
      };
      //이런식으로 header 토큰 삽입 => security 활성화.
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");

      //axios전달(/api로 시작 => vue.config.js에서 그렇게 설정, 무조건 spring에서 dto를 이용하여 값 전달 받아야함)
      await axios
        .post("/api/charge/amount", params)
        .then((res) => {
          console.log(res.data);
        })
        .catch(() => {
          //여기서 모달창 하나 띄우고 확인 눌렀을 경우, Clear 시키기
          //여기서 localStorage.clear(); 안먹힘
        });
      this.$router.push("/Main");
    },
  },
  computed: {
    ch_state() {
      const text = this;
      if (this.form.number.length == 0)
        text.error = "충전할 금액을 입력해주세요.";
      else if (this.form.number < 10000)
        text.error = "10,000원 이상 충전 가능합니다.";
      else if (this.form.number % 1000 !== 0)
        text.error = "1,000원 단위로 충전 가능합니다";
      else if (this.form.number > 2000000)
        text.error = "충전가능금액을 초과하였습니다.";
      else {
        text.error = "충전 가능합니다.";
        text.charge_amount =
          parseInt(this.form.number) + parseInt(this.form.number * 0.1);
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

/*--------------------------card--------------------------- */
#card_charge {
  font-family: BCcardB;
  background-color: rgba(177, 175, 175, 0.394);
  /* padding: 10px 7px; */
  border-radius: 50px;
  /* border: 2.5px solid #76512ce3; */
  width: 12rem;
  height: 17rem;
  margin: 30px auto;
}

#card_charge img {
  margin: 1px -30px;
  height: 13rem;
}

/*-------------------------- charge-section -------------------------- */
.charge_section {
  font-family: BCcardB;
  font-weight: 600;
  margin: 30px 30px 30px 30px;
}

.bank_ac {
  font-size: 15px;
  background-color: #faebbb71;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 30px;
}
/* .bank_ac li {
  padding: 10px;
} */

.form_charge {
  margin-top: 10px;
}

/*--------------------------poss_am/charge_am------------------------------- */
.charge_am li {
  font-size: 13px;
  /* margin-left: 10px; */
  color: #000;
  padding: 0px;
}

.charge_am .form-control {
  background-color: rgba(164, 162, 158, 0.612);
  border-radius: 10px;
}

.charge_am {
  font-size: 20px;
  background-color: #f8d97171;
  border-radius: 17px;
  padding: 20px 14px;
}

/* .charge_am {
  background-color: rgba(164, 162, 158, 0.463);
} */

#re_btn {
  background-color: rgba(164, 162, 158, 0.612);
  margin-top: 1px;
  margin-bottom: 1px;
}

#ch_btn {
  margin-top: 5%;
  color: #76512c;
  background-color: #ffde02;
  font-size: 23px;
  font-weight: 900;
  border: 2.5px solid #76512c;
  font-family: BCcardB;
}
#btn_color {
  color: #fbca47;
}
#font-red {
  color: rgb(226, 38, 38);
  font-size: 13px;
  margin-right: 7px;
}

/*-------------------------- 충전 모달창-------------------------- */
#dd {
  top: 550px;
}
#ch_modal {
  font-family: BCcardB;
  color: #76512c;
  padding: 10px;
  top: 10%;
}
.modal-header {
  margin: 3%;
}

#ch_modal .btn {
  color: #76512c;
  background-color: #ffde02;
  width: 30%;
  margin-left: 15%;
  font-size: 14px;
  font-weight: 700;
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
  right: 14.5%;
}

.posit_rel.left {
  left: 20px;
}

.posit_rel.margin90 {
  left: 13.5%;
}

.posit_rel.margin138 {
  left: 17%;
}
.posit_rel.margin150 {
  left: 25%;
}
.posit_rel.margin100 {
  left: 18%;
}
.posit_rel.margin164 {
  left: 20%;
}
</style>
