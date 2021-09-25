<template>
  <div id="App">
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
<<<<<<< Updated upstream
=======
        <div class="span-blank">빈공간</div>
        <div id="login_tab">
          <b-tabs content-class="mt-3" justified>
            <!-- 지역주민 로그인 탭 -->
            <b-tab title="지역주민 시작하기" active>
              <ul id="login_explain">
                <li>
                  <h1>WELCOME TO</h1>
                  <h1>BEEZ</h1>
                </li>
                <li>
                  <h5>BEEZ와 함께 지역 상권을 맘껏 이용해보세요.</h5>
                  <h5>BEEZ와 함께라면, 혜택이 팡팡!</h5>
                </li>
              </ul>
              <form class="login_form">
                <li>
                  <FontAwesomeIcon
                    :icon="faUserCheck"
                    style="color:#fbca47"
                    size="lg"
                  />
                  <input
                    class="enter_form"
                    placeholder="ID"
                    type="text"
                    v-model="id"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    :icon="faLock"
                    style="color:#fbca47"
                    size="lg"
                  />
                  <input
                    class="enter_form"
                    placeholder="PASSWORD"
                    type="password"
                    v-model="password"
                    autocomplete="off"
                  />
                </li>
                <ul>
                  <li>
                    <b-button id="login_btn" @click="loginBtn">
                      Login
                    </b-button>
                  </li>
                  <li>
                    <b-button id="store_join_btn">
                      Sign-up
                    </b-button>
                  </li>
                  <li>
                    <a id="font-red">{{ errMsg }}</a>
                  </li>
                </ul>
              </form>
            </b-tab>
            <!-- 소상공인 로그인 탭 -->
            <b-tab title="소상공인 시작하기"
              ><form class="login_form">
                <li>
                  <FontAwesomeIcon :icon="faUserCheck" style="color:#fbca47" />
                  <input class="enter_form" placeholder="ID" type="text" />
                  <!-- v-model="store_id" -->
                </li>

                <li>
                  <FontAwesomeIcon :icon="faLock" style="color:#fbca47" />
                  <input
                    class="enter_form"
                    placeholder="PASSWORD"
                    type="password"
                    autocomplete="off"
                  />
                  <!-- v-model="store_password" -->

<<<<<<< Updated upstream
                  <!-- @click="storeLoginBtn" -->
                </li>

=======
                <!-- @click="storeLoginBtn" -->
>>>>>>> Stashed changes
                <li>
                  <b-button id="store_login_btn">
                    Login
                  </b-button>
                </li>
<<<<<<< Updated upstream
                <li>
                  <b-button id="store_join_btn">
                    Sign-up
                  </b-button>
                </li>
=======
>>>>>>> Stashed changes
                <li>
                  <!-- <a id="font-red">{{ StoreErrMsg }}</a> -->
                </li>
              </form></b-tab
            >
          </b-tabs>
        </div>
>>>>>>> Stashed changes
      </div>
      <div class="span-blank">빈공간</div>
      <div class="span-blank">빈공간</div>
    </div>

    <div>
      <b-carousel
        id="start_carousel"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide>
          <img src="../assets/start_main/start3.png" style="width:100%" />
        </b-carousel-slide>

        <b-carousel-slide>
          <img src="../assets/start_main/start4.png" style="width:100%" />
        </b-carousel-slide>

        <b-carousel-slide>
          <img src="../assets/start_main/start2.png" style="width:100%" />
        </b-carousel-slide>

        <b-carousel-slide>
          <img src="../assets/start_main/start5.png" style="width:100%" />
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
<<<<<<< Updated upstream
export default {
  components: {},
=======
import axios from "axios";
import "url-search-params-polyfill";
import { httpAddress } from "@/../public/js/axios/httpaddress.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "start",
  components: {
    FontAwesomeIcon,
  },
>>>>>>> Stashed changes
  data() {
    return {
      slide: 0,
      sliding: null,
<<<<<<< Updated upstream
=======
      id: "",
      password: "",
      showAlert: false,
      errMsg: "",
      StoreShowAlert: false,
      StoreErrMsg: "",

      //아이콘
      faUserCheck,
      faLock,
>>>>>>> Stashed changes
    };
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

    //슬라이드
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
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

/*--------------------------로그인-------------------------- */
#login_tab {
  margin: 6%;
}

#login_explain h1,
h5 {
  display: flex;
  margin-left: 2%;
}

/*--------------------------하단 슬라이드-------------------------- */
#start_carousel img {
  width: 100%;
}
<<<<<<< Updated upstream
=======

/*-------------------------- 지역주민/소상공인 로그인 탭-------------------------- */
.li_btn {
  font-family: BCcardB;
  padding-bottom: 30px;
}

/* .nav {
  padding-left: 15px;
  padding-right: 15px;
} */

.nav-tabs .nav-link {
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
}

.nav-tabs .nav-link.active {
  border-color: #fbca47 #fbca47 #fff;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #fbca47;
  font-weight: 600;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link {
  color: #17094c;
}
.login_form {
  /* padding: 20px; */
  font-family: BCcardB;
}
.enter_form {
  margin-bottom: 2%;
  border: #fbca47 solid 2px;
  height: 50px;
  padding: 0 20px;
  border-radius: 18px;
  background-color: #fff;
  font-size: 17px;
  width: 77%;
  margin-left: 13px;
}
.review_btn {
  width: 214px;
  font-size: 17px;
  padding: 2px 0;
  border-radius: 48px;
  color: #fff;
}

#login_btn {
  width: 214px;
  font-size: 17px;
  padding: 2px 0;
  border-radius: 48px;
  color: #fff;
}
#store_login_btn {
  width: 214px;
  font-size: 17px;
  padding: 2px 0;
  border-radius: 48px;
  color: #fff;
}

#store_join_btn {
  width: 214px;
  font-size: 17px;
  padding: 2px 0;
  border-radius: 48px;
  color: #ffde02;
  background-color: #fff;
  border: 2px solid #ffde02;
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

#font-red {
  color: rgb(226, 38, 38);
  font-size: 13px;
  margin-right: 7px;
}
>>>>>>> Stashed changes
</style>
