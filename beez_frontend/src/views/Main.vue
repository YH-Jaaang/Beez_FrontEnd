<template>
  <div>
    <b-card id="card_main">
      <div class="to_ac">
        <span>사용 가능금액</span>
        <span style="float:right">{{ total }}원</span>
      </div>
      <div class="de_ac">
        <ul class="detail_ac">
          <li>
            <a>이달의 충전금액</a>
            <a style="float:right">{{ chargeOfMonth }}원</a>
          </li>
          <li>
            <a>이달의 인센티브</a>
            <a style="float:right">{{ incentiveOfMonth }}원</a>
          </li>
          <div class="text-center">
            <b-button href="Charge">
              <FontAwesomeIcon :icon="faWonSign" style="color:#fbca47" />
              충전
            </b-button>
            <b-button href="Payment">
              <FontAwesomeIcon :icon="faQrcode" style="color:#fbca47" />
              결제
            </b-button>
          </div>
        </ul>
      </div>
      <br />
      <div class="bz_ac">
        <ul class="detail_bz">
          <div class="title_bz">
            <a>
              <FontAwesomeIcon
                :icon="faBitcoin"
                style="color:#76512c"
                size="lg"
              />
              BEEZ
            </a>
          </div>
          <li>
            <a>MY BEEZ</a>
            <a style="float:right">
              {{ myBz }}
              <FontAwesomeIcon
                :icon="faBitcoin"
                style="color:#76512c"
                size="lg"
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="text-center">
        <FontAwesomeIcon
          :icon="faCaretDown"
          style="color:#76512c"
          vertical-align="middle"
          size="5x"
        />
      </div>
    </b-card>
    <div class="li_btn text-center">
      <b-button href="Use">
        <!-- <FontAwesomeIcon :icon="faWonSign" style="color:#fbca47" /> -->
        결제 내역
      </b-button>
      <b-button href="Review">
        <!-- <FontAwesomeIcon :icon="faQrcode" style="color:#fbca47" /> -->
        리뷰
      </b-button>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faWonSign } from "@fortawesome/free-solid-svg-icons";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      total: "300,000",
      incentiveOfMonth: "10,000",
      chargeOfMonth: "100,000",
      myBz: 33,

      //아이콘
      faWonSign,
      faQrcode,
      faBitcoin,
      faCaretDown,
    };
  },
  methods: {},
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

/*--------------------------card_ 원화-------------------------- */
#card_main {
  font-family: BCcardB;
  background-color: #ffde02;
  /* padding: 10px 7px; */
  border-radius: 50px;
  margin: 4% 6%;
  /* border: 2.5px solid #8e8883e3; */
}

/* .card-body {
  padding-top: 29px;
  padding-left: 27px;
  padding-right: 27px;
} */

.to_ac {
  font-size: 22px;
  font-weight: 900;
  color: #76512c;
  padding-bottom: 8px;
}

.detail_ac .btn {
  color: #fff;
  background-color: #76512cb8;
  margin-left: 14px;
  margin-right: 14px;
  font-size: 17px;
}

.detail_ac {
  color: #76512c;
  font-weight: 600;
  background-color: #fff2a3;
  border-radius: 17px;
  padding: 12px 14px;
  /* border: 2px solid #76512c; */
}

.detail_ac li {
  padding-bottom: 9px;
  font-size: 14px;
}

/*-------------------------- 비즈-------------------------- */
.detail_bz {
  color: #76512c;
  font-weight: 600;
  background-color: #fff2a3;
  border-radius: 17px;
  padding: 8px 14px;
  /* border: 2px solid #76512c; */
}
.detail_bz li {
  padding-top: 9px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 15px;
}

.title_bz {
  font-size: 21px;
  font-weight: 900;
  border-bottom: 2px solid #76512c;
  padding-left: 5px;
}

/*-------------------------- 내역/리뷰 버튼-------------------------- */
.li_btn {
  font-family: BCcardB;
  padding-bottom: 30px;
}

.li_btn .btn {
  color: #76512c;
  background-color: #ffde02;
  margin-left: 25px;
  margin-right: 25px;
  font-size: 25px;
  font-weight: 900;
  /* border: 2.5px solid #76512c; */
}
</style>
