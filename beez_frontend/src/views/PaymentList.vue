<template>
  <div class="UserReview_section">
    <div class="UserReview text-center">
      <a id="User_Review">
        <FontAwesomeIcon :icon="faList" style="color:#ffde02s" />
        MY 리뷰
      </a>
    </div>
    <span class="span-blank">빈</span>

    <!-- ------------------------------------------------------ -->
    <!--리뷰 리스트-->
    <div class="li_btn text-center">
      <span class="span-blank">This is an empty space. </span>
      <b-button @click="reviewList(7, 0)">
        1주일
      </b-button>
      <b-button @click="reviewList(30, 0)">
        1개월
      </b-button>
      <b-button @click="reviewList(90, 0)">
        3개월
      </b-button>
      <b-button @click="reviewList(180, 0)">
        6개월
      </b-button>
    </div>
    <DatePicker />
    <div>
      <div
        class="Reviewlist_box"
        v-for="(review, i) in this.$store.state.reviewContents"
        :key="i"
      >
        <div class="User_history">
          <ul>
            <li>
              <!-- 가게이름 -->
              가게 이름 :
              {{ review.recipient }} <br />
              방문 일자 :
              {{ unix_timestamp(review.visitTime) }}
              <!-- 가격,원화,비즈 -->
              <a style="float:right">
                가격 : {{ review.cost }}원<br />
                지불 : {{ review.wonTokenCount }}원<br />
                Beez : {{ review.bzTokenCount / $store.state.incentiveRate }}개
                <!-- 이런식으로 하면 될듯 -->
                <!-- {{ keyword1[1].text }} -->
                <!-- {{ keyword[parseInt[review.value1]].text }} -->
              </a>
            </li>
            <br />
            <!-- 7일 계산용 {{ timestamp - review.visitTime }}  -->
            <li v-if="timestamp - review.visitTime >= 604800">
              <!-- <b-button id="Review_btn3" disabled
                >키워드 리뷰 (BEEZ토큰지급)</b-button
              > -->
            </li>
            <!-- 7일체크해야함 -->
            <li v-else-if="review.value1 == ''">
              <a class="keyword_Review_box">
                <b-button
                  id="Review_btn2"
                  @click="KeywordModal(review.visitTime)"
                  >키워드 리뷰 (BEEZ토큰지급)</b-button
                >
              </a>
            </li>
            <li class="keyword_Review_box" v-else>
              <a>{{ review.value1 }} </a>
              <a>{{ review.value2 }}</a>
              <a>{{ review.value3 }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="review_modal">
        <b-modal
          id="Review_mo dal"
          ref="review_modal"
          hide-footer
          title="키워드 리뷰"
        >
          <div class="Keyword_box">
            <!--첫 번째 -->
            <div class="keybox">
              <div class="keybox_title">
                분위기
              </div>
              <b-form-checkbox-group
                v-model="checked1"
                @change="clickFunc"
                buttons
                :options="keyword1"
                class="Keyword_column"
              ></b-form-checkbox-group>
            </div>

            <!--두 번째 -->
            <div class="keybox">
              <div class="keybox_title">
                편의시설
              </div>
              <b-form-checkbox-group
                v-model="checked2"
                @change="clickFunc"
                buttons
                :options="keyword2"
                class="Keyword_column"
              ></b-form-checkbox-group>
            </div>

            <!--세 번째 -->
            <div class="keybox">
              <div class="keybox_title">
                교통
              </div>

              <b-form-checkbox-group
                v-model="checked3"
                @change="clickFunc"
                buttons
                :options="keyword3"
                class="Keyword_column"
              ></b-form-checkbox-group>
            </div>
          </div>

          <div>
            <b-button class="keyword_check" inline-block @click="writeReview()"
              >확인</b-button
            >

            <b-button class="keyword_check" inline-block @click="hideModal2"
              >취소</b-button
            >
          </div>
        </b-modal>
        <!-- 결제 진행 모달 -->
        <b-modal
          centered
          id="p_modal"
          ref="ing_modal"
          hide-footer
          hide-header
          no-close-on-backdrop
          no-close-on-esc
        >
          <scale-loader
            loading="loading"
            color="#ffbd07b3"
            size="10px"
          ></scale-loader>
          <div class="modal_text">
            <h4>
              리뷰가 작성중 입니다. 잠시만 기다려 주세요
            </h4>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { PAYMENT_ABI } from "@/contract/ContractABI.js";
import { CONTRACT_ADDRESS } from "@/contract/ContractAddress.js";
import { PROVIDER } from "@/contract/Provider.js";
import DatePicker from "@/views/components/DatePicker.vue";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
import { ethers } from "ethers";
import axios from "axios";

export default {
  name: "paymentList",
  components: {
    FontAwesomeIcon,
    DatePicker,
    ScaleLoader,
  },

  data() {
    return {
      timestamp: Math.floor(new Date().getTime() / 1000),
      //아이콘
      faList,
      //모달 체크박스
      checked1: [],
      checked2: [],
      checked3: [],

      keyword1: [
        { text: "분위기가 좋아요!", value: "0" },
        { text: "비즈니스에 좋아요!", value: "1" },
        { text: "친구랑 가기 좋아요!", value: "2" },
        { text: "데이트하기 좋아요!", value: "3" },
        { text: "데이트하기 좋아요!", value: "4" },
        { text: "사장님이 친절해요!", value: "5" },
      ],
      keyword2: [
        { text: "서비스가 좋아요!", value: "0" },
        { text: "상품종류가 다양해요!", value: "1" },
        { text: "주차하기 편해요!", value: "2" },
        { text: "데이트하기 좋아요!", value: "3" },
        { text: "데이트하기 좋아요!", value: "4" },
        { text: "사장님이 친절해요!", value: "5" },
      ],
      keyword3: [
        { text: "대중교통이 편해요!", value: "0" },
        { text: "주차하기 힘들어요!", value: "1" },
        { text: "주차하기 편해요!", value: "2" },
        { text: "가게위치가 좋아요!", value: "3" },
        { text: "데이트하기 좋아요!", value: "4" },
        { text: "대중교통을 추천해요!", value: "5" },
      ],
      userPrivateKey: "",
      userAddress: "",
      checkedValues: [],
      json: "[",
      storeList: [],
    };
  },
  async beforeCreate() {
    const payload = await {
      start: 7,
      end: 0,
    };
    await this.$store.commit("paymentList", payload);
    await this.$store.state.reviewContents.forEach((element) => {
      this.json += `{"address"` + ` : "` + element.recipient + `"},`;
    });
    //axios로 값보내기d
    this.json = this.json.substr(0, this.json.length - 1);
    this.json += "]";
    const params2 = { wallet_address: JSON.parse(this.json) };
    console.log(params2);
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "token"
    );

    await axios
      .post("/api/find/address", params2)
      .then((res) => {
        this.storeList = res.data.data;
        console.log(this.storeList);
      })
      .catch((err) => {
        console.log(err);
      });
    //솔리디티 이벤트 확인
    const abi = PAYMENT_ABI;
    const provider = PROVIDER;
    //const address = localStorage.getItem("address");
    const contract = await new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

    await contract.on("reviewResult", (to) => {
      console.log(to);
      this.$refs["ing_modal"].hide();
      this.$store.commit("paymentList", payload);
    });
  },
  props: ["removeValue"],
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    },
    //키워드 리뷰
    clickFunc(event) {
      if (this.checked1.length > 1) {
        this.checked1.reverse().pop();
      }
      if (this.checked2.length > 1) {
        this.checked2.reverse().pop();
      }
      if (this.checked3.length > 1) {
        this.checked3.reverse().pop();
      }

      for (let i = 0; i < this.checkedValues.length; i++) {
        if (this.checkedValues[i] !== event.target.value) {
          console.log(this.checkedValues[i]);
          this.checkedValues.splice(i, 1);
        }
      }
    },
    async reviewList(start, end) {
      const payload = await {
        start: start,
        end: end,
      };
      this.$store.commit("paymentList", payload);
    },
    async writeReview() {
      axios.defaults.headers.common["Authorization"] = localStorage.getItem(
        "token"
      );

      await axios
        .post("/api/users/priv")
        .then((res) => {
          console.log(res);
          this.userPrivateKey = "0x" + res.data.data.privateKey;
          this.userAddress = res.data.data.walletAddress;
        })
        .catch((err) => {
          console.log(err);
        });

      const CONTRACT_ABI = PAYMENT_ABI;
      const PRIVATE_KEY = this.userPrivateKey;

      /****************************Solidity 매개변수****************************/
      const visitor = this.userAddress; //DB
      const visitTime = this.visitTime;
      const value1 = this.keyword1[this.checked1[0]].text;
      const value2 = this.keyword2[this.checked2[0]].text;
      const value3 = this.keyword3[this.checked3[0]].text;
      const provider = PROVIDER;

      const signer = await new ethers.Wallet(PRIVATE_KEY, provider);

      const contract = await new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );

      const sendTransaction = contract.writeReview(
        visitor,
        visitTime,
        value1,
        value2,
        value3
      );
      this.$refs["review_modal"].hide();
      this.$refs["ing_modal"].show();
      await sendTransaction
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    unix_timestamp(t) {
      var date = new Date(t * 1000);
      var year = date.getFullYear();
      var month = "0" + (date.getMonth() + 1);
      var day = "0" + date.getDate();
      var hour = "0" + date.getHours();
      var minute = "0" + date.getMinutes();
      var second = "0" + date.getSeconds();
      return (
        year +
        "-" +
        month.substr(-2) +
        "-" +
        day.substr(-2) +
        " " +
        hour.substr(-2) +
        ":" +
        minute.substr(-2) +
        ":" +
        second.substr(-2)
      );
    },
    async storeLists() {
      return this.storeList;
    },

    //모달 취소 버튼
    KeywordModal(time) {
      this.$refs["review_modal"].show();
      this.visitTime = time;
    },
    hideModal2() {
      this.$refs["review_modal"].hide();
    },
  },

  computed: {},
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
.UserReview_section {
  font-family: BCcardB;
  font-weight: 600;
  min-height: calc(30vh);
}

