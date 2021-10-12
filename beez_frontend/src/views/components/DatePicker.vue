<template>
  <Datepicker />
</template>

<script>
// special component - vue file

import "vue-datepicker-ui/lib/vuedatepickerui.css";
import VueDatepickerUi from "vue-datepicker-ui";

export default {
  components: {
    Datepicker: VueDatepickerUi,
  },
};
</script>
