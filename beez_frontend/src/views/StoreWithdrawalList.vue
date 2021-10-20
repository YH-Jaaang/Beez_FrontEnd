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
        <a>계좌 번호: {{ account_no }} </a>
        <div>
          <a>은행: {{ bank_na }}</a>
          <a style="float:right">예금주: {{ store_na }} </a>
        </div>
      </li>
    </ul>

    <div>
      <div
        class="WithdrawalList_box"
        v-for="(withdraw, i) in this.withdrawList"
        :key="i"
      >
        <ul>
          <!-- <div>{{ withdraw.txHash }}</div> -->
          <li>
            <a>{{ withdraw.withdrawDate }}</a>
            <a style="float:right">{{ withdraw.amount | comma }}원</a>
          </li>
        </ul>
      </div>
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
import axios from "axios";

export default {
  components: {
    FontAwesomeIcon,
  },
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  data() {
    return {
      withdrawList: [],
      //고객정보
      bank_na: "",
      account_no: "",
      store_na: "",
      //아이콘
      faFileInvoiceDollar,
      faAngleRight,
    };
  },
  beforeCreate() {
    var params = {
      email: localStorage.getItem("email"),
    };
    (async () => {
      axios.defaults.headers.common["Authorization"] = localStorage.getItem(
        "token"
      );
      await axios
        .post("/api/withdrawal/account", params)
        .then((res) => {
          this.bank_na = res.data.data.bankName;
          this.account_no = res.data.data.accountNumber;
          this.store_na = res.data.data.name;
        })
        .catch(() => {});
      await axios
        .post("/api/withdrawal/historylist")
        .then((res) => {
          console.log(res);
          this.withdrawList = res.data.data;
        })
        .catch(() => {});
    })();
    this.$store.commit("storeMain");
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
  border-bottom: 1.8px solid #100055;
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
