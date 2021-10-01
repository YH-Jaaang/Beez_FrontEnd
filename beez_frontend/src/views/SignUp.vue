<template>
  <div id="signUp">
    <!-- <b-container> -->
    <!-- <b-layout align-center row wrap>
        <b-flex xs12> -->
    <ui id="explain">
      <li>
        <h1>Let's</h1>
        <h1 style="color:#f89604">
          Start!
        </h1>
      </li>
      <img src="../assets/start_main/join01.png" />
    </ui>
    <b-card header="회원 가입" class="signUp_form">
      <b-form v-model="valid" @submit.prevent="submitForm">
        <!-- 이름 -->
        <b-input-group>
          <b-input-group-append>
            <FontAwesomeIcon
              :icon="faUserCheck"
              size="lg"
              style="color:#f89604"
            />
          </b-input-group-append>
          <b-form-input
            v-model="name"
            placeholder="NAME"
            type="text"
            required
          ></b-form-input>
        </b-input-group>

        <!-- 이메일 -->
        <b-input-group>
          <b-input-group-append>
            <FontAwesomeIcon
              :icon="faEnvelope"
              size="lg"
              style="color:#f89604"
            />
          </b-input-group-append>
          <b-form-input
            v-model="email"
            placeholder="EMAIL"
            type="email"
            required
          ></b-form-input>
          <b-button>
            중복확인
          </b-button>
          <!-- 중복검사 완료시 체크 표시로 변함 -->
          <img style="display: none;" />
        </b-input-group>

        <!-- 비밀번호 -->
        <b-input-group>
          <b-input-group-append>
            <FontAwesomeIcon :icon="faLock" size="lg" style="color:#f89604" />
          </b-input-group-append>
          <b-form-input
            type="password"
            v-model="password"
            placeholder="PASSWORD"
            required
          ></b-form-input>
        </b-input-group>

        <!-- 비밀번호 재확인 -->
        <b-input-group>
          <b-form-input
            id="again"
            type="password"
            v-model="password2"
            placeholder="ENTER PASSWORD AGAIN"
            required
          ></b-form-input>
        </b-input-group>
        <!-- <span class="badge badge-danger mt-1" v-if="passwordAgain"
          >비밀번호를 다시 확인해주세요.</span
        > -->

        <!-- 전화 번호 -->
        <b-input-group>
          <b-input-group-append>
            <FontAwesomeIcon
              :icon="faPhoneAlt"
              size="lg"
              style="color:#f89604"
            />
          </b-input-group-append>
          <b-form-input
            v-model="phone"
            type="text"
            placeholder="PHONE"
            @keyup="getPhoneMask(phone)"
            required
          ></b-form-input>
        </b-input-group>
        <div id="signUp_btn">
          <b-button type="submit">가입하기</b-button>
        </div>
      </b-form>
    </b-card>

    <!-- </b-flex>
      </b-layout> -->
    <!-- </b-container> -->
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      //아이콘
      faUserCheck,
      faEnvelope,
      faLock,
      faPhoneAlt,

      valid: false,

      name: "",
      email: "",
      password: "",
      phone: "",
      password2: "",
    };
  },

  methods: {
    // -----------------------------PHONE 하이픈 관련 시작----------------------
    getPhoneMask(val) {
      let res = this.getMask(val);
      this.phone = res;
      //서버 전송 값에는 '-' 를 제외하고 숫자만 저장
      this.model.phone = this.phone.replace(/[^0-9]/g, "");
    },
    getMask(phoneNumber) {
      if (!phoneNumber) return phoneNumber;
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

      let res = "";
      if (phoneNumber.length < 3) {
        res = phoneNumber;
      } else {
        if (phoneNumber.substr(0, 2) == "02") {
          if (phoneNumber.length <= 5) {
            res = phoneNumber.substr(0, 2) + "-" + phoneNumber.substr(2, 3);
          } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
            res =
              phoneNumber.substr(0, 2) +
              "-" +
              phoneNumber.substr(2, 3) +
              "-" +
              phoneNumber.substr(5);
          } else if (phoneNumber.length > 9) {
            res =
              phoneNumber.substr(0, 2) +
              "-" +
              phoneNumber.substr(2, 4) +
              "-" +
              phoneNumber.substr(6);
          }
        } else {
          if (phoneNumber.length < 8) {
            res = phoneNumber;
          } else if (phoneNumber.length == 8) {
            res = phoneNumber.substr(0, 3) + "-" + phoneNumber.substr(3);
          } else if (phoneNumber.length == 9) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 3) +
              "-" +
              phoneNumber.substr(6);
          } else if (phoneNumber.length == 10) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 3) +
              "-" +
              phoneNumber.substr(6);
          } else if (phoneNumber.length > 10) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 4) +
              "-" +
              phoneNumber.substr(7);
          }
        }
      }
      return res;
    },
    // -----------------------------PHONE 하이픈 관련 끝----------------------

    // -----------------------------비밀번호 재확인----------------------
    submitForm() {
      if (this.password != this.password2) {
        console.log("비밀번호 재확인 실패");
        alert("비밀번호를 다시 입력해주세요.");
        return (this.password = ""), (this.password2 = "");
      } else {
        console.log("dd");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
/*-----------------폰트, @media---------------------------- */
@font-face {
  font-family: "GmarketSansTTFBold";
  src: url("../fonts/GmarketSansTTFBold.ttf") format("woff");
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

/*-----------------회원가입 폼 전---------------------------- */
#signUp {
  margin: 5%;
  font-family: "Cafe24SsurroundAir";
}

#signUp #explain {
  border-radius: 20px;
  padding-top: 9%;
  background-color: #eaf8e19a;
  display: inline-block;
}

#signUp #explain li {
  display: inline-block;
  margin-left: 7%;
}

#signUp #explain h1 {
  font-size: 35px;
  font-family: "Cafe24Ssurround";
  color: rgb(0, 157, 255);
}

#signUp #explain img {
  float: right;
  width: 45%;
  margin-top: -7%;
  margin-right: 4%;
}

/*-----------------회원가입 폼 ---------------------------- */
.signUp_form {
  text-align: center;
  margin-top: 8%;
}

.signUp_form .card-header {
  font-family: "Cafe24Ssurround";
  color: #f89604;
  font-size: 20px;
  border-bottom: 2px solid #f89604;
  margin-bottom: 2%;
}

.signUp_form .card-body {
  padding: 8%;
}

.signUp_form .input-group {
  background-color: antiquewhite;
  margin-bottom: 6%;
  /* padding: 2.8%; */
  border-radius: 20px;
}

.signUp_form .form-control {
  background-color: antiquewhite;
  border-radius: 20px;
  padding: 0;
  padding-left: 10px;
  padding-right: 20px;
  height: 50px;
  font-size: 15px;
}

#again.form-control {
  padding-left: 52px;
}

.signUp_form .input-group-append {
  margin: 13px;
  display: block;
}

/*-----------------버튼 ---------------------------- */
.signUp_form .btn {
  background-color: #f89604;
  color: #fff;
  font-size: 14px;
}

#signUp_btn .btn {
  width: 100%;
  margin-top: 10%;
  border-radius: 17px;
  font-weight: 600;
  font-size: 17px;
}
</style>
