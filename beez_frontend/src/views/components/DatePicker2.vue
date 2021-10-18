<template>
  <Datepicker v-model="selectedDate" lang="ko" />
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
      selectedDate: [new Date()],
      disabledEndDate: {
        to: new Date(),
        from: new Date(),
      },
    };
  },
};
</script>
<style></style>