.UserReview {
  font-family: BCcardB;
  text-align: center;
  color: #f8b704;
  font-weight: 900;
  border-bottom: 3px solid #f8b704;
  margin: 0 10% 0 10%;
}
#User_Review {
  font-size: 24px;
}
/*----------------------------기간별 버튼-------------------------------*/
.li_btn .btn {
  background-color: #fdef2e7d;
  color: #000000;
  border-color: #fff;
  font-size: 5px;
  font-weight: 900;
  width: 12%;
  margin: 0px 2px 10px 0px;
  font-family: BCcardB;
}
/*----------------------------Reviewlsit box-------------------------------*/
.Reviewlist_box {
  padding: 2% 2%;
  border-radius: 20px;
  background-color: #fdfded;
  width: 86%;
  box-shadow: 1px 1px 2px 2px rgb(235, 231, 231);
  margin: 0 auto;
  margin-bottom: 15px;
  color: #76512c;
  font-size: 8pt;
  min-height: 100px;
}

.keyword_Review_box {
  margin: auto;
  display: block;
}
.keyword_Review_box a {
  padding: 1% 2%;
  border-radius: 20px;
  background-color: #fff;
  margin: 0 auto;
}
.bar {
  border-bottom: 2px solid #ffde02;
  margin-bottom: 4%;
}

