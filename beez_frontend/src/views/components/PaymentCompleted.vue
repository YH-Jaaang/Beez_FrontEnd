<template>
  <!-- 결제 완료 모달 -->
  <div centered id="finish" ref="pay_modal" hide-footer title="결제 정보">
    <b-card id="card_main2">
      <b-card class="title_bz">
        <h2>
          결제 완료
        </h2>
      </b-card>

      <div class="detail_bz">
        <table class="table_align">
          <tbody class="table_tbody">
            <tr>
              <td class="text">현금</td>
              <td class="amount">
                <a>
                  {{ $route.params.won | comma }}
                </a>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td class="text">BEEZ</td>
              <td class="amount">
                <a v-if="$route.params.beez == 0">
                  0
                </a>
                <a v-else>
                  {{ $route.params.beez | comma }}
                </a>
              </td>
            </tr>
            <tr>
              <td class="text">총 결제금액</td>
              <td class="amount">
                <a>
                  {{ $route.params.won | comma }}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-card>
    <div class="note">
      결제가 완료 되었습니다
    </div>
    <b-button class="mt-3" href="/Main">완료</b-button>
  </div>
</template>
<script>
export default {
  name: "loading",
  props: {
    won: {
      type: String,
      default: "0",
    },
    beez: {
      type: String,
      default: "0",
    },
    price: {
      type: String,
      default: "0",
    },
  },
  components: {},
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
<style>
@font-face {
  font-family: "BCcardB";
  src: url("../../fonts/BCcardL.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}
#finish {
  font-family: BCcardB;
  color: #76512c;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

#finish .btn {
  color: #fff;
  background-color: #76512c93;
  width: 23%;
}
/* -------------------------------모달창 css------------------------------------- */
#finish {
  font-family: BCcardB;
  color: #76512c;
  font-size: 15px;
}

#finish .btn {
  color: #76512c;
  background-color: #ffde028c;
  width: 25%;

  font-size: 14px;
  font-weight: 700;
  border-radius: 15px;
}
.note h4 {
  color: red;
  font-size: 12px;
  font-weight: 600;
  padding-top: 10px;
}

.note {
  color: red;
  font-weight: 600;
  font-size: 12px;
  padding: 5px 0 5px 0;
  margin: 10% 5% 0 5%;
  background-color: #fbcb4721;
  border-radius: 15px;
}

/* 비즈 */
#card_main2 {
  font-family: BCcardB;
  background-color: #ffe6253d;
  border-radius: 30px;
  margin: 4% 4% 0 4%;
}

.detail_bz {
  color: #23180d;
  font-weight: 700;
  border-radius: 17px;
  padding: 15px 20px;
  margin: 0 16%;
}

.amount {
  text-align: right;
}
.text {
  text-align: left;
}

.title_bz h2 {
  font-size: 23px;
  font-weight: 900;
  color: #76512c;
  display: inline-block;
  padding: 0;
}

.title_bz {
  background-color: #ffe625d2;
  border-start-start-radius: 30px;
  border-start-end-radius: 30px;
  padding: 4%;
}

.title_bz img {
  width: 10%;
  margin-right: 5px;
}

.card-body {
  padding: 0;
}

.table_align {
  text-align: center;
  width: 100%;
  height: 100%;
}
.td {
  text-align: right;
}
</style>
