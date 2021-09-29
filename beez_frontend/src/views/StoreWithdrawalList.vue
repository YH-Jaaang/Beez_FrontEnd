<template>
  <div class="StoreWithdrawalList_section">
    <div class="StoreWithdrawalList text-center">
      <a id="Store_WithdrawalList">
        <FontAwesomeIcon :icon="faFileInvoiceDollar" style="color:#100055" />

        출금 내역
      </a>
    </div>
    <span class="span-blank">빈</span>
    <ul class="Store_TotalSales">
      <li id="WithdrawalList_font">
        <a>
          연결된 계좌:459002-123-56789(국민)
        </a>
        <a style="float:right">예금주: {{ Store_name }} </a>
      </li>
      <!--a style="float:right"> {{ Withdrawal_Money }} 원 </!--a>-->
    </ul>

    <div class="WithdrawalList_box">
      <div class="store_history">
        <ul>
          <li>
            <a>{{ Store_month }}월{{ Store_day }}일 </a>
          </li>
          <li class="bar">
            <a> 예금주:{{ Store_name }}님</a>
            <a style="float:right">{{ Withdrawal_amount }}원</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="WithdrawalList_box">
      <div class="store_history">
        <ul>
          <li class="">
            <a>2021/{{ Store_month }}/{{ Store_day }} 10:00:10</a>
            <a style="float:right">{{ Withdrawal_amount }}원</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="overflow-auto">
      <b-pagination-nav
        :link-gen="linkGen"
        :number-of-pages="10"
        use-router
        align="center"
      >
      </b-pagination-nav>
    </div>
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
      //날짜
      Store_day: "1",
      Store_month: "10",
      Store_Withrawal_time: "09:20:24",

      // 출금가능금액
      Withdrawal_Money: "1,000,000",
      //고객 ID, 정보
      Store_userId: "KingGilDong",
      Store_name: "홍길동",
      // 출금금액
      Withdrawal_amount: "2,000,000",
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
.StoreWithdrawalList_section {
  font-family: BCcardB;
  font-weight: 600;
}

.StoreWithdrawalList {
  font-family: BCcardB;
  text-align: center;
  color: #100055;
  font-weight: 900;
  border-bottom: 3px solid #100055;
  margin: 0 10% 0 10%;
}
/*---------------------------출금가능한 금액-------------------------------*/
#Store_WithdrawalList {
  font-size: 24px;
}
.Store_TotalSales {
  font-size: 22px;
  font-weight: 900;
  color: #100055;
  padding: 2% 2%;
  background-color: #e0f5f7;
  width: 86%;
  margin: 3% auto;
}
/*----------------------------Reviewlsit box-------------------------------*/
.WithdrawalList_box {
  padding: 0% 2%;
  border-radius: 20px;
  border: #6e6b79;
  background-color: #dbf3e8;
  width: 86%;
  box-shadow: 1px 1px 2px 2px rgb(235, 231, 231);
  margin-bottom: 15px;
  margin-left: 7.5%;
}
#WithdrawalList_font {
  font-size: 12px;
}

.bar {
  border-bottom: 1.5px solid #100055;
  margin-bottom: 4%;
}
.overflow-auto {
  width: 100%;
  text-align: center;
}

@media (max-width: 420px) {
  #Store_WithdrawalList {
    font-size: 18pt;
  }
  .WithdrawalList_box {
    font-size: 8pt;
  }
}
/*---------------------------페이지 넘김------------------------------*/
.overflow-auto {
  color: #100055;
}
</style>
