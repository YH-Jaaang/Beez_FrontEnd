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
            <b-tab title="지역주민 시작하기" active id="user_tab">
              <ul id="explain">
                <li>
                  <h1>WELCOME TO</h1>
                  <h1 id="ex_title">
                    BEEZ
                    <FontAwesomeIcon :icon="faBitcoin" id="user_icon" />
                  </h1>
                </li>
                <li>
                  <h5>끝이 없는 혜택, BZ 토큰이 와르르!</h5>
                  <h5>BEEZ와 함께 지역 상권을 맘껏 이용해보세요.</h5>
                </li>
              </ul>

              <b-form class="user_login">
                <b-input-group>
                  <b-input-group-append>
                    <FontAwesomeIcon
                      :icon="faUserCheck"
                      style="color:#ffbd07"
                      size="lg"
                    />
                  </b-input-group-append>
                  <b-form-input
                    class="enter_form"
                    placeholder="ID"
                    type="text"
                    v-model="id"
                  ></b-form-input>
                </b-input-group>
              </b-form>

              <b-form class="user_login">
                <b-input-group>
                  <b-input-group-append>
                    <FontAwesomeIcon
                      :icon="faLock"
                      style="color:#ffbd07"
                      size="lg"
                    />
                  </b-input-group-append>
                  <b-form-input
                    class="enter_form"
                    placeholder="PASSWORD"
                    type="password"
                    v-model="password"
                    autocomplete="off"
                  />
                </b-input-group>
              </b-form>

              <li>
                <b-button id="login_btn" @click="loginBtn">
                  Login
                </b-button>
              </li>
              <li>
                <b-button href="/SignUp" id="join_btn">
                  Sign-up
                </b-button>
              </li>
              <li>
                <a id="font-red">{{ errMsg }}</a>
              </li>
            </b-tab>

            <!-- 소상공인 로그인 탭 -->
            <b-tab title="소상공인 시작하기" id="store_tab">
              <ul id="explain">
                <li>
                  <h1>WELCOME TO</h1>
                  <h1 id="ex_title">
                    BEEZ
                    <FontAwesomeIcon :icon="faBitcoin" id="user_icon" />
                  </h1>
                </li>
                <li>
                  <h5>
                    소상공인을 위한 지역화폐, BEEZ
                  </h5>
                  <h5>꿀 떨어지는 혜택 가득한 BEEZ를 이용해보세요.</h5>
                </li>
              </ul>

              <b-form class="store_login">
                <b-input-group>
                  <b-input-group-append>
                    <FontAwesomeIcon
                      :icon="faUserCheck"
                      style="color:#0d4890"
                      size="lg"
                    />
                  </b-input-group-append>
                  <b-form-input
                    class="enter_form"
                    placeholder="ID"
                    type="text"
                  ></b-form-input>
                  <!-- v-model="store_id" -->
                </b-input-group>
              </b-form>

              <b-form class="store_login">
                <b-input-group>
                  <b-input-group-append>
                    <FontAwesomeIcon
                      :icon="faLock"
                      style="color:#0d4890"
                      size="lg"
                    />
                  </b-input-group-append>
                  <b-form-input
                    class="enter_form"
                    placeholder="PASSWORD"
                    type="password"
                    autocomplete="off"
                  />
                  <!-- v-model="store_password" -->

                  <!-- @click="storeLoginBtn" -->
                </b-input-group>
              </b-form>

              <li>
                <b-button id="login_btn">
                  Login
                </b-button>
              </li>
              <li>
                <b-button id="join_btn">
                  Sign-up
                </b-button>
              </li>
              <li>
                <!-- <a id="font-red">{{ StoreErrMsg }}</a> -->
              </li>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>

    <div>
      <b-card id="explain_btn">
        <a>
          BEEZ 지역화폐
        </a>
        <a>
          가맹점 찾기
        </a>
        <img src="../assets/start_main/icon01.png" />
      </b-card>
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
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";

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
      faBitcoin,
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
@font-face {
  font-family: "Cafe24Ssurround";
  src: url("../fonts/Cafe24Ssurround.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Cafe24SsurroundAir";
  src: url("../fonts/Cafe24SsurroundAir.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "GmarketSansTTFMedium";
  src: url("../fonts/GmarketSansTTFMedium.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "GmarketSansTTFBold";
  src: url("../fonts/GmarketSansTTFBold.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}
/*--------------------------로그인-------------------------- */
/*----지역/소상 탭 */
#login_tab {
  margin: 6%;
  font-family: "GmarketSansTTFBold";
}

.nav-tabs .nav-link {
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
}

.nav-tabs .nav-link.active {
  border-color: #aba8a2 #aba8a2 #fff;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #ffbd07;
  font-weight: 600;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link {
  color: #0d4890;
}

/*----로그인 전 beez 설명-- */
#explain {
  border-radius: 20px;
  padding-top: 15px;
}

#user_tab #explain {
  background-color: #f8f3e19a;
}

#store_tab #explain {
  background-color: #e6ecf79a;
}

#login_tab h1 {
  font-family: "Cafe24Ssurround";
  font-weight: bold;
  display: flex;
  margin-left: 5%;
}

#login_tab h5 {
  font-family: "GmarketSansTTFMedium";
  /* font-weight: bolder; */
  display: flex;
  margin-left: 4%;
  font-size: 14px;
}

