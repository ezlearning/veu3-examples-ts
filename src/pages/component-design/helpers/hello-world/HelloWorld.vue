<script lang="ts">
import {
  defineComponent,
  resolveComponent,
  h,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import TButton from "../t-button/TButton.vue";
import ToggleInput from "../toggle-input/ToggleInput.vue";

// :TODO: get rid of the warning

export default defineComponent({
  name: "HelloWorld",

  components: {
    TButton,
    ToggleInput,
  },

  props: {
    tag: String,
  },

  setup(props, { slots }) {
    const toggled = ref(true);
    onMounted(() => {});

    return () =>
      h(
        resolveComponent(props.tag), // tag name
        {
          class: "btn btn-blue text-xl text-green-600  font-bold",
          modelValue: toggled.value,
          "onUpdate:modelValue": (value: boolean) => (toggled.value = value),
        },
        slots.default ? slots.default() : ""
      );
  },
});
</script>
