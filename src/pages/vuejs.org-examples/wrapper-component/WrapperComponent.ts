import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
  toRefs,
} from "vue";
import { Select2Componet } from "./helpers";

export default defineComponent({
  name: "WrapperComponent",

  components: {
    select2: Select2Componet,
  },

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    const data = reactive({
      selected: 2,
      options: [
        { id: 1, text: "Hello" },
        { id: 2, text: "World" },
      ],
    });

    onMounted(() => {});

    return {
      ...toRefs(data),
    };
  },
});
