import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import elementResizeDetectorMaker from "element-resize-detector";

const erd = elementResizeDetectorMaker({ strategy: "scroll" });

export default defineComponent({
  name: "WithDimensions",

  components: {},

  props: {},

  setup(props, { slots }) {
    const $el = ref(null);
    const offset = reactive({ width: 0, height: 0 });
    onMounted(() => {
      erd.listenTo($el.value, (el: HTMLElement) => {
        offset.width = el.offsetWidth;
        offset.height = el.offsetHeight;
      });
    });

    return () => {
      return slots.default({ $el, offset });
    };
  },
});
