<template>
  <div>
    <b-card id="card_main_ceo">
      <div class="to_ac_ceo">
        <span>{{ month }}월 총 매출</span>
        <span style="float:right">{{ totalSales }}원</span>
      </div>
      <div class="de_ac">
        <ul class="detail_ac_ceo">
          <li>
            <a>현금매출</a>
            <a style="float:right">{{ CashSales }}원</a>
          </li>
          <li>
            <a>토큰매출</a>
            <a style="float:right">{{ TokenSales }}원</a>
          </li>
          <div class="text-center"></div>
        </ul>
        <span class="span-blank">빈</span>
        <ul class="detail_ac_ceo">
          <div class="title_bz_ceo">
            <a>
              <FontAwesomeIcon :icon="faWonSign" style="color:#0d4890" />
              현금매출
            </a>
            <b-button id="Exbtn" href="StoreWithdrawal" style="float:right">
              출금
            </b-button>
          </div>
          <li>
            <a>이번달 매출</a>
            <a style="float:right">{{ CashSales }}원</a>
          </li>
          <li>
            <a>출금가능 현금</a>
            <a style="float:right">{{ CashSales }}원</a>
          </li>
          <div class="text-center"></div>
        </ul>
      </div>
      <br />
      <div class="bz_ac">
        <ul class="detail_bz_ceo">
          <div class="title_bz_ceo">
            <a>
              <FontAwesomeIcon
                :icon="faBitcoin"
                style="color:#10055"
                size="lg"
              />
              BEEZ
            </a>
            <b-button id="Exbtn" href="StoreExchangeToken" style="float:right">
              환전
            </b-button>
          </div>
          <li>
            <div>
              <a>이번달 BEEZ</a>
              <a style="float:right">
                {{ myBzExample }}
                <FontAwesomeIcon
                  :icon="faBitcoin"
                  style="color:#10055"
                  size="lg"
                />
              </a>
            </div>
            <a>환전가능 BEEZ</a>
            <a style="float:right">
              {{ myBzExchange }}
              <FontAwesomeIcon
                :icon="faBitcoin"
                style="color:#10055"
                size="lg"
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="text-center">
        <FontAwesomeIcon
          :icon="faCaretDown"
          style="color:#fff"
          vertical-align="middle"
          size="5x"
        />
      </div>
    </b-card>
    <div class="li_btn_ceo text-center">
      <b-button href="/StoreReviewList">
        <!-- <FontAwesomeIcon :icon="faQrcode" style="color:#fbca47" /> -->
        결제 / 리뷰 내역
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
      //매출값
      totalSales: "11,530,000",
      CashSales: "11,000,000",
      TokenSales: "530,000",
      myBzExample: "5300",
      myBzExchange: "5000",
      month: 0,
    };
  },
  created() {
    this.init();
  },
  methods: {
    //()달 매출금액
    init(param) {
      if (param) {
        this.month = param[1];
      } else {
        const date = new Date();
        this.month = date.getMonth() + 1;
      }
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

/*--------------------------card_ 원화-------------------------- */
#card_main_ceo {
  font-family: BCcardB;
  background-color: #1158aece;
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

.to_ac_ceo {
  font-size: 22px;
  font-weight: 900;
  color: #ffffff;
  padding-bottom: 8px;
}

.detail_ac_ceo .btn {
  color: rgb(255, 255, 255);
  background-color: #0d4890;
  margin-left: 14px;
  margin-right: 14px;
  font-size: 17px;
}

.detail_ac_ceo {
  color: #0d4890;

  font-weight: 600;
  background-color: #e0f5f7;
  border-radius: 17px;
  padding: 12px 14px;
  /* border: 2px solid #76512c; */
}

.detail_ac li {
  padding-bottom: 9px;
  font-size: 14px;
}

/*-------------------------- 비즈-------------------------- */
.detail_bz_ceo {
  color: #0d4890;
  font-weight: 600;
  background-color: #e0f5f7;
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

.title_bz_ceo {
  font-size: 21px;
  font-weight: 900;
  border-bottom: 2px solid #0d4890;
  padding-left: 5px;
}

.detail_bz_ceo .btn {
  background-color: #0d4890;
  margin-left: 14px;
  margin-right: 14px;
  font-size: 17px;
}
/*-------------------------- 내역/리뷰 버튼-------------------------- */
.li_btn_ceo {
  font-family: BCcardB;
  padding-bottom: 30px;
}

.li_btn_ceo .btn {
  color: #ffffff;
  background-color: #1158aece;
  margin-left: 25px;
  margin-right: 25px;
  font-size: 25px;
  font-weight: 900;
  /* border: 2.5px solid #76512c; */
}
#Exbtn {
  padding: 0% 1.5%;
  color: white;
}
@media (max-width: 650px) {
  #Exbtn {
    padding: 1% 4%;
  }
}
</style>
