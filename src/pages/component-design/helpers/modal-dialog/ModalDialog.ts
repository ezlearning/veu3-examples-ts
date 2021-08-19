import {
  defineComponent,
  watch,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
  onUnmounted,
} from "vue";

export default defineComponent({
  name: "ModalDialog",
  emits: ["close"],

  components: {},

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    onMounted(() => {});

    const cancel = () => emit("close");

    const escapeHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape" && props.show) {
        cancel();
      }
    };

    onMounted(() => {
      document.addEventListener("keydown", escapeHandler);
    });

    onUnmounted(() => {
      document.removeEventListener("keydown", escapeHandler);
    });

    watch(
      () => props.show,
      (show) => {
        if (show) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
      },
      { immediate: true }
    );

    return {};
  },
});
