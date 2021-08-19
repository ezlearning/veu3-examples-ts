import {
  inject,
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
  getCurrentInstance,
} from "vue";

export default defineComponent({
  name: "AccordionItem",

  components: {},

  props: {
    itemId: [String, Number] as PropType<string | number>,
  },

  setup(props) {
    const instance = getCurrentInstance();
    const uid = instance.uid;
    console.log(uid);
    const state = inject<{ activeItem: string | number }>("accordionListState");

    const active = computed(() => state.activeItem === props.itemId);
    onMounted(() => {});

    const toggle = () => {
      if (active.value) {
        state.activeItem = null;
      } else {
        state.activeItem = props.itemId;
      }
    };

    return {
      toggle,
      active,
    };
  },
});
