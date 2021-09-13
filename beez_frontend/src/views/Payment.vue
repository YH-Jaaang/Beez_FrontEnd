<template>
  <div>
    <b-card id="card_qr">
      <div>
        <b-button v-b-modal.modal-1>Launch demo modal</b-button>

        <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
          <vue-qr-reader
            v-if="show"
            v-on:code-scanned="codeScanned"
            v-on:error-captured="errorCaptured"
            :stop-on-scanned="true"
            :draw-on-found="true"
            :responsive="false"
          />
          <div style="color:#76512c; font-size:5px">
            {{ qrsuccess }}
          </div>
        </b-modal>
      </div>

      <div class="title text-center">
        <span>
          <FontAwesomeIcon :icon="faQrcode" style="color:#76512c" size="lg" />
          QR을 찍어주세요
        </span>
      </div>
      <div class="camera">
        <!-- <vue-qr-reader
          v-if="show"
          v-on:code-scanned="codeScanned"
          v-on:error-captured="errorCaptured"
          :stop-on-scanned="true"
          :draw-on-found="true"
          :responsive="false"
        /> -->
        <div style="color:#76512c; font-size:5px">
          {{ scanned }}
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import VueQrReader from "../components/VueQrReader.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "app",
  components: {
    VueQrReader,
    FontAwesomeIcon,
  },
  data() {
    return {
      errorMessage: "",
      scanned: "",
      qrsuccess: "",
      show: true,

      //아이콘
      faQrcode,
    };
  },
  methods: {
    codeScanned(code) {
      this.scanned = code;
      this.qrsuccess = "QR코드 인식 성공!";
    },
    errorCaptured(error) {
      switch (error.name) {
        case "NotAllowedError":
          this.errorMessage = "Camera permission denied.";
          break;
        case "NotFoundError":
          this.errorMessage = "There is no connected camera.";
          break;
        case "NotSupportedError":
          this.errorMessage =
            "Seems like this page is served in non-secure context.";
          break;
        case "NotReadableError":
          this.errorMessage =
            "Couldn't access your camera. Is it already in use?";
          break;
        case "OverconstrainedError":
          this.errorMessage = "Constraints don't match any installed camera.";
          break;
        default:
          this.errorMessage = "UNKNOWN ERROR: " + error.message;
      }
      console.error(this.errorMessage);
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

#card_qr {
  font-family: BCcardB;
  background-color: #ffde02;
  /* padding: 10px 7px; */
  border-radius: 50px;
  margin: 4% 6%;
  border: 2.5px solid #76512ce3;
}

.title {
  font-size: 22px;
  font-weight: 900;
  color: #76512c;
  padding-bottom: 15px;
}
</style>
