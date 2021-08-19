import {
  defineComponent,
  ref,
  PropType,
  onMounted,
  onBeforeUnmount,
} from "vue";

export default defineComponent({
  name: "OnClickOutside",

  props: {
    do: Function as PropType<() => void>,
  },

  setup(props, { slots }) {
    const $el = ref<HTMLDivElement>(null);

    const listener = (event: MouseEvent) => {
      if (
        event.target === $el.value ||
        $el.value.contains(event.target as Element)
      ) {
        return;
      }

      props.do();
    };

    onMounted(() => document.addEventListener("click", listener));
    onBeforeUnmount(() => document.removeEventListener("click", listener));

    return () => {
      return slots.default({ $el });
    };
  },
});
