<template>
  <div class="ChargeList_section">
    <div class="ChargeList text-center">
      <a id="User_ChargeList">
        <FontAwesomeIcon :icon="faFileInvoiceDollar" style="color:#f8b704" />
        충전 내역
      </a>
    </div>
    <span class="span-blank">빈</span>
    <ul class="Store_TotalSales">
      <li id="User_information">
        <a> 연결된 계좌: {{ Charge_account }}</a>
        <div>
          <a>은행: {{ Charge_bank }}</a>
          <a style="float:right">예금주: {{ Charge_name }} </a>
        </div>
      </li>
    </ul>

    <div class="ChargeList_box">
      <div class="Charge_history">
        <ul>
          <li class="">
            <a
              >{{ Charge_year }}/{{ Charge_month }}/{{ Charge_day }}
              {{ Charge_time }}</a
            >
            <a style="float:right">{{ ChargeList_amount }}원</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="ChargeList_box">
      <div class="Charge_history">
        <ul>
          <li class="">
            <a
              >{{ Charge_year }}/{{ Charge_month }}/{{ Charge_day }}
              {{ Charge_time }}</a
            >
            <a style="float:right">{{ ChargeList_amount }}원</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="ChargeList_box">
      <div class="Charge_history">
        <ul>
          <li class="">
            <a
              >{{ Charge_year }}/{{ Charge_month }}/{{ Charge_day }}
              {{ Charge_time }}</a
            >
            <a style="float:right">{{ ChargeList_amount }}원</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="ChargeList_box">
      <div class="Charge_history">
        <ul>
          <li class="">
            <a
              >{{ Charge_year }}/{{ Charge_month }}/{{ Charge_day }}
              {{ Charge_time }}</a
            >
            <a style="float:right">{{ ChargeList_amount }}원</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="ChargeList_box">
      <div class="Charge_history">
        <ul>
          <li class="">
            <a
              >{{ Charge_year }}/{{ Charge_month }}/{{ Charge_day }}
              {{ Charge_time }}</a
            >
            <a style="float:right">{{ ChargeList_amount }}원</a>
          </li>
        </ul>
      </div>
    </div>
    <b-button id="ChargeList_btn2" href="/Main">확 인</b-button>
    <!--<div class="overflow-auto">
      <b-pagination-nav
        :link-gen="linkGen"
        :number-of-pages="10"
        use-router
        align="center"
      >
      </b-pagination-nav>-->
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      //고객정보
      Charge_account: "459002-123-12345",
      Charge_bank: "국민",
      Charge_name: "홍길동",
      //날짜
      Charge_year: "2021",
      Charge_day: "1",
      Charge_days: "금",
      Charge_month: "10",
      Charge_time: "17:49:59",
      //고객 ID
      Charge_userId: "YongHan123",
      // 충전금액
      ChargeList_amount: "200,000",

      //아이콘
      faFileInvoiceDollar,
    };
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
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
/*----------------------------title-------------------------------*/
.ChargeList_section {
  font-family: BCcardB;
  font-weight: 600;
}

.ChargeList {
  font-family: BCcardB;
  text-align: center;
  color: #f8b704;
  font-weight: 900;
  border-bottom: 3px solid #f8b704;
  margin: 0 10% 0 10%;
  margin-bottom: -4%;
}
/*---------------------------출금가능한 금액-------------------------------*/
#User_ChargeList {
  font-size: 24px;
}
#User_information {
  font-size: 14px;
  font-weight: 900;
  color: #76512c;
  padding: 2% 2%;
  background-color: #faf3cc;
  width: 86%;
  margin: 3% auto;
  margin-bottom: 8%;
  border-radius: 10px;
}
/*----------------------------Reviewlsit box-------------------------------*/
.ChargeList_box {
  padding: 0% 2%;
  border-radius: 20px;
  border: #6e6b79;
  background-color: #ffbf60;
  width: 86%;
  box-shadow: 1px 1px 2px 2px rgb(235, 231, 231);
  margin-bottom: 15px;
  margin-left: 7.5%;
  color: #76512c;
}
#ChargeList_font {
  font-size: 12px;
}
#ChargeList_font2 {
  font-size: 12px;
}

.bar {
  border-bottom: 1.5px solid #f799d0;
  margin-bottom: 4%;
}
.overflow-auto {
  width: 100%;
  text-align: center;
}

@media (max-width: 420px) {
  #User_ChargeList {
    font-size: 18pt;
  }
  .ChargeList_box {
    font-size: 8pt;
  }
}
/*---------------------------페이지 넘김------------------------------*/
.overflow-auto {
  color: #100055;
}
#ChargeList_btn2 {
  margin: 0 auto;
  background-color: #faf3cc;
  color: saddlebrown;
  display: block;
  padding: 2%;
  width: 20%;
  font-size: 18px;
  font-weight: 900;
  border: 2.5px solid #76512c;
}
</style>
