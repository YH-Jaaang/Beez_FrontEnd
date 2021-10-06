<template>
  <div class="fail">
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="danger"
      @dismiss-count-down="countDownChanged"
    >
      {{ this.$store.state.failMessage }}이 실패하였습니다. 다시 시도해주세요{{
        dismissCountDown
      }}
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "fail",
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
