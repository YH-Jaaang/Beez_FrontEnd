<template>
  <div class="StoreWithdrawalList_section">
    <div class="StoreWithdrawalList">
      <a>
        <FontAwesomeIcon :icon="faFileInvoiceDollar" style="color:#100055" />
        출금 내역
      </a>
    </div>

    <ul class="Store_TotalSales">
      <li>
        <a>계좌 번호: {{ Store_Withrawal_account }} </a>
        <div>
          <a>은행: {{ Store_Withrawal_bank }}</a>
          <a style="float:right">예금주: {{ Store_Withrawal_name }} </a>
        </div>
      </li>
    </ul>

    <div class="WithdrawalList_box">
      <ul>
        <li>
          <a
            >{{ Store_Withrawal_year }}/{{ Store_Withrawal_month }}/{{
              Store_Withrawal_day
            }}
            {{ Store_Withrawal_time }}</a
          >
          <a style="float:right">{{ Withdrawal_amount }}원</a>
        </li>
      </ul>
    </div>

    <div class="WithdrawalList_box">
      <ul>
        <li>
          <a
            >{{ Store_Withrawal_year }}/{{ Store_Withrawal_month }}/{{
              Store_Withrawal_day
            }}
            {{ Store_Withrawal_time }}</a
          >
          <a style="float:right">{{ Withdrawal_amount }}원</a>
        </li>
      </ul>
    </div>

    <div class="WithdrawalList_box">
      <ul>
        <li>
          <a
            >{{ Store_Withrawal_year }}/{{ Store_Withrawal_month }}/{{
              Store_Withrawal_day
            }}
            {{ Store_Withrawal_time }}</a
          >
          <a style="float:right">{{ Withdrawal_amount }}원</a>
        </li>
      </ul>
    </div>
    <b-button id="StoreWithdrawalList_check" href="/StoreMain">확 인</b-button>

    <b-card id="end_StoreWithdrawalList">
      <li>
        <h4>
          현금 출금 안내<FontAwesomeIcon
            :icon="faAngleRight"
            style="float:right"
          />
        </h4>
      </li>
      <li>
        <h4>
          Q & A<FontAwesomeIcon :icon="faAngleRight" style="float:right" />
        </h4>
      </li>
    </b-card>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      //날짜
      Store_Withrawal_year: "2021",
      Store_Withrawal_day: "1",
      Store_Withrawal_month: "10",
      Store_Withrawal_time: "09:20:24",

      // 출금가능금액
      Withdrawal_Money: "1,000,000",
      //고객정보
      Store_Withrawal_account: "459002-123-12345",
      Store_Withrawal_bank: "국민",
      Store_Withrawal_name: "홍길동",
      // 출금금액
      Withdrawal_amount: "2,000,000",
      //아이콘
      faFileInvoiceDollar,
      faAngleRight,
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
@font-face {
  font-family: "GmarketSansTTFMedium";
  src: url("../fonts/GmarketSansTTFMedium.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}
/*----------------------------title-------------------------------*/
.StoreWithdrawalList_section {
  font-family: BCcardB;
  font-weight: 600;
}

.StoreWithdrawalList {
  text-align: center;
  color: #100055;
  border-bottom: 3px solid #100055;
  margin: 0 10% 4% 10%;
  font-size: 24px;
}

/*---------------------------계좌 정보-------------------------------*/
.Store_TotalSales {
  font-size: 14px;
  color: #100055;
  padding: 2% 3%;
  background-color: #e0f5f7;
  width: 83%;
  margin: 3% auto 5% 8%;
  border-radius: 10px;
}
/*----------------------------Reviewlsit box-------------------------------*/
.WithdrawalList_box {
  padding: 0% 2%;
  border-radius: 20px;
  border: #6e6b79;
  background-color: #dbf3e8;
  width: 83%;
  box-shadow: 1px 1px 2px 2px rgb(235, 231, 231);
  margin: 0 0 15px 7.5%;
  font-size: 10pt;
}

.bar {
  border-bottom: 1.5px solid #100055;
  margin-bottom: 4%;
}

/*---------------------------페이지 넘김------------------------------*/
#StoreWithdrawalList_check {
  background-color: #e0f5f7;
  display: block;
  width: 25%;
  font-size: 17px;
  font-weight: 900;
  margin: 8% auto 20% auto;
  color: #100055;
  border-radius: 15px;
}
/*--------------------------공지사항/q&a-------------------------- */
#end_StoreWithdrawalList {
  font-family: "GmarketSansTTFMedium";
}

#end_StoreWithdrawalList .card-body {
  font-weight: 600;
  padding: 0;
}

#end_StoreWithdrawalList li {
  padding: 6% 6% 4% 4%;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

#end_StoreWithdrawalList h4 {
  padding: 0;
}
</style>