#Review_btn2 {
  color: #76512c;
  background-color: #ffde02;
  margin: auto;
  padding: 1% 16%;
  display: block;
  font-weight: 700;
}
#Review_btn3 {
  color: #76512c;
  background-color: #e0dfd8;
  margin: auto;
  padding: 1% 16%;
  display: block;
  font-weight: 700;
}
/*-------------------------- 키워드 리뷰 모달창-------------------------- */
.modal-header {
  margin: 3%;
}

.keybox {
  font-family: "BCcardB";
  margin-bottom: 20px;
  background-color: #fdfded;
  padding: 3% 1%;
  border-radius: 20px;
  border-bottom: 2px solid #c2bfaa;
}

.keybox_title {
  border-bottom: 2px solid #ffde02;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 17px;
  width: 89%;
  font-weight: 600;
  font-size: 15px;
  color: #76512c;
}

.review_modal .btn {
  border-radius: 5px;
  margin-bottom: 3%;
  font-weight: 600;
  color: #696663;
  background-color: white;
  border: 1px solid #c5c5c5;
  width: 130px;
}
.btn-secondary:not(:disabled):not(.disabled).active {
  background-color: #c5c5c5;
  border-color: #c5c5c5;
}

.keyword_check {
  background-color: #feffae;
  font-weight: 600;
  margin-left: 18%;
  padding: 2% 7%;
  font-family: BCcardB;
  margin-bottom: 8%;
  color: #76512c;
}

.Keyword_column {
  display: grid;
  grid: ". .";
  justify-content: space-evenly;
  font-size: 12px;
}

.Keyword_column .btn {
  margin-bottom: 3%;
  font-weight: 600;
  color: #696663;
  background-color: white;
  border: 1px solid #76512c;
}

.btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
  border-radius: 10px;
}

.btn-group > .btn:not(:first-child) {
  border-radius: 10px;
}

#Review_modal .modal-title {
  font-family: "BCcardB";
  font-weight: 600;
  color: #76512c;
}
.modal_text h4 {
  color: red;
  font-size: 12px;
  font-weight: 600;
  padding-top: 10px;
  text-align: center;
}
.modal_text {
  background-color: #fbcb4721;
  border-radius: 15px;
}
</style>
