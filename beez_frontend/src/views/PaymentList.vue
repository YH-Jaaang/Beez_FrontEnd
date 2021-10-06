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
      </div>
    </div>

    <div class="KeywordReview_modal">
      <b-modal
        id="Review_modal"
        ref="KeywordReview_modal"
        hide-footer
        title="키워드 리뷰"
      >
        <div class="keyboxtitle">
          <div class="Keyword_box">
            <!--첫 번째 -->
            <div class="keybox">
              <div class="keybox_title">
                분위기
              </div>
              <div class="Keyword_column" name="check" type="radio">
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked1"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="1"
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
                    @change="clickFunc"
                    value="2"
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
                    @change="clickFunc"
                    value="3"
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
                    @change="clickFunc"
                    value="4"
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
                    @change="clickFunc"
                    value="5"
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
                    @change="clickFunc"
                    value="6"
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
                편의시설
              </div>
              <div class="Keyword_column" name="check" type="radio">
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked2"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="1"
                    button
                  >
                    서비스가 너무 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked2"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="2"
                    button
                  >
                    상품종류가 다양해요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked2"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="3"
                    button
                  >
                    주차하기 편해요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked2"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="4"
                    button
                  >
                    데이트하기 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked2"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="5"
                    button
                  >
                    데이트하기 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked2"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="6"
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
              <div class="Keyword_column" name="check" type="radio">
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked3"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="1"
                    button
                  >
                    대중교통이 편해요!
                  </b-form-checkbox>
                </div>

                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked3"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="2"
                    button
                  >
                    데이트하기 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked3"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="3"
                    button
                  >
                    가게위치가 좋아요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked3"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="4"
                    button
                  >
                    주차하기 편해요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked3"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="5"
                    button
                  >
                    주차하기 힘들어요!
                  </b-form-checkbox>
                </div>
                <div class="KeywordReview_modal" id="Review1">
                  <b-form-checkbox
                    v-model="checked3"
                    name="check-button"
                    class="keyword"
                    @change="clickFunc"
                    value="6"
                    button
                  >
                    대중교통을 추천해요!
                  </b-form-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <b-button
            class="keyword_check"
            inline-block
            @click="hideModal2"
            href="/paymentList"
            >확인</b-button
          >
          <b-button class="keyword_check" inline-block @click="hideModal2"
            >취소</b-button
          >
        </div>
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

export default {
  components: {
    FontAwesomeIcon,
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

      /** 2021-10-05
       * @author CMH
       */
      checked1: [],
      checked2: [],
      checked3: [],

      checkedValues: [],
    };
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
#Review1 {
  margin-left: 8%;
  margin-right: 8%;
  text-align: center;
  font-size: 12px;
}
.Keyword_box {
  font-size: 7pt;
}

.keybox {
  font-size: 7pt;
  margin-bottom: 20px;
  background-color: #fdfded;
  padding: 3% 1%;
  border-radius: 20px;
  border-bottom: 2px solid #c2bfaa;
}

.keybox_title {
  font-family: "BCcardB";
  border-bottom: 2px solid #ffde02;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 20px;
  width: 89%;
  font-size: 12px;
  font-weight: 600;
  font-size: 15px;
  color: #76512c;
}

.KeywordReview_modal .btn {
  border-radius: 5px;
  margin-bottom: 3%;
  font-weight: 600;
  color: #696663;
  background-color: white;
  border: 1px solid #c5c5c5;
  width: 130px;
}
.KeywordReview_modal .btn-secondary:not(:disabled):not(.disabled).active {
  background-color: #c5c5c5;
}
.keyword_check {
  font-family: "BCcardB";
  background-color: #feffae;
  font-weight: 600;
  margin-left: 18%;
  padding: 2% 7%;

  margin-bottom: 10%;
  color: #76512c;
}

.Keyword_column {
  display: grid;
  grid: ". .";
}
#Review_modal .modal-title {
  font-family: "BCcardB";
  font-weight: 600;
}

/* ---------------------------페이지 넘김------------------------------*/
.overflow-auto {
  color: #100055;
}
</style>
