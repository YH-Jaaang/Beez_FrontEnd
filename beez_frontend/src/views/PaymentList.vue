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
<<<<<<< Updated upstream
    <div class="Reviewlist_box">
      <div class="User_history">
        <ul>
          <li>
            <a>{{ User_month }}월{{ User_day }}일 ({{ User_days }})</a>
            <!--리뷰 마감 기한 필요-->
          </li>
          <li class="bar">
            <a> 가게 이름:{{ Store_Infor }}</a>
            <a style="float:right">{{ UserCost }}원</a>
          </li>
        </ul>
      </div>

      <div class="keyword_Review">
        <li class="keyword_Review_box">
          <b-button id="Review_btn2" @click="KeywordModal"
            >키워드 리뷰 (BEEZ토큰지급)</b-button
          >
        </li>
      </div>
    </div>

    <div class="Reviewlist_box">
      <div class="User_history">
        <ul>
          <li>
            <a>{{ User_month }}월{{ User_day }}일 ({{ User_days }})</a>
          </li>
          <li class="bar">
            <a> 가게 이름:{{ Store_Infor }}</a>
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
    <div class="Reviewlist_box">
      <div class="User_history">
        <ul>
          <li>
            <a>{{ User_month }}월{{ User_day }}일 ({{ User_days }})</a>
          </li>
          <li class="bar">
            <a> 가게 이름: {{ Store_Infor }}</a>
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
=======
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
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    <div class="overflow-auto">
      <b-pagination-nav
        :link-gen="linkGen"
        :number-of-pages="10"
        use-router
        align="center"
      >
      </b-pagination-nav>
=======
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
>>>>>>> Stashed changes
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
<<<<<<< Updated upstream
=======
import { PAYMENT_ABI } from "@/contract/ContractABI.js";
import { CONTRACT_ADDRESS } from "@/contract/ContractAddress.js";
import { PROVIDER } from "@/contract/Provider.js";
import DatePicker from "@/views/components/DatePicker.vue";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
import { ethers } from "ethers";
import axios from "axios";
>>>>>>> Stashed changes

export default {
  components: {
    FontAwesomeIcon,
    DatePicker,
    ScaleLoader,
  },

  data() {
    return {
      //날짜
      User_day: "1",
      User_days: "금",
      User_month: "10",
      //고객 ID
      Store_Infor: "새마을포차",
      //매출
      UserCost: "30,000",
      //아이콘
      faList,
      //모달 체크박스
      NoMultiCheck: false,
    };
  },
<<<<<<< Updated upstream
  created() {
    // this.init();
  },
=======

  async beforeCreate() {
    const payload = await {
      start: 7,
      end: 0,
    };
    this.$store.commit("paymentList", payload);

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
  async mounted() {},
  props: ["removeValue"],
>>>>>>> Stashed changes
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    },
<<<<<<< Updated upstream
    KeywordModal() {
      this.$refs["KeywordReview_modal"].show();
=======
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

    //모달 취소 버튼
    KeywordModal(time) {
      this.$refs["review_modal"].show();
      this.visitTime = time;
>>>>>>> Stashed changes
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
