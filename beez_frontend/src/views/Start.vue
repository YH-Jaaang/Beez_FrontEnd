<template>
  <div id="start">
    <div>
      <div class="li_btn text-center">
        <b-button href="/Main" @click="setCookies">
          지역주민<br />시작하기
        </b-button>
        <b-button href="/" @click="setBusinessCookies">
          소상공인<br />시작하기
        </b-button>
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
                    <b-button id="Store_login_btn" @click="loginBtn">
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
            <b-tab title="소상공인 시작하기" color="#0d4890">
              <ul id="login_explain">
                <li>
                  <h1>WELCOME TO</h1>
                  <h1>BEEZ</h1>
                </li>
                <li>
                  <h5>
                    BEEZ와 함께라면, 저렴한 수수료 혜택을 받을 수 있습니다.
                  </h5>
                  <h5>BEEZ로 수익을 쭉쭉 창출하세요!</h5>
                </li>
              </ul>
              <form class="login_form">
                <li>
                  <FontAwesomeIcon :icon="faUserCheck" style="color:#0d4890" />
                  <input
                    class="Store_enter_form"
                    placeholder="ID"
                    type="text"
                  />
                  <!-- v-model="store_id" -->
                </li>

                <li>
                  <FontAwesomeIcon :icon="faLock" style="color:#0d4890" />
                  <input
                    class="Store_enter_form"
                    placeholder="PASSWORD"
                    type="password"
                    autocomplete="off"
                  />
                  <!-- v-model="store_password" -->

                  <!-- @click="storeLoginBtn" -->
                </li>

                <li>
                  <b-button id="store_login_btn">
                    Login
                  </b-button>
                </li>
                <li>
                  <b-button id="store_join_btn">
                    Sign-up
                  </b-button>
                </li>
                <li>
                  <!-- <a id="font-red">{{ StoreErrMsg }}</a> -->
                </li>
              </form></b-tab
            >
          </b-tabs>
        </div>
      </div>
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
    <div class="span-blank">빈공간</div>
  </div>
</template>

<script>
import axios from "axios";
import "url-search-params-polyfill";
import VueCookies from "vue-cookies";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
const storage = window.sessionStorage;

export default {
  name: "start",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      id: "",
      password: "",
      showAlert: false,
      errMsg: "",
      StoreShowAlert: false,
      StoreErrMsg: "",

      //아이콘
      faUserCheck,
      faLock,
    };
  },
  methods: {
    async loginBtn() {
      if (this.id == "") {
        this.showAlert = true;
        this.errMsg = "아이디를 입력해주세요";
        return;
      } else if (this.password == "") {
        this.showAlert = true;
        this.errMsg = "비밀번호를 입력해주세요";
        return;
      } else {
        var params = {
          username: this.id,
          password: this.password,
        };
        storage.setItem("jwt-auth-token", "");
        storage.setItem("login_user", "");
        storage.setItem("wallet_address", "");
        await axios
          .post("/login/login", params)
          .then((res) => {
            //여기서 로그인 했을때 존재하지 않으면 존재하지 않는 아이디 입니다.라는 노티 띄우고 존재하면 쿠키 삽입 후 페이지 이동.
            // console.log(res.data.data[0]);
            // console.log(res);
            // console.log(res.headers);
            storage.setItem("jwt-auth-token", res.data.data[0]);
            storage.setItem("login_user", params.username);
            storage.setItem("wallet_address", res.data.data[1]);
            VueCookies.set("Id", "user");
            VueCookies.set("Address", res.data.data[1]);
            this.$router.push("/Main");
          })
          .catch(() => {
            this.showAlert = true;
            this.errMsg = "ID 또는 PASSWORD를 다시 확인해주세요";
          });
      }
    },
    setCookies: () => {
      if (!VueCookies.isKey("Id") || !VueCookies.isKey("Address")) {
        VueCookies.set("Id", "user");
        VueCookies.set("Address", "0x3237F3B077bf7C5367a74D4e877D8Fc8c2B9a7c6");
      }
    },
    setBusinessCookies: () => {
      if (!VueCookies.isKey("Id") || !VueCookies.isKey("Address")) {
        VueCookies.set("Id", "business");
        VueCookies.set("Address", "0x3237F3B077bf7C5367a74D4e877D8Fc8c2B9a7c6");
      }
    },

    //슬라이드
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
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
.Store_enter_form {
  margin-bottom: 2%;
  border: #0d4890 solid 2px;
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
  background-color: #0d4890;
}

#store_join_btn {
  width: 214px;
  font-size: 17px;
  padding: 2px 0;
  border-radius: 48px;
  color: #0d4890;
  background-color: #fff;
  border: 2px solid #0d4890;
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
</style>
