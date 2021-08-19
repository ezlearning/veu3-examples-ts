import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";
import music from "../music.svg";

export default defineComponent({
  name: "01Intro",

  components: {},

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    onMounted(() => {});

    return {
      music,
    };
  },
});
