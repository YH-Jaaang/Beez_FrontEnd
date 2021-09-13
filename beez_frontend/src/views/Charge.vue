<template>
  <div id="app">
    <b-card id="card_charge">
      <img src="../assets/charge/beez_card.png" alt="card" />
    </b-card>

    <div class="charge_section">
      <ul class="bank_ac">
        <li>
          <a>{{ bank_na }} 은행</a>
          <a style="float:right">{{ account_no }}</a>
        </li>
      </ul>
      <ul class="poss_am">
        <li>
          <a>충전가능금액</a>
          <a style="position:relative; left:20px">{{ poss_ch }} 원</a>
        </li>
        <li>
          <a>혜택가능금액</a>
          <a style="position:relative; left:20px">{{ poss_am }} 원</a>
        </li>
      </ul>
      <ul class="charge_am">
        <b-form @submit="onSubmit" @reset="onReset">
          <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show"> -->
          <b-form-input
            id="ch_amount"
            v-model="ch_number"
            type="number"
          ></b-form-input>
          <b-button id="re_btn" type="reset">
            <FontAwesomeIcon :icon="faRedo" style="color:#fbca47" size="lg" />
          </b-button>

          <b-button id="ch_btn" type="submit" @click="showModal">
            충전
          </b-button>
        </b-form>
      </ul>
    </div>

    <div class="charge_modal">
      <b-modal id="ch_modal" ref="charge_modal" hide-footer title="충전 정보">
        <div class="d-block">
          <a style="position:relative; left:23%; margin-right:138px"
            >충전 금액</a
          >
          <a style="position:relative;">{{ ch_number }}</a>
        </div>
        <div class="d-block">
          <a style="position:relative; left:25%; margin-right:150px"
            >인센티브</a
          >
          <a style="position:relative;">{{ incentive }}</a>
        </div>
        <div class="d-block" id="total_charge">
          <a style="position:relative; left:16%; margin-right:100px"
            >총 충전금액</a
          >
          <a style="position:relative;">{{ total_chargeAmount }}</a>
        </div>
        <b-button class="mt-3" inline-block @click="hideModal">취소</b-button>
        <b-button class="mt-3" inline-block @click="hideModal" href="/"
          >확인</b-button
        >
      </b-modal>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      bank_na: "KB 국민",
      account_no: "748 ****** 25437",
      poss_ch: "2,000,000",
      poss_am: "500,000",

      //아이콘
      faRedo,

      ch_number: "",
      incentive: "",
      total_chargeAmount: "",
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
      this.ch_number = "";
      // this.show = false;
      // this.$nextTick(() => {     이거 써서 qr 후 자동 모달창 실행해보기
      //   this.show = true;
      // });
    },

    //충전 버튼 후 모달창
    showModal() {
      this.$refs["charge_modal"].show();
      this.incentive = this.ch_number * 0.1;
      this.total_chargeAmount =
        parseInt(this.ch_number) + parseInt(this.incentive);
    },
    hideModal() {
      this.$refs["charge_modal"].hide();
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
  background-color: #fff;
  /* padding: 10px 7px; */
  border-radius: 50px;
  border: 2.5px solid #76512ce3;
  width: 12rem;
  height: 17rem;
  margin: 30px auto;
}

#card_charge img {
  margin: -12px -31px;
  height: 15rem;
}

/*-------------------------- charge-section -------------------------- */
.charge_section {
  font-family: BCcardB;
  font-weight: 600;
  margin: 30px 30px 30px 30px;
}

.bank_ac {
  font-size: 15px;
  background-color: #fdc20071;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 30px;
}
/* .bank_ac li {
  padding: 10px;
} */

/*--------------------------poss_am/charge_am------------------------------- */
.poss_am {
  font-size: 12px;
  margin-left: 10px;
}

.charge_am {
  font-size: 20px;
}

#ch_amount {
  display: inline-block;
  background-color: rgba(164, 162, 158, 0.463);
  /* border: 2px solid #76512c; */
  border-radius: 10px;
  padding: 10px;
  width: 88%;
}

/* .charge_am {
  background-color: rgba(164, 162, 158, 0.463);
} */

#re_btn {
  padding: 0;
  margin-left: 5px;
  background-color: #fff;
}

#ch_btn {
  margin-top: 5%;
  color: #76512c;
  background-color: #ffde02;
  font-size: 23px;
  font-weight: 900;
  border: 2.5px solid #76512c;
  font-family: BCcardB;
  margin-left: 40%;
}

/*-------------------------- 충전 모달창-------------------------- */
#ch_modal {
  font-family: BCcardB;
  color: #76512c;
}
.modal-header {
  margin-left: 5%;
  margin-top: 3%;
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
  margin-left: 8%;
  margin-right: 8%;
}
</style>
