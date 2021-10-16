<template>
  <Datepicker range v-model="selectedDate" />
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
      selectedDate: [
        new Date(),
        new Date(new Date().getTime() + 9 * 24 * 60 * 60 * 1000),
      ],
      disabledEndDate: {
        to: new Date(),
        from: new Date(),
      },
    };
  },
};
</script>
<style></style>
