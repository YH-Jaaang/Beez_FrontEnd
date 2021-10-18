<template>
  <Datepicker
    class="date"
    v-model="selectedDate"
    lang="ko"
    v-bind="sendDate(selectedDate)"
    placeholder="시작날짜"
  />
</template>

<script>
// special component - vue file

import "vue-datepicker-ui/lib/vuedatepickerui.css";
import VueDatepickerUi from "vue-datepicker-ui";

export default {
  components: {
    Datepicker: VueDatepickerUi,
  },
  data() {
    return {
      selectedDate: "",
    };
  },
  methods: {
    sendDate(selectedDate) {
      this.$emit("date1", Math.floor(new Date(selectedDate) / 1000));
    },
  },
};
</script>
<style>
.v-calendar .input-field input {
  padding-left: 40px;
  padding-right: 0px;
  text-align: center;
}
</style>
