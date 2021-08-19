import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

export default defineComponent({
  name: "TButton",

  components: {},

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    onMounted(() => {});

    return {};
  },
});
