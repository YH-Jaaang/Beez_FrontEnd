<template>
  <div>
    <div class="span-blank">빈공간</div>
    <div class="span-blank">빈공간</div>
    <div class="li_btn text-center">
      <b-button id="review_btn" href="/Main" @click="setCookies">
        지역주민<br />시작하기
      </b-button>
      <b-button id="review_btn" href="/" @click="setBusinessCookies">
        소상공인<br />시작하기
      </b-button>
    </div>
    <div class="span-blank">빈공간</div>
    <div class="span-blank">빈공간</div>
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    setCookies: () => {
      if (!VueCookies.isKey("Id") || !VueCookies.isKey("Address")) {
        VueCookies.set("Id", "user");
        VueCookies.set("Address", "0x3237F3B077bf7C5367a74D4e877D8Fc8c2B9a7c6");
      }
    },
    setBusinessCookies: () => {
      if (!VueCookies.isKey("Id") || !VueCookies.isKey("Address")) {
        VueCookies.set("Id", "business");
        VueCookies.set("Address", "임의의 값 나중에 랜덤");
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
  width: 35%;
}
</style>
