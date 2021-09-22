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
        <div>
          <b-tabs content-class="mt-3" justified>
            <!-- 지역주민 로그인 탭 -->
            <b-tab title="지역주민 시작하기" active
              ><form class="login_form">
                <input
                  class="enter_form"
                  placeholder="ID"
                  type="text"
                  v-model="id"
                />
                <input
                  class="enter_form"
                  placeholder="PASSWORD"
                  type="password"
                  v-model="password"
                  autocomplete="off"
                />
                <ul>
                  <li>
                    <b-button id="login_btn" @click="loginBtn">
                      Login
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
                <input class="enter_form" placeholder="ID" type="text" />
                <!-- v-model="store_id" -->
                <input
                  class="enter_form"
                  placeholder="PASSWORD"
                  type="password"
                  autocomplete="off"
                />
                <!-- v-model="store_password" -->

                <!-- @click="storeLoginBtn" -->
                <b-button id="store_login_btn">
                  Login
                </b-button>
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
import VueCookies from "vue-cookies";
import axios from "axios";
import "url-search-params-polyfill";
import { httpAddress } from "@/../public/js/axios/httpaddress.js";
export default {
  name: "start",
  components: {},
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
        var params = new URLSearchParams();
        params.append("id", this.id);
        params.append("password", this.password);
        await axios
          .post("https://" + httpAddress + ":9091/login/user", params)
          .then((res) => {
            //여기서 로그인 했을때 존재하지 않으면 존재하지 않는 아이디 입니다.라는 노티 띄우고 존재하면 쿠키 삽입 후 페이지 이동.
            if (res.data == "fail") {
              this.showAlert = true;
              this.errMsg = "ID 또는 PASSWORD를 다시 확인해주세요";
              return;
            } else {
              VueCookies.set("Id", "user");
              VueCookies.set("Address", res.data);
              this.$router.push("/Main");
              return;
            }
          })
          .catch((err) => {
            console.log(err);
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
        VueCookies.set("Address", "임의의 값 나중에 랜덤");
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

/*--------------------------하단 슬라이드-------------------------- */
#start_carousel img {
  width: 100%;
}

/*-------------------------- 내역/리뷰 버튼-------------------------- */
.li_btn {
  font-family: BCcardB;
  padding-bottom: 30px;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #fbca47;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link {
  color: #17094c;
}
.login_form {
  padding-top: 40px;
  font-family: BCcardB;
}
.enter_form {
  margin-bottom: 2%;
  border: #fbca47 solid 1px;
  height: 55px;
  padding: 0 25px;
  border-radius: 30px;
  background-color: #fff;
  font-size: 17px;
  width: 77%;
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
