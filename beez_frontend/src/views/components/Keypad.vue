<template>
  <div class="keypad">
    <div class="text_pass">보안 비밀번호</div>
    <input type="password" :value="value" @click.stop="show = true" readonly />
    <VueNumericKeypad
      :value.sync="value"
      :show.sync="show"
      :options="options"
    />
  </div>
</template>

<script>
import VueNumericKeypad from "vue-numeric-keypad";

export default {
  name: "App",
  components: {
    VueNumericKeypad,
  },
  data() {
    return {
      value: "",
      show: 0,
      options: {
        keyRandomize: true,
        randomizeClick: true,
        fixDeleteKey: false,
      },
    };
  },
  created() {
    document.addEventListener(
      "click",
      function() {
        this.show = 0;
      }.bind(this)
    );
  },
};
</script>
<style>
/*-----------------폰트, @media---------------------------- */
@font-face {
  font-family: "BCcardB";
  src: url("../../fonts/BCcardL.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
}
.keypad {
  font-family: BCcardB;
}
.text_pass {
  font-size: 30px;
}
</style>