#ex_title {
  font-size: 35px;
  -webkit-text-stroke-width: 0.4mm;
}

#user_tab #ex_title {
  color: #ffbd07;
  -webkit-text-stroke-color: #ffbd07;
}

#store_tab #ex_title {
  color: #0d4890;
  -webkit-text-stroke-color: #0d4890;
}

#user_icon {
  margin-left: 10px;
}

/*----로그인 폼-- */
.user_login {
  padding-top: 5%;
  padding-left: 6%;
  padding-right: 6%;
  font-family: Cafe24SsurroundAir;
}

.store_login {
  padding-top: 5%;
  padding-left: 7%;
  padding-right: 7%;
  font-family: Cafe24SsurroundAir;
}

.user_login .input-group {
  background-color: #fff3c5;
  /* border: #fbca47 solid 2px; */
  border-radius: 20px;
}

.store_login .input-group {
  background-color: #b9d9ff;
  /* border: #fbca47 solid 2px; */
  border-radius: 20px;
}

.user_login .input-group-append {
  margin: 12px;
  display: block;
}

.store_login .input-group-append {
  margin: 12px;
  display: block;
}

.user_login .enter_form {
  height: 50px;
  padding: 0 20px;
  background-color: #fff3c5;
  font-size: 13px;
  width: 77%;
}

.store_login .enter_form {
  height: 50px;
  padding: 0 20px;
  background-color: #b9d9ff;
  font-size: 13px;
  width: 77%;
}

.user_login .form-control {
  background-color: #fff3c5;
}

.store_login .form-control {
  background-color: #b9d9ff;
}

#login_btn {
  width: 55%;
  font-size: 17px;
  /* padding: 2px 0; */
  border-radius: 17px;
  margin-top: 30px;
}

#user_tab #login_btn {
  color: #fff;
  background-color: #ffbd07;
}

#store_tab #login_btn {
  color: #fff;
  background-color: #0d4890;
}

#join_btn {
  width: 55%;
  font-size: 17px;
  /* padding: 2px 0; */
  border-radius: 17px;
}

#user_tab #join_btn {
  color: #ffbd07;
  background-color: #fff;
  border: 2px solid #ffbd07;
}

#store_tab #join_btn {
  color: #0d4890;
  background-color: #fff;
  border: 2px solid #0d4890;
}

#font-red {
  font-family: "GmarketSansTTFMedium";
  font-weight: bolder;
  color: rgb(226, 38, 38);
  font-size: 15px;
}

/*--------------------------지역화폐 관련 정보 버튼-------------------------- */
#explain_btn img {
  width: 13%;
  float: right;
}

/*--------------------------하단 슬라이드-------------------------- */
#start_carousel img {
  width: 100%;
}

#start_carousel {
  margin-top: 17%;
}
</style>
