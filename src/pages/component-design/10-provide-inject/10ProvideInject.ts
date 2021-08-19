import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import AccordionList from "../helpers/accordion-list/AccordionList.vue";
import AccordionItem from "../helpers/accordion-item/AccordionItem.vue";

export default defineComponent({
  name: "09ProvideInject",

  components: {
    AccordionList,
    AccordionItem,
  },

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    const sourceLink = "https://codesandbox.io/s/jl6pz69ox3";
    onMounted(() => {});

    return { sourceLink };
  },
});
