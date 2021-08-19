import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";

export default defineComponent({
  name: "DatePicker",

  components: {},

  props: {
    value: {
      type: String,
      defaul: "",
    },
    modelValue: {
      type: String,
      defaul: "",
    },
    format: {
      type: String,
      default: "YYYY-MM-DD",
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    const input = ref<HTMLInputElement>(null);

    onMounted(() => {
      const picker = new Pikaday({
        field: input.value,
        format: props.format,
        onSelect: function (date) {
          console.log("selected", picker.toString());
        },
        toString(date, format) {
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = date.getFullYear();
          return `${year}-${month}-${day}`;
        },
        parse(dateString, format) {
          const parts = dateString.split("-");
          const year = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10) - 1;
          const day = parseInt(parts[2], 10);
          return new Date(year, month, day);
        },
        ...props.options,
      });
    });

    return {
      input,
    };
  },
});
