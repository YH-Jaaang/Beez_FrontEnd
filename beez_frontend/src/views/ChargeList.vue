<template>
  <div class="ChargeList_section">
    <div class="ChargeList">
      <a>
        <FontAwesomeIcon :icon="faFileInvoiceDollar" style="color:#76512cb8" />
        충전 내역
      </a>
    </div>

    <ul>
      <li id="User_information">
        <a> 연결된 계좌: {{ charge_account }}</a>
        <div>
          <a>은행: {{ charge_bank }}</a>
          <a style="float:right">예금주: {{ charge_name }} </a>
        </div>
      </li>
    </ul>

    <pull-to-refresh
      className="forTest"
      :refreshing="false"
      :indicator="{ deactivate: 'pull down' }"
    >
      <div
        class="ChargeList_box"
        v-for="(charge, i) in this.chargeList"
        :key="i"
      >
        <ul>
          <li>
            <table style="width:100%">
              <tr>
                <th rowspan="3">{{ charge.chargeDate }}</th>
                <th>
                  <table style="width:100%">
                    <tr>
                      <td class="th_icon">
                        <!-- <FontAwesomeIcon :icon="faMoneyBillWave" /> -->
                        충전금액 :
                      </td>
                      <td>{{ charge.chargeAmount | comma }}</td>
                    </tr>
                    <tr class="th_icon2">
                      <td>인센티브 :</td>
                      <td>+ {{ charge.chargeInc | comma }}</td>
                    </tr>
                    <tr>
                      <td class="th_icon">
                        <!-- <FontAwesomeIcon
                          :icon="faCreditCard"
                          class="faWon_style"
                        /> -->총 금액 :
                      </td>
                      <td>
                        {{
                          (parseInt(charge.chargeInc) +
                            parseInt(charge.chargeAmount))
                            | comma
                        }}
                      </td>
                    </tr>
                  </table>
                </th>
              </tr>
            </table>
          </li>
        </ul>
      </div>
    </pull-to-refresh>
    <b-button id="ChargeList_btn2" href="/Main">확 인</b-button>

    <div>
      <b-card class="end_Chargelist">
        <li>
          <h4>
            충전내역 안내<FontAwesomeIcon
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
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import PullToRefresh from "v-pull-to-refresh";
import axios from "axios";

export default {
  components: {
    FontAwesomeIcon,
    PullToRefresh,
  },
  data() {
    return {
      //고객정보
      charge_account: "",
      charge_bank: "",
      charge_name: "",
      //아이콘
      faFileInvoiceDollar,
      faAngleRight,
      faCreditCard,
      faMoneyBillWave,
      chargeList: [],
    };
  },
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
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
        .post("/api/charge/account", params)
        .then((res) => {
          this.charge_name = res.data.data.name;
          this.charge_bank = res.data.data.bankName;
          this.charge_account = res.data.data.accountNumber;
        })
        .catch(() => {});
      await axios
        .post("/api/charge/historylist")
        .then((res) => {
          console.log(res);
          this.chargeList = res.data.data;
        })
        .catch(() => {});
    })();
  },
  methods: {
    //새로고침
    // onRefresh: async () => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve();
    //     }, 1000);
    //   });
    // },
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
.ChargeList_section {
  font-family: BCcardB;
  font-weight: 600;
}

.ChargeList {
  text-align: center;
  color: #76512cb8;
  font-weight: 900;
  border-bottom: 1.5px solid #76512cb8;
  margin: 0 10% 0 10%;
  font-size: 24px;
}
/*---------------------------출금가능한 금액-------------------------------*/
#User_information {
  font-size: 14px;
  font-weight: 900;
  color: #714d2ad5;
  padding: 2% 4%;
  background-color: #f1ebe4;
  box-shadow: 1px 1px 2px 2px rgb(235, 231, 231);
  width: 82%;
  margin: 3% auto 8% auto;
  border-radius: 10px;
}
/*----------------------------Reviewlsit box-------------------------------*/
.ChargeList_box {
  padding: 1% 2%;
  border-radius: 20px;
  border: #6e6b79;
  background-color: #faf3cc;
  width: 82%;
  box-shadow: 1px 1px 2px 2px rgb(235, 231, 231);
  margin: 0 0 15px 9%;
  color: #76512c;
  font-size: 10pt;
}
.th_icon {
  color: #fbca47;
}
.th_icon2 {
  color: #0921f8a1;
}
.th_icon3 {
  color: #fbca47;
}
/*---------------------------페이지 넘김------------------------------*/

#ChargeList_btn2 {
  background-color: #94785ba1;
  color: white;
  display: block;
  padding: 1.5%;
  width: 25%;
  font-size: 16px;
  font-weight: 900;
  margin: 8% auto 20% auto;
  border-radius: 15px;
}

/*--------------------------공지사항/q&a-------------------------- */
.end_Chargelist {
  font-family: "GmarketSansTTFMedium";
}

.end_Chargelist .card-body {
  font-weight: 600;
  padding: 0;
}

.end_Chargelist li {
  padding: 6% 6% 4% 4%;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.end_Chargelist h4 {
  padding: 0;
}
</style>
