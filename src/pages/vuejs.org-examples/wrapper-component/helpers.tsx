import { defineComponent, ref, PropType, onMounted } from "vue";

// :TODO: vite bug
// import $ from "jquery";
// import "select2";

export interface IOption {
  id: number;
  text: string;
}

export const Select2Componet = defineComponent({
  name: "Select2Componet",
  props: {
    options: Object as PropType<IOption[]>,
    modelValue: Number,
  },

  setup(props, { emit, slots }) {
    const root = ref<HTMLSelectElement>(null);
    onMounted(() => {
      $(root.value)
        // init select2
        .select2({ data: props.options })
        .val(props.modelValue)
        .trigger("change")
        // emit event on change.
        .on("change", function (event) {
          emit("update:modelValue", event.target.value);
        });
    });

    return () => (
      <select style="min-width: 300px;" ref={root}>
        {slots.default()}
      </select>
    );
  },
});
