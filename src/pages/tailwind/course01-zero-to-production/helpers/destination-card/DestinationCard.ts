import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";
import { Destination } from "../models";

export default defineComponent({
  name: "DestinationCard",

  components: {},

  props: {
    destination: {
      type: Object as PropType<Destination>,
      required: true,
    },
  },

  setup() {
    onMounted(() => {});

    return {};
  },
});
