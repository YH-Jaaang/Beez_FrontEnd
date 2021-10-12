<template>
  <div id="signUp">
    <ul id="explain">
      <li>
        <h1>Let's</h1>
        <h1 style="color:#f89604">
          Start!
        </h1>
      </li>
      <img src="../assets/start_main/join01.png" />
    </ul>
    <b-card header="회원 가입" class="signUp_form">
      <b-form @submit.prevent="submitForm">
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
            v-model="user_name"
            @keyup="nameValid"
            placeholder="NAME"
            type="text"
            maxlength="13"
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
            @blur="emailValid"
            @keyup="emailValid2"
            placeholder="EMAIL"
            type="text"
            required
          ></b-form-input>
          <b-button>
            중복확인
          </b-button>
          <!-- 중복검사 완료시 체크 표시로 변함 -->
          <img style="display: none;" />
        </b-input-group>
        <div v-if="!emailValidError" id="error1">
          잘못된 이메일 형식입니다.
        </div>

        <!-- 비밀번호 -->
        <b-input-group>
          <b-input-group-append>
            <FontAwesomeIcon :icon="faLock" size="lg" style="color:#f89604" />
          </b-input-group-append>
          <b-form-input
            type="password"
            v-model="password"
            placeholder="PASSWORD"
            maxlength="16"
            @blur="passwordValid"
            required
          ></b-form-input>
        </b-input-group>
        <div v-if="!passwordValidError" id="error1">
          8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
        </div>

        <!-- 비밀번호 재확인 -->
        <b-input-group>
          <b-form-input
            id="again"
            type="password"
            v-model="password2"
            placeholder="PASSWORD AGAIN"
            maxlength="16"
            @blur="passwordCheckValid"
            required
          ></b-form-input>
        </b-input-group>
        <div v-if="!passwordCheckValidError" id="error1">
          비밀번호가 일치하지 않습니다.
        </div>

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
            maxlength="13"
            @keyup="getPhoneMask(phone)"
            required
          ></b-form-input>
        </b-input-group>

        <!-- 은행 -->
        <b-input-group>
          <b-input-group-append>
            <FontAwesomeIcon
              :icon="faPiggyBank"
              size="lg"
              style="color:#f89604"
            />
          </b-input-group-append>
          <b-form-select
            class="select"
            v-model="bank_name"
            :options="banks"
            required
          ></b-form-select>
        </b-input-group>

        <!-- 계좌번호 -->
        <b-input-group>
          <b-form-input
            id="again2"
            type="text"
            v-model="account_number"
            @keyup="accountValid"
            placeholder="계좌번호 입력"
            maxlength="25"
            required
          ></b-form-input>
        </b-input-group>

        <!-- 회원가입 동의-->
        <div class="checkbox">
          <b-form-checkbox v-model="checkbox1">
            <a>BEEZ 서비스 이용약관 동의</a>
            <a id="point">(필수)</a>
            <b-button id="Store_modal_btn" v-b-modal.modal1
              >자세히 보기</b-button
            >
          </b-form-checkbox>
          <b-form-checkbox v-model="checkbox2">
            <a>개인정보 취급 위탁 동의</a>
            <a id="point">(필수)</a>
            <b-button id="Store_modal_btn2" v-b-modal.modal2
              >자세히 보기</b-button
            >
          </b-form-checkbox>
        </div>
        <!-- footer에서 불러 오기 때문에 modal창 필요없음 -->
        <div id="signUp_btn">
          <b-button type="submit">가입하기</b-button>
          <b-button href="/" id="signUp_btn2">취소</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";

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
      faPiggyBank,

      passwordValidError: true,
      passwordCheckValidError: true,
      emailValidError: true,

      user_name: "",
      email: "",
      password: "",
      phone: "",
      password2: "",
      bank_name: null,
      account_number: "",

      checkbox1: "",
      checkbox2: "",

      banks: [
        { text: "은행선택", value: null },
        "국민",
        "농협",
        "신한",
        "IBK기업",
        "하나",
        "우리",
        "카카오뱅크",
        "SC제일",
        "대구",
        "부산",
        "광주",
        "새마을금고",
        "경남",
        "전북",
        "제주",
        "산업",
        "수협",
      ],
    };
  },

  methods: {
    // -----------------------------PHONE 하이픈 관련 시작----------------------
    getPhoneMask(val) {
      let res = this.getMask(val);
      this.phone = res;
      //서버 전송 값에는 '-' 를 제외하고 숫자만 저장
      // this.model.phone = this.phone.replace(/[^0-9]/g, "");
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

    // -----------------------------이름 유효성 검사----------------------
    // <!-- onKeyup="this.value=this.value.replace(/[^ㄱ-ㅎ가-힣a-zA-Z]/g,'');" -->
    nameValid() {
      this.user_name = this.user_name.replace(/[^ㄱ-ㅎ가-힣a-zA-Z]/g, "");
    },

    // -----------------------------계좌번호 유효성 검사----------------------
    accountValid() {
      this.account_number = this.account_number.replace(/[^-0-9]/g, "");
    },

    // -----------------------------이메일 유효성 검사----------------------
    emailValid() {
      if (
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(
          this.email
        )
      ) {
        this.emailValidError = true;
      } else {
        this.emailValidError = false;
      }
    },

    emailValid2() {
      this.email = this.email.replace(/[^a-zA-Z0-9*@.]/g, "");
    },

    // -----------------------------비밀번호 유효성 검사----------------------
    passwordValid() {
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.password)) {
        this.passwordValidError = true;
      } else {
        this.passwordValidError = false;
      }
    },
    //-------------------비밀번호 재확인--------------------------------------
    passwordCheckValid() {
      if (this.password === this.password2) {
        this.passwordCheckValidError = true;
      } else {
        this.passwordCheckValidError = false;
      }
    },
    //-------------------회원가입 최종 버튼--------------------------------------
    submitForm() {
      if (
        !this.passwordValidError ||
        !this.passwordCheckValidError ||
        !this.emailValidError
      ) {
        alert("회원가입 입력란을 확인해주세요.");
        return;
      } else if (!this.checkbox1 || !this.checkbox2) {
        alert("회원가입 동의란을 확인해주세요.");
        return;
      } else {
        this.$router.push("/");
      }
    },
    // --------------------------모달 취소 창--------------------------------
    hideModal() {
      this.$refs["Agree_Checkbox"].hide();
    },
  },
};
</script>

