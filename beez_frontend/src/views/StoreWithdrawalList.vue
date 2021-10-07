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
        <a>계좌 번호: {{ Store_Withrawal_account }} </a>
        <div>
          <a>은행: {{ Store_Withrawal_bank }}</a>
          <a style="float:right">예금주: {{ Store_Withrawal_name }} </a>
        </div>
      </li>
    </ul>

    <div class="WithdrawalList_box">
      <div class="store_history">
        <ul>
          <li class="">
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
    </div>
    <div class="WithdrawalList_box">
      <div class="store_history">
        <ul>
          <li class="">
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
    </div>
    <div class="WithdrawalList_box">
      <div class="store_history">
        <ul>
          <li class="">
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
    </div>
    <div class="WithdrawalList_box">
      <div class="store_history">
        <ul>
          <li class="">
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
    </div>
    <b-button id="StoreWithdrawalList_check" href="/StoreMain">확 인</b-button>
    <div>
      <b-card class="end_StoreWithdrawalList">
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
  font-family: BCcardB;
  text-align: center;
  color: #100055;
  font-weight: 900;
  border-bottom: 3px solid #100055;
  margin: 0 10% 0 10%;
  margin-bottom: -4%;
}
/*---------------------------출금가능한 금액-------------------------------*/
#Store_WithdrawalList {
  font-size: 24px;
}
.Store_TotalSales {
  font-size: 22px;
  font-weight: 900;
  color: #100055;
  padding: 2% 3%;
  background-color: #e0f5f7;
  width: 83%;
  margin: 3% auto;
  border-radius: 10px;
  margin-bottom: 8%;
}
/*----------------------------Reviewlsit box-------------------------------*/
.WithdrawalList_box {
  padding: 0% 2%;
  border-radius: 20px;
  border: #6e6b79;
  background-color: #dbf3e8;
  width: 83%;
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
#StoreWithdrawalList_check {
  margin: 0 auto;
  background-color: #e0f5f7;
  display: block;
  padding: 2%;
  width: 20%;
  font-size: 15px;
  font-weight: 900;
  margin-bottom: 17%;
}
/*--------------------------공지사항/q&a-------------------------- */
.end_StoreWithdrawalList {
  font-family: "GmarketSansTTFMedium";
}

.end_StoreWithdrawalList .card-body {
  font-weight: 600;
  padding: 0;
}

.end_StoreWithdrawalList li {
  padding-left: 6%;
  padding-right: 6%;
  padding-top: 4%;
  padding-bottom: 4%;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.end_StoreWithdrawalList h4 {
  padding: 0;
}
</style>
