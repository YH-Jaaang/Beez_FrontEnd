<template>
  <div class="UserReview_section">
    <div class="UserReview text-center">
      <a id="User_Review">
        <FontAwesomeIcon :icon="faList" style="color:#ffde02s" />
        MY 리뷰
      </a>
    </div>
    <span class="span-blank">빈</span>

    <!--리뷰 리스트-->
    <div class="Reviewlist_box">
      <div class="User_history">
        <ul>
          <li v-for="(review, i) in reviewContents" :key="i">
            방문시간 : {{ review.visitTime }} 구매금액 :
            {{ review.cost }} 상호명 : {{ review.recipient }}

            <!--리뷰 마감 기한 필요-->
          </li>
        </ul>
      </div>
    </div>

    <div class="Reviewlist_box">
      <div class="User_history">
        <ul>
          <li>
            <a>
              <!--{{ this.visitor }}-->
            </a>
          </li>
          <li class="bar">
            <a>
              <!-- reviewContent.storeId  -->
            </a>
            <a style="float:right">
              <!-- {{reviewContent.cost}}원 -->
            </a>
          </li>
        </ul>
      </div>

      <div class="keyword_Review">
        <li class="keyword_Review_box">
          <!-- 리뷰리스트 이벤트 만들어야함 -->
          <b-button id="Review_btn2" @click="KeywordReview_modal"
            >키워드 리뷰 (BEEZ토큰지급)</b-button
          >

          <!-- reviewList -->
        </li>
      </div>
    </div>

    <div class="KeywordReview_modal">
      <b-modal
        class="KeywordReview_title"
        id="Review_modal"
        ref="KeywordReview_modal"
        hide-footer
        title="키워드 리뷰"
      >
        <div class="keyboxtitle">
          <div class="Keyword_box">
            <!--첫 번째 -->
            <div class="keybox" type="radio">
              <div class="keybox_title">
                분위기
              </div>
              <div class="Keyword_column">
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    분위기가 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    비즈니스에 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    친구랑 가기 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    데이트하기 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    데이트하기 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    사장님이 친절해요!
                  </b-form-checkbox>
                </div>
              </div>
            </div>
            <!--두 번째 -->
            <div class="keybox">
              <div class="keybox_title">
                서비스
              </div>
              <div class="Keyword_column">
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    서비스가 너무 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    상품종류가 다양해요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    주차하기 편해요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    데이트하기 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    데이트하기 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    사장님이 친절해요!
                  </b-form-checkbox>
                </div>
              </div>
            </div>
            <!--세 번째 -->
            <div class="keybox">
              <div class="keybox_title">
                교통
              </div>
              <div class="Keyword_column">
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    대중교통이 편해요!
                  </b-form-checkbox>
                </div>

                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    데이트하기 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    가게위치가 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    주차하기 편해요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    주차하기 힘들어요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    button
                  >
                    대중교통을 추천해요!
                  </b-form-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <b-button class="keyword_check" inline-block @click="hideModal2"
          >취소</b-button
        > -->
        <b-button
          class="keyword_check"
          inline-block
          @click="hideModal2"
          href="/userReview"
          >확인</b-button
        >
      </b-modal>
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
import { faList } from "@fortawesome/free-solid-svg-icons";
import { PAYMENT_ABI } from "@/ABI/ContractABI.js";

export default {
  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      reviewContents: [],
    };
  },
  created() {
    // this.init();
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
      .then(function(reviewContents) {
        console.log(reviewContents);
        text.reviewContents = reviewContents;
      });
  },

  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    },
    KeywordModal() {
      this.$refs["KeywordReview_modal"].show();
    },
    hideModal2() {
      this.$refs["KeywordReview_modal"].hide();
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
  width: 300px 300px;
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
.overflow-auto {
  width: 100%;
}
#Review_btn2 {
  color: #76512c;
  background-color: #ffde02;
  margin: auto;
  padding: 1% 16%;
  display: block;
  font-weight: 700;
}
/*-------------------------- 키워드 리뷰 모달창-------------------------- */
.modal-header {
  margin: 3%;
}
.KeywordReview_modal {
  font-family: BCcardB;
  color: #ffde02;
  width: 90%;
  margin-bottom: 2px;
}
.KeywordReview_modal .btn {
  padding: 3% 0%;
  border-radius: 20px;
  background-color: #feffd1;
  margin: 0 auto;
  display: block;
  color: #76512c;
}
#Review1 {
  margin-left: 8%;
  margin-right: 8%;
  text-align: center;
}
.Keyword_box {
  font-size: 7pt;
}
.keyword {
  background-color: #feffd1;
  border-radius: 20px;
  color: #76512c;
  padding: 0% 5%;
}
.keybox {
  font-size: 7pt;
  margin-bottom: 20px;
}
.keybox_title {
  border-bottom: 2px solid #ffde02;
  margin: 0 auto;
  background-color: #feffae;
  text-align: center;
  margin-bottom: 10px;
  width: 89%;
  border-radius: 20px;
}
.keyword_check {
  float: right;
  background-color: #dad5eb;
  color: #6e6b79;
  font-weight: 600;
}
#check-button {
  color: #ffde02;
}
.Keyword_column {
  display: grid;
  grid: ". .";
}
/* ---------------------------페이지 넘김------------------------------*/
.overflow-auto {
  color: #100055;
}
</style>
