<template>
  <div class="home">
    <button v-on:click="test">{{ title }}</button>
    <input v-model="get_input" placeholder="입력하세요" />
    <button @click="testPost">post보내기</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "버튼",
      done: false,
      get_input: null,
      password: null,
      // input: "wow",
      // options: [
      //   { v: "S", t: "Seoul", e: "dd1" },
      //   { v: "b", t: "Busan", e: "dd2" },
      //   { v: "S", t: "Suwon", e: "dd3" },
      // ],
      // region: "b",
      tableShow: true,
    };
  },
  methods: {
    async test() {
      var vm = this;
      // Make a request for a user with a given ID
      await axios
        .post("http://localhost:9091/test/products")
        .then((res) => {
          // handle success
          //console.log(res.data[1].imageUrl);
          vm.title = res.data[1].phone;
        })
        .catch((err) => {
          // handle error
          console.log(err);
        })
        .then(() => {
          // always executed
        });
    },
    testPost() {
      axios
        .get("http://localhost:9091/test/hello", {
          params: {
            input: this.get_input,
            password: "dd",
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
