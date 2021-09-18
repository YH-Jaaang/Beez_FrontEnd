<template>
  <div id="App">
    <div>
      <div class="span-blank">빈공간</div>
      <div class="span-blank">빈공간</div>
      <div class="li_btn text-center">
        <b-button id="review_btn" href="/Main" @click="setCookies">
          지역주민<br />시작하기
        </b-button>
        <b-button id="review_btn" href="/" @click="setBusinessCookies">
          소상공인<br />시작하기
        </b-button>
      </div>
      <div class="span-blank">빈공간</div>
      <div class="span-blank">빈공간</div>
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
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
export default {
  components: {},
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
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
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
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
</style>
