<template>
  <Datepicker
    class="date"
    v-model="selectedDate"
    lang="ko"
    v-bind="sendDate(selectedDate)"
    placeholder="마지막 날짜"
    position="right"
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
      this.$emit("date2", Math.floor(new Date(selectedDate) / 1000) + 86399);
    },
  },
};
</script>
<style>
.v-calendar .input-field input {
  padding-left: 40px;
  padding-right: 0px;
}
</style>
