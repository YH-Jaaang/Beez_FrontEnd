<template>
  <div class="correct">
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismiss-count-down="countDownChanged"
    >
      {{ this.$store.state.correctMessage }}이 완료되었습니다.{{
        dismissCountDown
      }}
      seconds...
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "correct",
  data() {
    return { dismissCountDown: 10 };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
  },
};
</script>
<style>
.correct {
  top: 500px;
  visibility: hidden;
}
</style>
