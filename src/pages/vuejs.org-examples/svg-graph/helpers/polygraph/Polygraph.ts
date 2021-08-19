import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";
import AxisLabel from "../axis-label/AxisLabel.vue";
import { valueToPoint } from "../helpers";
import { IStateItem } from "../models";

export default defineComponent({
  name: "Polygraph",

  components: {
    AxisLabel,
  },

  props: {
    stats: Array as PropType<IStateItem[]>,
  },

  setup(props) {
    onMounted(() => {});

    // computed

    // a computed property for the polygon's points
    const points = computed(() => {
      const total = props.stats.length;
      return props.stats
        .map((stat, i) => {
          const point = valueToPoint(stat.value, i, total);
          return point.x + ", " + point.y;
        })
        .join(" ");
    });

    return {
      points,
    };
  },
});
