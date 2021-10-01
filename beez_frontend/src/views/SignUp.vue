<template>
  <div id="signUp">
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
            placeholder="ENTER PASSWORD AGAIN"
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
            type="number"
            v-model="account_number"
            placeholder="계좌번호 입력"
            maxlength="25"
            required
          ></b-form-input>
        </b-input-group>

        <!-- 회원가입 동의-->
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          value="동의 함"
          unchecked-value="동의 안 함"
        >
          BEEZ서비스 이용약관 동의
          <a id="agreement_point"> (필수) </a>
          <b-button id="Store_modal_btn" v-b-modal.modal-1
            >자세히 보기</b-button
          >
        </b-form-checkbox>
        <b-form-checkbox
          id="checkbox-2"
          v-model="status2"
          value="동의 함"
          unchecked-value="동의 안 함"
        >
          개인정보 취급 위탁 동의설명 <a id="agreement_point"> (필수) </a>
          <b-button id="Store_modal_btn2" v-b-modal.modal-2
            >자세히 보기</b-button
          >
        </b-form-checkbox>

        <div id="signUp_btn">
          <b-button type="submit">가입하기</b-button>
        </div>

        <!-- 동의 란 -->
        <div class="Agree_Checkbox">
          <b-modal id="modal-1" title="BEEZ서비스 이용약관 내용">
            <ul class="my-4">
              <p>BEEZ서비스를 이용 하실 고객 여러분을 환영합니다.</p>
              <p>
                BEEZ 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다.
                본 약관은 다양한 BEEZ 서비스의 이용과 관련하여 서비스 회원(이하
                ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 BEEZ
                서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
              </p>
              <p>
                BEEZ 서비스를 이용하시거나 BEEZ 서비스 회원으로 가입하실 경우
                여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로,
                잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
              </p>
              <p>
                BEEZ는 소상공인과 소비자의 거래 서비스를 제공하고 여러분의
                생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.
                여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해
                각양각색의 서비스를 자유롭게 이용하실 수 있으며, 개별 서비스들의
                구체적인 내용은 각 서비스 상의 안내, 공지사항, 웹고객센터(이하
                ‘고객센터’) 도움말 등에서 쉽게 확인하실 수 있습니다.
              </p>
              <p>회원으로 가입하셔야 BEEZ 서비스를 이용할 수 있습니다.</p>
              <p>
                여러분은 본 약관을 읽고 동의하신 후 회원 가입을 신청하실 수
                있으며, BEEZ는 이에 대한 승낙을 통해 회원 가입 절차를 완료하고
                여러분께 서비스 이용 계정(이하 ‘계정’)을 부여합니다. 계정이란
                회원이 서비스에 로그인한 이후 이용하는 각종 서비스 이용 이력을
                회원 별로 관리하기 위해 설정한 회원 식별 단위를 말합니다. 회원은
                자신의 계정을 통해 좀더 다양한 서비스를 보다 편리하게 이용할 수
                있습니다.
              </p>
            </ul>
          </b-modal>
          <b-modal id="modal-2" title="개인정보 취급 위탁 동의설명">
            <ul class="my-4">
              <a>
                개인정보보호법에 따라 BEEZ에 회원가입 신청하시는 분께 수집하는
                개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및
                이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을
                안내를 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.</a
              >
            </ul>

            <p>
              1. 수집하는 개인정보 이용자가 서비스를 이용하기 위해 회원가입을 할
              경우, BEEZ는 서비스 이용을 위해 필요한 최소한의 개인정보를
              수집합니다. 회원가입 시점에 BEEZ가 이용자로부터 수집하는
              개인정보는 아래와 같습니다.
            </p>
            <p>
              - 회원 가입 시에 ‘이메일, 비밀번호, 이름, 휴대전화번호’를
              필수항목으로 수집합니다. 서비스 이용 과정에서 이용자로부터
              수집하는 개인정보는 아래와 같습니다. BEEZ 내의 개별 서비스 이용,
              이벤트 응모 및 경품 신청 과정에서 해당 서비스의 이용자에 한해 추가
              개인정보 수집이 발생할 수 있습니다. 추가로 개인정보를 수집할
              경우에는 해당 개인정보 수집 시점에서 이용자에게 ‘수집하는 개인정보
              항목, 개인정보의 수집 및 이용목적, 개인정보의 보관기간’에 대해
              안내 드리고 동의를 받습니다. 서비스 이용 과정에서 IP 주소, 쿠키,
              서비스 이용 기록, 기기정보, 위치정보가 생성되어 수집될 수
              있습니다.
            </p>
            <p>
              1) 서비스이용 과정에서 이용자에 관한 정보를 자동화된 방법으로
              생성하여 이를 저장(수집)하거나, 이용자 기기의 고유한 정보를 원래의
              값을 확인하지 못 하도록 안전하게 변환하여 수집합니다. 서비스 이용
              과정에서 위치정보가 수집될 수 있으며, BEEZ에서 제공하는 위치기반
              서비스에 대해서는'BEEZ 위치정보 이용약관'에서 자세하게 규정하고
              있습니다. 이와 같이 수집된 정보는 개인정보와의 연계 여부 등에 따라
              개인정보에 해당할 수 있고, 개인정보에 해당하지 않을 수도 있습니다.
            </p>
            <p>
              2. 수집한 개인정보의 이용 BEEZ 및 BEEZ 관련 제반 서비스(모바일
              웹/앱 포함)의 회원관리, 서비스 개발・제공 및 향상, 안전한 인터넷
              이용환경 구축 등 아래의 목적으로만 개인정보를 이용합니다.
            </p>
            <p>
              - 회원 가입 의사의 확인, 연령 확인 및 법정대리인 동의 진행, 이용자
              및 법정대리인의 본인 확인, 이용자 식별, 회원탈퇴 의사의 확인 등
              회원관리를 위하여 개인정보를 이용합니다.
            </p>
            <p>
              - 콘텐츠 등 기존 서비스 제공(광고 포함)에 더하여, 인구통계학적
              분석, 서비스 방문 및 이용기록의 분석, 개인정보 및 관심에 기반한
              이용자간 관계의 형성, 지인 및 관심사 등에 기반한 맞춤형 서비스
              제공 등 신규 서비스 요소의 발굴 및 기존 서비스 개선 등을 위하여
              개인정보를 이용합니다.
            </p>
            <p>
              - 법령 및 BEEZ 이용약관을 위반하는 회원에 대한 이용 제한 조치,
              부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는
              행위에 대한 방지 및 제재, 계정도용 및 부정거래 방지, 약관 개정
              등의 고지사항 전달, 분쟁조정을 위한 기록 보존, 민원처리 등 이용자
              보호 및 서비스 운영을 위하여 개인정보를 이용합니다.
            </p>
            <p>
              - 유료 서비스 제공에 따르는 본인인증, 구매 및 요금 결제를 위하여
              개인정보를 이용합니다. - 이벤트 정보 및 참여기회 제공, 광고성 정보
              제공 등 마케팅 및 프로모션 목적으로 개인정보를 이용합니다.
            </p>
            <p>
              - 서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한 통계,
              서비스 분석 및 통계에 따른 맞춤 서비스 제공 및 광고 게재 등에
              개인정보를 이용합니다.
            </p>
            <p>
              - 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는
              서비스 이용환경 구축을 위해 개인정보를 이용합니다.
            </p>
            <p>
              개인정보 수집 및 이용 동의를 거부할 권리 이용자는 개인정보의 수집
              및 이용 동의를 거부할 권리가 있습니다. 회원가입 시 수집하는
              최소한의 개인정보, 즉, 필수 항목에 대한 수집 및 이용 동의를
              거부하실 경우, 회원가입이 어려울 수 있습니다.
            </p>
          </b-modal>
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

      user_name: "",
      email: "",
      password: "",
      phone: "",
      password2: "",
      bank_name: null,
      account_number: "",

      //동의확인
      status: "동의 안함",
      status2: "동의 안함",
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
      if (!this.passwordValidError || !this.passwordCheckValidError) {
        alert("회원가입 입력란을 확인해주세요.");
        return;
      }
      this.$router.push("/");
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
  margin-top: 10%;
  border-radius: 17px;
  font-weight: 600;
  font-size: 19px;
  font-family: "Cafe24Ssurround";
}
/* -------------------------------------동의란---------------------------- */
.Agree_Checkbox {
  width: 90%;
  margin: 0 auto;
  margin-top: 6%;
  border-bottom: 1px solid #f8960485;
}
#checkbox-1 {
  margin-bottom: 4%;
}
#agreement_point {
  color: rgb(19, 110, 38);
  font-size: 13px;
  font-weight: 500;
}

#Store_modal_btn,
#Store_modal_btn2 {
  padding: 1% 3%;
  font-size: 11px;
  background-color: rgb(180, 183, 199);
  border-color: rgb(180, 183, 199);
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #f89604;
}

#signUp .custom-control {
  font-family: "KoPubWorldDotumLight";
}
</style>
