<template>
  <div>
    <b-card id="card_main">
      <div class="to_ac">
        <span>사용 가능금액</span>
        <!-- filter를 이용하여 콤마찍기 -->
        <span style="float:right">{{ this.$store.state.total | comma }}원</span>
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

        <b-button id="Chargebtn" href="/ChargeList">충전 내역</b-button>
      </div>
    </b-card>
    <b-card id="card_main">
      <div class="bz_ac">
        <ul class="detail_bz">
          <div class="title_bz">
            <a>
              <FontAwesomeIcon
                :icon="faBitcoin"
                style="color:#76512c"
                size="lg"
              />
              MY BEEZ
            </a>
          </div>
          <li>
            <a>이달의 BEEZ</a>
            <a style="float:right">
              {{ myBz }}
              <FontAwesomeIcon
                :icon="faBitcoin"
                style="color:#76512c"
                size="lg"
              />
            </a>
          </li>
          <li>
            <a>사용가능 BEEZ</a>
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
    </b-card>
    <div class="text-center">
      <FontAwesomeIcon
        :icon="faCaretDown"
        style="color:#76512c"
        vertical-align="middle"
        size="5x"
      />
    </div>
    <div class="li_btn text-center">
      <b-button href="PaymentList">
        <!-- <FontAwesomeIcon :icon="faWonSign" style="color:#fbca47" /> -->
        결제/리뷰 내역
      </b-button>
<<<<<<< Updated upstream
      <!-- <b-button href="/ChargeList">
         <FontAwesomeIcon :icon="faQrcode" style="color:#fbca47" /> 
        충전 내역 
      </b-button>-->
=======
      <b-button href="/ChargeList">
        충전 내역
      </b-button>
      <b-button href="/StoreList">
        주변 가게 찾기
      </b-button>
    </div>

    <div>
      <b-card class="end_start">
        <li>
          <h4>
            공지사항<FontAwesomeIcon :icon="faAngleRight" style="float:right" />
          </h4>
        </li>
        <li>
          <h4>
            Q & A<FontAwesomeIcon :icon="faAngleRight" style="float:right" />
          </h4>
        </li>
      </b-card>
>>>>>>> Stashed changes
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
      msg: "This is demo net work",
      //아이콘
      faWonSign,
      faQrcode,
      faBitcoin,
      faCaretDown,
    };
  },
  methods: {
    onComplete(data) {
      console.log("data:", data);
    },
  },
  beforeCreate() {
    this.$store.commit("login");
  },
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
#card_main {
  font-family: BCcardB;
  background-color: #ffde02;
  /* padding: 10px 7px; */
  border-radius: 50px;
  margin-top: 4%;
  margin-left: 4%;
  margin-right: 4%;
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
  color: #76512c;
}
#Chargebtn {
  color: #fff;
  background-color: #76512cb8;
  margin: auto;
  padding: 1.5% 3%;
  display: block;
  font-weight: 60;
  width: 90%;
  margin-top: 4%;
  font-size: 17px;
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
  font-size: 20px;
  font-weight: 900;
  /* border: 2.5px solid #76512c; */
  width: 45%;
}
</style>
