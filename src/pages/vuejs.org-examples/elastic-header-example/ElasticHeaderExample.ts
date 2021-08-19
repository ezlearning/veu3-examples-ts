import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";
import DraggableHeaderView from "./helpers/draggable-header-view/DraggableHeaderView.vue";

export default defineComponent({
  name: "ElasticHeaderExample",

  components: {
    DraggableHeaderView,
  },

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    onMounted(() => {});

    return {};
  },
});
