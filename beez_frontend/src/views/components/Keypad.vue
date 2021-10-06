<template>
  <div class="keypad" @click.stop="show = true">
    <div class="text_pass">보안 비밀번호</div>
    <span v-if="value.length <= 5">
      <span v-for="values in value" :key="values">
        <input class="input_pass" type="text" :value="values" readonly />
      </span>
    </span>
    <span v-else @click.stop="show = false">
      <span v-for="i in 6" :key="i">
        <input class="input_pass" type="text" :value="value[i - 1]" readonly />
      </span>
    </span>
    <VueNumericKeypad
      :value.sync="value"
      :show.sync="this.show"
      :options="this.options"
    />
  </div>
</template>

<script>
import VueNumericKeypad from "vue-numeric-keypad";

export default {
  name: "keypad",
  components: {
    VueNumericKeypad,
  },
  data() {
    return {
      wow: "",
      value: "",
      show: true,
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
  watch: {
    always: function() {
      console.log("d");
    },
  },

  methods: {
    onSubmit() {
      alert("dd");
      this.wow += this.value;
      console.log(this.wow);
    },
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
  text-align: center;
}
.text_pass {
  top: 30%;
  font-size: 35px;
  color: #fff;
}
</style>
