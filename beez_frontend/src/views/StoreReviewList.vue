<template>
  <div class="StoreReview_section">
    <div class="StoreReview text-center">
      <a id="Store_Review">
        <FontAwesomeIcon :icon="faThumbsUp" style="color:#100055" />

        우리가게 리뷰
      </a>
    </div>
    <span class="span-blank">빈</span>
    <ul class="Store_Reviewlsit">
      <!--<p class="Reviewlist text-center">
        <a>이용한 고객의 리뷰 내역</a>
      </p>-->
    </ul>

    <div class="Reviewlist_box">
      <div class="store_history">
        <ul>
          <li>
            <a>{{ Store_month }}/{{ Store_day }}/{{ Store_time }}</a>
          </li>
          <li class="bar">
            <a> ID:{{ Store_userId }}님</a>
            <a style="float:right">{{ storeSales }}원</a>
          </li>
        </ul>
      </div>

      <div class="keyword_Review">
        <li class="keyword_Review_box">
          <a>분위기가 좋아요! </a>
          <a>반찬종류가 많아요! </a>
          <a>주차하기 편해요! </a>
        </li>
      </div>
    </div>
    <div class="Reviewlist_box">
      <div class="store_history">
        <ul>
          <li>
            <a>{{ Store_month }}/{{ Store_day }}/{{ Store_time }}</a>
          </li>
          <li class="bar">
            <a> ID:{{ Store_userId }}님</a>
            <a style="float:right">{{ storeSales }}원</a>
          </li>
        </ul>
      </div>

      <div class="keyword_Review">
        <li class="keyword_Review_box">
          <a>분위기가 좋아요! </a>
          <a>반찬종류가 많아요! </a>
          <a>주차하기 편해요! </a>
        </li>
      </div>
    </div>
    <div class="Reviewlist_box">
      <div class="store_history">
        <ul>
          <li>
            <a>{{ Store_month }}/{{ Store_day }}/{{ Store_time }}</a>
          </li>
          <li class="bar">
            <a> ID:{{ Store_userId }}님</a>
            <a style="float:right">{{ storeSales }}원</a>
          </li>
        </ul>
      </div>

      <div class="keyword_Review">
        <li class="keyword_Review_box">
          <a>분위기가 좋아요! </a>
          <a>반찬종류가 많아요! </a>
          <a>주차하기 편해요! </a>
        </li>
      </div>
    </div>

    <div class="Reviewlist_box">
      <div class="store_history">
        <ul>
          <li>
            <a>{{ Store_month }}/{{ Store_day }}/{{ Store_time }}</a>
          </li>
          <li class="bar">
            <a> ID:{{ Store_userId }}님</a>
            <a style="float:right">{{ storeSales }}원</a>
          </li>
        </ul>
      </div>

      <div class="keyword_Review">
        <li class="keyword_Review_box">
          <a>분위기가 좋아요! </a>
          <a>반찬종류가 많아요! </a>
          <a>주차하기 편해요! </a>
        </li>
      </div>
    </div>

    <div class="Reviewlist_box">
      <div class="store_history">
        <ul>
          <li>
            <a>{{ Store_month }}/{{ Store_day }}/{{ Store_time }}</a>
          </li>
          <li class="bar">
            <a> ID:{{ Store_userId }}님</a>
            <a style="float:right">{{ storeSales }}원</a>
          </li>
        </ul>
      </div>

      <div class="keyword_Review">
        <li class="keyword_Review_box">
          <a>분위기가 좋아요! </a>
          <a>반찬종류가 많아요! </a>
          <a>주차하기 편해요! </a>
        </li>
      </div>
    </div>
    <b-button id="StoreReviewList_check" href="/StoreMain">확 인</b-button>
    <div>
      <b-card class="end_StoreReviewLsit">
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
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      //날짜
      Store_day: "1",
      Store_time: "10:10:10",
      Store_month: "10",
      //고객 ID
      Store_userId: "YongHan123",
      //매출
      storeSales: "30,000",

      //아이콘
      faThumbsUp,
      faAngleRight,
    };
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
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
@font-face {
  font-family: "GmarketSansTTFMedium";
  src: url("../fonts/GmarketSansTTFMedium.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}
/*----------------------------title-------------------------------*/
.StoreReview_section {
  font-family: BCcardB;
  font-weight: 600;
}

.StoreReview {
  font-family: BCcardB;
  text-align: center;
  color: #100055;
  font-weight: 900;
  border-bottom: 3px solid #100055;
  margin: 0 10% 0 10%;
}
#Store_Review {
  font-size: 24px;
}

/*----------------------------Reviewlsit box-------------------------------*/
.Reviewlist_box {
  padding: 2% 2%;
  border-radius: 20px;
  border: #6e6b79;
  background-color: #e0f5f7;
  width: 83%;
  box-shadow: 1px 1px 2px 2px rgb(235, 231, 231);
  margin-bottom: 15px;
  margin-left: 7.5%;
}
.keyword_Review_box {
  width: 300px 300px;
  margin: 0 auto;
}
.keyword_Review_box a {
  padding: 1% 2%;
  border-radius: 20px;
  background-color: #fff;
  margin: 0 auto;
}
.bar {
  border-bottom: 1.5px solid #100055;
  margin-bottom: 4%;
}
.overflow-auto {
  width: 100%;
  text-align: center;
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
/*---------------------------페이지 넘김------------------------------*/
#StoreReviewList_check {
  margin: 0 auto;
  color: #100055;
  background-color: #e0f5f7;
  display: block;
  width: 25%;
  font-size: 17px;
  font-weight: 900;
  margin-top: 8%;
  margin-bottom: 20%;
  border-radius: 15px;
}
/*--------------------------공지사항/q&a-------------------------- */
.end_StoreReviewLsit {
  font-family: "GmarketSansTTFMedium";
}

.end_StoreReviewLsit .card-body {
  font-weight: 600;
  padding: 0;
}

.end_StoreReviewLsit li {
  padding-left: 6%;
  padding-right: 6%;
  padding-top: 4%;
  padding-bottom: 4%;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.end_StoreReviewLsit h4 {
  padding: 0;
}
</style>
