import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
  toRefs,
} from "vue";

// @ts-ignore
import dynamics from "dynamics.js";

export default defineComponent({
  name: "DraggableHeaderView",

  components: {},

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    const data = reactive({
      dragging: false,
      c: { x: 160, y: 160 },
      start: { x: 0, y: 0 },
    });

    // computed
    const headerPath = computed(() => {
      return "M0,0 L320,0 320,160" + "Q" + data.c.x + "," + data.c.y + " 0,160";
    });

    const contentPosition = computed(() => {
      const dy = data.c.y - 160;
      const dampen = dy > 0 ? 2 : 4;
      return {
        transform: "translate3d(0," + dy / dampen + "px,0)",
      };
    });

    // methods
    function startDrag(event: MouseEvent | TouchEvent | Touch) {
      if (event instanceof TouchEvent) {
        event = event.changedTouches[0];
      }

      data.dragging = true;
      data.start.x = event.pageX;
      data.start.y = event.pageY;
    }

    function onDrag(event: MouseEvent | TouchEvent | Touch) {
      if (event instanceof TouchEvent) {
        event = event.changedTouches[0];
      }

      if (data.dragging) {
        data.c.x = 160 + (event.pageX - data.start.x);
        // dampen vertical drag by a factor
        const dy = event.pageY - data.start.y;
        const dampen = dy > 0 ? 1.5 : 4;
        data.c.y = 160 + dy / dampen;
      }
    }

    function stopDrag() {
      if (data.dragging) {
        data.dragging = false;
        dynamics.animate(
          data.c,
          {
            x: 160,
            y: 160,
          },
          {
            type: dynamics.spring,
            duration: 700,
            friction: 280,
          }
        );
      }
    }

    onMounted(() => {});

    return {
      ...toRefs(data),
      headerPath,
      contentPosition,
      startDrag,
      onDrag,
      stopDrag,
    };
  },
});
