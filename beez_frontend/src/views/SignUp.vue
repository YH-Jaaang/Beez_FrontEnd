<template>
  <div class="SignUp_section">
    <div class="SignUp_title">
      <a id="SignUp_title_font">
        <FontAwesomeIcon :icon="faUserPlus" style="color:#ffde02s" />
        회원가입
      </a>
    </div>

    <div class="SignUp_input_box">
      <a>이름</a>
      <b-form-input
        v-model="text"
        id="input-valid"
        :state="true"
        name="Username"
        placeholder="Enter your name"
      >
        <div class="alert-danger" v-if="submitted && errors.has('username')">
          {{ errors.first("username") }}
        </div>
      </b-form-input>

      <div>
        <b-input-group type="number" id="input-valid">
          <ul>
            <b-dropdown text="010" variant="info">
              <b-dropdown-item>010</b-dropdown-item>
              <b-dropdown-item>011</b-dropdown-item>
              <b-dropdown-item>016</b-dropdown-item>
              <b-dropdown-item>019</b-dropdown-item>
            </b-dropdown>
          </ul>
          <b-form-input></b-form-input>
        </b-input-group>
      </div>

      <ul>
        닉네임
        <b-form-input
          v-model="text"
          id="input-valid"
          :state="true"
          placeholder="Enter your Email"
          ><button id="Confirmation_btn">중복확인</button></b-form-input
        >
      </ul>
      <ul>
        <div class="form-group mb-3">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="input-valid"
            v-model="email"
            placeholder="Enter email"
            @blur="checkDuplicate"
          />
          <span class="badge badge-danger mt-1" v-if="!availableEmail"
            >이미 사용중인 이메일입니다.</span
          >
        </div>
      </ul>
      <ul>
        비밀번호<b-form-input
          v-model="text"
          type="password"
          placeholder="비밀번호"
          id="input-valid"
        ></b-form-input>
      </ul>
      <ul>
        <b-form-input
          v-model="text"
          type="password"
          placeholder="비밀번호 확인"
          id="input-valid"
        ></b-form-input>
      </ul>
    </div>
    <b-button class="mt-3" id="SignUp_btn" href="/Start">취소</b-button>
    <b-button class="mt-3" id="SignUp_btn" href="/">확인</b-button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      user: new User("", "", ""),
      submitted: false,
      successful: false,
      message: "",
      //아이콘
      faUserPlus,
    };
  },

  methods: {
    async checkDuplicate() {
      //일단은 사용가능한 이메일로 true로 초기화 한다.
      this.availableEmail = true;

      //이메일 유효성을 검사한다.
      if (!validateEmail(this.email)) {
        //유효성이 틀리다면 data 값을 false로 한다.
        this.availableEmailForm = false;
        return;
      } else {
        this.availableEmailForm = true;
      }

      //이메일 중복체크를 한다.
      const response = await checkDuplicateEmail(this.email);
      if (!response.data) {
        this.availableEmail = false;
      } else {
        this.availableEmail = true;
      }
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
/*-----------------------------title------------------------------------*/

.signup_section {
  width: 70%;
}

.SignUp_title {
  font-family: BCcardB;
  text-align: center;
  color: #f8b704;
  font-weight: 900;
  border-bottom: 3px solid #f8b704;
  margin: 0 10% 0 10%;
  font-size: 28px;
  margin-bottom: 10%;
}
/*------------------------------가입란-------------------------------------*/
.SignUp_input_box {
  font-family: BCcardB;
  text-align: center;
  font-weight: 900;
  margin: 0 10% 0 10%;
  padding: 1% 1%;
}
#input-valid {
  background-color: antiquewhite;
}
.b-dropdown {
  background-color: #f8b704;
}
#input_number {
  width: 60%;
  background-color: antiquewhite;
}
#SignUp_btn {
  background-color: antiquewhite;
  margin-bottom: 10%;
  padding: auto;
}
</style>
