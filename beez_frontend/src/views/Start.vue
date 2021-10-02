<template>
  <div id="start">
    <div>
      <div class="li_btn text-center">
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
                  <input
                    class="enter_form"
                    placeholder="ID"
                    type="text"
                    v-model="storeId"
                  />
                  <!-- v-model="store_id" -->
                </li>

                <li>
                  <FontAwesomeIcon :icon="faLock" style="color:#fbca47" />
                  <input
                    class="enter_form"
                    placeholder="PASSWORD"
                    type="password"
                    v-model="storePassword"
                    autocomplete="off"
                  />
                  <!-- v-model="store_password" -->

                  <!-- @click="storeLoginBtn" -->
                </li>

                <li>
                  <b-button id="store_login_btn" @click="storeLoginBtn">
                    Login
                  </b-button>
                </li>
                <li>
                  <b-button id="store_join_btn">
                    Sign-up
                  </b-button>
                </li>
                <li>
                  <a id="font-red">{{ StoreErrMsg }}</a>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
//const storage = window.sessionStorage;

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
      userRole: "USER",
      showAlert: false,
      errMsg: "",
      storeId: "",
      storePassword: "",
      storeRole: "STORE",
      StoreShowAlert: false,
      StoreErrMsg: "",

      //아이콘
      faUserCheck,
      faLock,
    };
  },
  methods: {
    //사용자 로그인 화면
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
          email: this.id,
          password: this.password,
          role: this.userRole,
        };
        //세션 초기화
        localStorage.clear();
        await axios
          .post("/api/login", params)
          .then((res) => {
            localStorage.setItem("token", res.data.data[0]);
            localStorage.setItem("email", params.email);
            localStorage.setItem("nickName", res.data.data[1]);
            localStorage.setItem("role", this.userRole);
            if (this.$route.path !== "/Main") this.$router.push("/Main");
          })
          .catch(() => {
            this.showAlert = true;
            this.errMsg = "ID 또는 PASSWORD를 다시 확인해주세요";
          });
      }
    },
    //소상공인 로그인 화면
    async storeLoginBtn() {
      if (this.storeId == "") {
        this.StoreShowAlert = true;
        this.StoreErrMsg = "아이디를 입력해주세요";
        return;
      } else if (this.storePassword == "") {
        this.StoreShowAlert = true;
        this.StoreErrMsg = "비밀번호를 입력해주세요";
        return;
      } else {
        var params = {
          email: this.storeId,
          password: this.storePassword,
          role: this.storeRole,
        };
        //세션 초기화
        localStorage.setItem("token", "");
        localStorage.setItem("email", "");
        localStorage.setItem("nickName", "");
        localStorage.setItem("role", "");
        await axios
          .post("/api/login", params)
          .then((res) => {
            //여기서 로그인 했을때 존재하지 않으면 존재하지 않는 아이디 입니다.라는 노티 띄우고 존재하면 쿠키 삽입 후 페이지 이동.
            localStorage.setItem("token", res.data.data[0]);
            localStorage.setItem("email", params.email);
            localStorage.setItem("nickName", res.data.data[1]);
            localStorage.setItem("role", this.storeRole);
            if (this.$route.path !== "/StoreMain")
              this.$router.push("/StoreMain");
          })
          .catch(() => {
            this.StoreShowAlert = true;
            this.StoreErrMsg = "ID 또는 PASSWORD를 다시 확인해주세요";
          });
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
</style>
