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
      NoMultiCheck: false,
    };
  },
  created() {
    // this.init();
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
  border: #6e6b79;
  background-color: #fdfded;
  width: 86%;
  box-shadow: 1px 1px 2px 2px rgb(235, 231, 231);
  margin-bottom: 15px;
  margin-left: 7.5%;
  color: #76512c;
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
@media (max-width: 420px) {
  #Store_Review {
    font-size: 18pt;
  }
  .keyword_Review_box {
    font-size: 8pt;
  }
  .Reviewlist_box {
    font-size: 8pt;
  }
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
