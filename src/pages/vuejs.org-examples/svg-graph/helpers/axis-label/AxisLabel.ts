import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";
import { valueToPoint } from "../helpers";
import { IStateItem } from "../models";

export default defineComponent({
  name: "AxisLabel",

  components: {},

  props: {
    stat: Object as PropType<IStateItem>,
    index: Number,
    total: Number,
  },

  setup(props) {
    onMounted(() => {});

    const point = computed(() => {
      return valueToPoint(+props.stat.value + 10, props.index, props.total);
    });

    return {
      point,
    };
  },
});