<style>
/*-----------------폰트, @media---------------------------- */
@font-face {
  font-family: "KoPubWorldDotumLight";
  src: url("../fonts/KoPubWorldDotumLight.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "KoPubWorldDotumMedium";
  src: url("../fonts/KoPubWorldDotumMedium.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}

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
}

.signUp_form .card-body {
  padding: 8%;
}

.signUp_form .input-group {
  background-color: antiquewhite;
  /* margin-bottom: 6%; */
  margin-top: 6%;
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

.signUp_form .custom-select {
  background-color: antiquewhite;
  border: 0px;
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

#again2.form-control {
  padding-left: 52px;
}

.signUp_form .input-group-append {
  margin: 13px;
  display: block;
}

#error1,
#error2 {
  font-family: "KoPubWorldDotumLight";
  color: #f00000;
  font-size: 13px;
}

/*-----------------버튼 ---------------------------- */
.signUp_form .btn {
  background-color: #f89604;
  color: #fff;
  font-size: 14px;
  border-radius: 20px;
  border-color: #f89604;
  font-family: "KoPubWorldDotumLight";
}

#signUp_btn .btn {
  width: 100%;
  margin-top: 4%;
  border-radius: 17px;
  font-weight: 600;
  font-size: 19px;
  font-family: "Cafe24Ssurround";
}

#signUp_btn2 {
  background-color: #fff;
  color: #f89604;
  border: 3px solid;
}

/* -------------------------------------동의란---------------------------- */
#point {
  color: rgb(19, 110, 38);
  font-size: 13px;
}

#Store_modal_btn,
#Store_modal_btn2 {
  padding: 1% 3%;
  font-size: 11px;
  background-color: rgb(180, 183, 199);
  border-color: rgb(180, 183, 199);
  float: right;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #f89604;
}

#signUp .custom-control {
  font-family: "KoPubWorldDotumLight";
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: left;
}

#signUp .custom-control a {
  padding-left: 8px;
}

.checkbox {
  margin-top: 50px;
  margin-left: -17px;
  margin-right: -17px;
  margin-bottom: 25px;
}

.checkbox .custom-control-label {
  display: block;
}
</style>
