import {
  defineComponent,
  ref,
  provide,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

// reference:
// https://v3.vuejs.org/guide/composition-api-provide-inject.html

export default defineComponent({
  name: "AccordionList",

  components: {},

  props: {},

  setup() {
    const state = reactive({
      activeItem: null as number | string,
    });

    provide("accordionListState", state);

    return {};
  },
});
