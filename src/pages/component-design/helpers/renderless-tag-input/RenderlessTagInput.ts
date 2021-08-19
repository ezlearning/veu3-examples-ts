import {
  defineComponent,
  defineProps,
  ref,
  reactive,
  defineEmits,
  PropType,
  computed,
  onMounted,
} from "vue";

export const UPDATE_TAGS = "update:tags";
export const emits = [UPDATE_TAGS];
export const props = {
  tags: {
    type: Array as PropType<string[]>,
    required: true,
  },
  removeOnBackspace: {
    tyep: Boolean,
    default: true,
  },
};

export default defineComponent({
  name: "RenderlessTagInput",

  props,
  emits,

  setup(props, { emit, slots }) {
    // data
    const input = ref("");

    // computed
    const newTag = computed(() => input.value.trim());

    // methods
    const removeTag = (tag: string) => {
      emit(
        UPDATE_TAGS,
        props.tags.filter((t: string) => t !== tag)
      );
    };

    const clearInput = () => {
      input.value = "";
    };

    const addTag = () => {
      console.log("addTag callled");
      if (newTag.value.length === 0 || props.tags.includes(newTag.value)) {
        return;
      }

      emit(UPDATE_TAGS, [...props.tags, newTag.value]);
      clearInput();
    };

    const handleBackspace = (e: KeyboardEvent) => {
      if (props.removeOnBackspace && newTag.value.length === 0) {
        emit(UPDATE_TAGS, props.tags.slice(0, -1));
      }
    };

    return () => {
      const defaultProps = {
        tags: props.tags,

        removeTag,
        addTag,

        inputProps: {
          // value
          value: input.value,

          // events
          onInput: (e: InputEvent) =>
            (input.value = (e.target as HTMLInputElement).value),
          onKeydown: (event: KeyboardEvent) => {
            if (event.key === "Backspace") {
              handleBackspace(event);
              return;
            }

            if (event.key === "Enter") {
              event.preventDefault();
              addTag();
              return;
            }
          },
        },
      };

      return slots.default(defaultProps);
    };
  },
});
