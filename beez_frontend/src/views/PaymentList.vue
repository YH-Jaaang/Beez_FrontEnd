<template>
  <div class="UserReview_section">
    <div class="UserReview text-center">
      <a id="User_Review">
        <FontAwesomeIcon :icon="faClipboardList" style="color:#ffde02s" />
        결제/리뷰내역
      </a>
    </div>
    <span class="span-blank">빈</span>
    <!-- ------------------------------------------------------ -->
    <!--리뷰 리스트-->

    <div class="Reviewlist_box" v-for="(review, i) in reviewContents" :key="i">
      <div class="User_history">
        <ul>
          <li>
            가게 이름 :
            {{ review.recipient }}
            <!-- 가격,원화,비즈 -->
          </li>
          <li>
            <span>가격 : {{ review.cost }}원</span>
            <span class="span-blank">blank</span>
            <span>지불 : {{ review.wonTokenCount }}원</span>
            <span class="span-blank">blank</span>
            <span
              >Beez :
              {{ review.bzTokenCount / $store.state.incentiveRate }}</span
            >
            개
            <a>{{ User_month }}/{{ User_day }}/{{ User_time }}</a>
            <!--리뷰 마감 기한 필요-->
          </li>
          <li class="bar">
            <a>{{ Store_Infor }}</a>
            <a style="float:right">{{ UserCost }}원</a>
          </li>
        </ul>
      </div>
      <div class="User_history">
        <b-button id="Review_btn2" @click="KeywordModal"
          >키워드 리뷰 (BEEZ토큰지급)</b-button
        >
      </div>
      
      <li>
        <li class="bar"></li>
        <div class="keyword_Review">
          <li class="keyword_Review_box">
            <a>분위기가 좋아요!</a>
            <a>반찬종류가 많아요!</a>
            <a>주차하기 편해요!</a>
          </li>
        </div>
      </li>
    </div>
    <div class="Reviewlist_box">
      <div class="User_history">
        <ul>
          <li>
            <a>{{ User_month }}/{{ User_day }}/{{ User_time }}</a>
          </li>
          <li class="bar">
            <a>{{ Store_Infor }}</a>
            <a style="float:right">{{ UserCost }}원</a>
          </li>
        </ul>
      </div>
      <div class="keyword_Review">
        <li class="keyword_Review_box">
          <a>분위기가 좋아요!</a>
          <a>반찬종류가 많아요!</a>
          <a>주차하기 편해요!</a>
        </li>
      </div>
    </div>
    <b-button id="Paymentlist_check" href="/Main">확 인</b-button>

    <div class="review_modal">
      <b-modal
        centered
        id="Review_modal"
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
          <b-button
            class="keyword_check mt-3"
            inline-block
            @click="hideModal2"
            href="/paymentList"
            >확인</b-button
          >
          <b-button class="keyword_check mt-3" inline-block @click="hideModal2"
            >취소</b-button
          >
        </div>
      </b-modal>
    </div>
    <div>
      <b-card class="end_Paymentlist">
        <li>
          <h4>
            키워드 리뷰 안내<FontAwesomeIcon
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
import { faList } from "@fortawesome/free-solid-svg-icons";
import { PAYMENT_ABI } from "@/contract/ContractABI.js";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      reviewContents: [],
      //아이콘
      faClipboardList,
      faAngleRight,

      //모달 체크박스
      checked1: [],
      checked2: [],
      checked3: [],

      keyword1: [
        { text: "분위기가 좋아요!", value: "1" },
        { text: "비즈니스에 좋아요!", value: "2" },
        { text: "친구랑 가기 좋아요!", value: "3" },
        { text: "데이트하기 좋아요!", value: "4" },
        { text: "데이트하기 좋아요!", value: "5" },
        { text: "사장님이 친절해요!", value: "6" },
      ],
      keyword2: [
        { text: "서비스가 좋아요!", value: "1" },
        { text: "상품종류가 다양해요!", value: "2" },
        { text: "주차하기 편해요!", value: "3" },
        { text: "데이트하기 좋아요!", value: "4" },
        { text: "데이트하기 좋아요!", value: "5" },
        { text: "사장님이 친절해요!", value: "6" },
      ],
      keyword3: [
        { text: "대중교통이 편해요!", value: "1" },
        { text: "주차하기 힘들어요!", value: "2" },
        { text: "주차하기 편해요!", value: "3" },
        { text: "가게위치가 좋아요!", value: "4" },
        { text: "데이트하기 좋아요!", value: "5" },
        { text: "대중교통을 추천해요!", value: "6" },
      ],
    };
  },
  beforeCreate() {
    const Web3 = require("web3");
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://ropsten.infura.io/v3/88ce7dc742a14dec85fde399eaf36090"
      )
    );
    const visitor = "0xbbEC30aBA3f9Bf7cA056e5429788d17a1c0FCcC1"; //DB
    const CONTRACT_ADDRESS = "0x02acbe2E3FB41ABaF3B5A80Fb6275bC5E984EF59"; //DB
    const CONTRACT_ABI = PAYMENT_ABI;
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

    // foreach 파싱해서 배열에 넣기 const 배열(포문돌리기)
    const text = this;
    contract.methods
      .getReviewForVisitor(visitor)
      .call()
      .then((reviewContents) => {
        console.log(reviewContents);
        text.reviewContents = reviewContents;
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
    //모달 취소 버튼
    KeywordModal() {
      this.$refs["review_modal"].show();
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
@font-face {
  font-family: "GmarketSansTTFMedium";
  src: url("../fonts/GmarketSansTTFMedium.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}
/*----------------------------title-------------------------------*/
.UserReview_section {
  font-family: BCcardB;
  font-weight: 600;
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
}

.keyword_Review_box {
  margin: auto;
  margin-left: 5%;
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
#Paymentlist_check {
  margin: 0 auto;
  background-color: #ffffad;
  display: block;
  padding: 1.5%;
  width: 25%;
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 20%;
  margin-top: 8%;
  border-radius: 15px;
  color: #76512c;
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
  font-family: BCcardB;
  color: #76512c;
  background-color: #feffae;
  width: 25%;
  margin-left: 18%;
  font-weight: 600;
  border-radius: 15px;
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

/*--------------------------공지사항/q&a-------------------------- */
.end_Paymentlist {
  font-family: "GmarketSansTTFMedium";
}

.end_Paymentlist .card-body {
  font-weight: 600;
  padding: 0;
}

.end_Paymentlist li {
  padding-left: 6%;
  padding-right: 6%;
  padding-top: 4%;
  padding-bottom: 4%;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.end_Paymentlist h4 {
  padding: 0;
}
</style>
