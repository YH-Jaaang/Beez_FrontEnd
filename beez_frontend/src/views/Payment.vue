<template>
  <div id="app">
    <div class="header">
      <div class="white_bg">
        <div id="banner1" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container-fluid">
                <div class="carousel-caption" id="center-align">
                  <div class="col-md-12 col-lg-12">
                    <div class="text-bg">
                      <div class="div-align">
                        <span>QR을 찍어주세요</span>
                        <vue-qr-reader
                          v-if="show"
                          v-on:code-scanned="codeScanned"
                          v-on:error-captured="errorCaptured"
                          :stop-on-scanned="true"
                          :draw-on-found="true"
                          :responsive="false"
                        />
                        <div style="color:black; font-size:5px">
                          {{ scanned }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
import VueQrReader from "../components/VueQrReader.vue";

export default {
  name: "app",
  components: {
    VueQrReader,
  },
  data() {
    return {
      errorMessage: "",
      scanned: "",
      show: true,
    };
  },
  methods: {
    codeScanned(code) {
      this.scanned = code;
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
