import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "ToggleInput",

  components: {},

  props: {
    modelValue: {
      type: Boolean,
      defaul: false,
    },
  },

  setup(props, { emit }) {
    onMounted(() => {});

    function toggle() {
      emit("update:modelValue", !props.modelValue);
    }

    return {
      toggle,
    };
  },
});
