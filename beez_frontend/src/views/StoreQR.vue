<template>
  <div class="StoreQR_section">
    <div class="StoreQR text-center">
      <a id="Store_QR">가게 QR코드</a>
    </div>
    <!-- <div>
      <ul id="QR">
        <img src="../assets/charge/QRtest.png" alt="QR_card" />
      </ul>
    </div> -->
    <span class="span-blank">빈</span>

    <div>
      <div class="StoreQR_box">
        <li class="bar_qr">
          <a>우리가게 정보</a>
        </li>
        <li>
          <a>점명: {{ Store_name }}</a>
          <a style="float:right">{{ Store_userId }}님</a>
        </li>
      </div>
      <span class="span-blank">빈</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //고객 ID
      Store_userId: "강용한",
      //가게이름
      Store_name: "이집 용하네 김밥",
    };
  },
  created() {
    this.init();
  },
  methods: {},
};
</script>
<style>
/*--------------------------card--------------------------- */
#QR {
  font-family: BCcardB;
  background-color: #fff;
  text-align: center;
}

#QR img {
  height: 19rem;
}
/*----------------------------title-------------------------------*/
.StoreQR_section {
  font-family: BCcardB;
  font-weight: 600;
}

.StoreQR {
  color: #100055;
  padding: 0% 0%;
  border-bottom: 4px solid #100055;
  width: 80%;
  margin: 0 auto;
}
#Store_QR {
  font-size: 28pt;
}
.Reviewlist {
  font-size: 10pt;
  text-decoration: underline #100055;
}
/*----------------------------Reviewlsit box-------------------------------*/
.StoreQR_box {
  padding: 2% 7%;
  color: #100055;
  border-radius: 20px;
  border: #6e6b79;
  background-color: #e0f5f7;
  width: 85%;
  margin: 0 auto;
  box-shadow: 1px 1px 2px 2px rgb(235, 231, 231);
}

.bar_qr {
  border-bottom: 2px solid #100055;
  margin-bottom: 4%;
}
@media (max-width: 420px) {
  #Store_QR {
    font-size: 18pt;
  }
  .StoreQR_box {
    font-size: 12pt;
  }
}
</style>
