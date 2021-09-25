<template>
  <div class="StoreReview_section">
    <div class="StoreReview text-center">
      <a id="Store_Review">
        <FontAwesomeIcon :icon="faStore" style="color:#100055" />
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
            <a>{{ Store_month }}월{{ Store_day }}일 ({{ Store_days }})</a>
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
            <a>{{ Store_month }}월{{ Store_day }}일 ({{ Store_days }})</a>
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
            <a>{{ Store_month }}월{{ Store_day }}일 ({{ Store_days }})</a>
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
            <a>{{ Store_month }}월{{ Store_day }}일 ({{ Store_days }})</a>
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
            <a>{{ Store_month }}월{{ Store_day }}일 ({{ Store_days }})</a>
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
import { faStore } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      //날짜
      Store_day: "1",
      Store_days: "금",
      Store_month: "10",
      //고객 ID
      Store_userId: "YongHan123",
      //매출
      storeSales: "30,000",

      //아이콘
      faStore,
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
  width: 86%;
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
  align: center;
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
.overflow-auto {
  color: #100055;
}
</style>
