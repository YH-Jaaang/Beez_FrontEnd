<template>
  <b-container style="450px">
    <b-layout align-center row wrap>
      <b-flex xs12>
        <!-- <b-alert v-if="isError" type="error"></b-alert> -->

        <b-card header="회원가입">
          <div>
            <!-- <b-form class="signUp_form" v-model="valid" lazy-validation> -->
            <b-form class="signUp_form">
              <!-- 이름 -->
              <b-input-group>
                <!-- <b-input-group-append>
                  <FontAwesomeIcon
                    :icon="faUserCheck"
                    style="color:#ffbd07"
                    size="lg"
                  />
                </b-input-group-append> -->
                <!-- <b-form-input
                  class="enter_form"
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  placeholder="NAME"
                  type="text"
                  required
                ></b-form-input> -->
                <b-form-input
                  class="enter_form"
                  v-model="name"
                  :counter="10"
                  placeholder="NAME"
                  type="text"
                  required
                ></b-form-input>
              </b-input-group>

              <!-- 이메일 -->
              <b-input-group>
                <!-- <b-input-group-append>
                  <FontAwesomeIcon
                    :icon="faUserCheck"
                    style="color:#ffbd07"
                    size="lg"
                  />
                </b-input-group-append> -->
                <!-- <b-form-input
                  class="enter_form"
                  v-model="email"
                  :rules="emailRules"
                  placeholder="EMAIL"
                  type="text"
                  required
                ></b-form-input> -->
                <b-form-input
                  class="enter_form"
                  v-model="email"
                  placeholder="EMAIL"
                  type="text"
                  required
                ></b-form-input>
              </b-input-group>

              <!-- 비밀번호 -->
              <b-input-group>
                <!-- <b-input-group-append>
                  <FontAwesomeIcon
                    :icon="faUserCheck"
                    style="color:#ffbd07"
                    size="lg"
                  />
                </b-input-group-append> -->
                <!-- <b-form-input
                  class="enter_form"
                  v-model="password"
                  :rules="[rules.required, rules.min]"
                  :type="show ? 'text' : 'password'"
                  placeholder="PASSWORD"
                  hint="At least 8 characters"
                  counter
                  @click:append="show = !show"
                ></b-form-input> -->
                <b-form-input
                  class="enter_form"
                  v-model="password"
                  placeholder="PASSWORD"
                  hint="At least 8 characters"
                  counter
                  @click:append="show = !show"
                ></b-form-input>
              </b-input-group>

              <!-- <b-form-input
                class="enter_form"
                v-model="check_Password"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                placeholder="Password Again"
                hint="At least 8 characters"
                counter
                @click:append="show = !show"
              ></b-form-input> -->
              <b-form-input
                class="enter_form"
                v-model="check_Password"
                :type="show ? 'text' : 'password'"
                placeholder="Password Again"
                hint="At least 8 characters"
                counter
                @click:append="show = !show"
              ></b-form-input>

              <!-- 전화 번호 -->
              <b-input-group>
                <!-- <b-input-group-append>
                  <FontAwesomeIcon
                    :icon="faUserCheck"
                    style="color:#ffbd07"
                    size="lg"
                  />
                </b-input-group-append> -->
                <b-form-input
                  class="enter_form"
                  v-model="phone"
                  type="text"
                  placeholder="PHONE"
                  @keyup="getPhoneMask(phone)"
                ></b-form-input>
              </b-input-group>
            </b-form>

            <!-- <h6 v-if="sameChk(chkPassword)" class="mb-5 teal--text accent-3">
              Please create the two passwords identical.
            </h6>
            <h6 v-else class="mb-5 red--text lighten-2">
              Please create the two passwords identical.
            </h6> -->

            <b-button @click="reset">취소</b-button>
            <b-button :disabled="!valid" @click="register(formData)"
              >회원가입</b-button
            >
          </div>
        </b-card>
      </b-flex>
    </b-layout>
  </b-container>
</template>

<script>
import axios from "axios";
// import RegisterObj from "../models/resisterObj";

export default {
  data() {
    return {
      phone: null,
      name: "",
      password: "",
    };
  },
//   data: () => ({
//     // formData: new RegisterObj("", "", "", ""),
//     valid: false,
//     nameRules: [
//       (v) => !!v || "Name is required",
//       (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
//     ],
//     isError: false,
//     errorMsg: "",
//     emailRules: [
//       (v) => !!v || "E-mail is required",
//       (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
//     ],
//     show: false,
//     chkPassword: "",
//     rules: {
//       required: (value) => !!value || "Required.",
//       min: (v) => v.length >= 8 || "Min 8 characters",
//     },
//   }),
  methods: {
    // goToMain() {
    //   this.$router.push({
    //     name: "login",
    //   });
    // },
    // sameChk(password) {
    //   if (this.formData.password == password) return true;
    //   else {
    //     this.valid = false;
    //     return false;
    //   }
    // },
    // register(RegisterObj) {
    //   if (
    //     !this.formData.email ||
    //     !this.formData.name ||
    //     !this.formData.password
    //   ) {
    //     this.isError = true;
    //     this.errorMsg = "이메일과 닉네임과 비밀번호를 모두 입력해주세요.";
    //     return;
    //   } else if (!this.sameChk) {
    //     this.isError = true;
    //     this.errorMsg = "두 비밀번호가 같아야 합니다.";
    //     return;
    //   }
    //   axios
    //     .post("/SignUp", RegisterObj)
    //     .then(() => {
    //       this.goToMain();
    //     })
    //     .catch((err) => {
    //       if (err.response) {
    //         this.isError = true;
    //         this.errorMsg = err.response.data.message;
    //       }
    //     });
    // },
    // validate() {
    //   this.$refs.form.validate();
    // },
    // reset() {
    //   this.$refs.form.reset();
    // },
    // resetValidation() {
    //   this.$refs.form.resetValidation();
    // },

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
            res = phoneNumber.substr(0, 3) + "-" + phoneNumber.substr(3);
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
  },
};
</script>

<style></style>
