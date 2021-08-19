import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
  toRefs,
} from "vue";
import { states } from "./helpers/data";
import { IStateItem } from "./helpers/models";
import Polygraph from "./helpers/polygraph/Polygraph.vue";

export default defineComponent({
  name: "SvgGraph",

  components: {
    Polygraph,
  },

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    // data
    const data = reactive({
      newLabel: "",
      stats: states,
    });

    onMounted(() => {});

    // methods
    function add(event: Event) {
      event.preventDefault();
      if (!data.newLabel) {
        return;
      }

      data.stats.push({
        label: data.newLabel,
        value: 100,
      });

      data.newLabel = "";
    }

    function remove(stat: IStateItem) {
      if (data.stats.length > 3) {
        data.stats.splice(data.stats.indexOf(stat), 1);
      } else {
        alert("Can't delete more");
      }
    }

    return {
      ...toRefs(data),
      add,
      remove,
    };
  },
});
