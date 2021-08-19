import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import DatePicker from "../helpers/date-picker/DatePicker.vue";
import SourceLink from "../helpers/source-link/SourceLink.vue";

export default defineComponent({
  name: "02WrappingLibrary",

  components: {
    DatePicker,
    SourceLink,
  },

  setup() {
    const sourceLink = "https://codesandbox.io/s/n4qolyr42m";

    const date = ref("2018-04-12");

    onMounted(() => {});

    return {
      sourceLink,
      date,
    };
  },
});
