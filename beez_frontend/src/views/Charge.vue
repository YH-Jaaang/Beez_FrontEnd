<template>
  <div>
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
        <form>
          <b-form-input id="ch_amount" type="number"></b-form-input>
          <b-button id="re_btn" type="reset" value="Reset">
            <FontAwesomeIcon :icon="faRedo" style="color:#fbca47" size="lg" />
          </b-button>
        </form>
      </ul>
    </div>

    <div class="ch_btn text-center">
      <b-button href="/">
        충전
      </b-button>
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
      poss_ch: "2,000,000",
      poss_am: "500,000",

      //아이콘
      faRedo,
    };
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
  padding: 10px;
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
  width: 90%;
}

#re_btn {
  padding: 0;
  margin-left: 5px;
  background-color: #fff;
}

/*-------------------------- 충전 버튼-------------------------- */
.ch_btn {
  font-family: BCcardB;
  padding-bottom: 30px;
}

.ch_btn .btn {
  color: #76512c;
  background-color: #ffde02;
  margin-left: 25px;
  margin-right: 25px;
  font-size: 25px;
  font-weight: 900;
  border: 2.5px solid #76512c;
}
</style>
