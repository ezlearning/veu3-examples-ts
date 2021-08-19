import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import FirstWorkflow from "./helpers/first-workflow/FirstWorkflow.vue";
import DestinationCard from "./helpers/destination-card/DestinationCard.vue";
import popularDestinations from "./helpers/data/popularDestinations";

export default defineComponent({
  name: "Course01ZeroToProduction",

  components: {
    FirstWorkflow,
    DestinationCard,
  },

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    onMounted(() => {});

    return {
      popularDestinations,
    };
  },
});
