import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

const UPDATE_TAGS = "update:tags";

export default defineComponent({
  name: "TagInput",

  props: {
    tags: Array as PropType<string[]>,
  },

  emits: [UPDATE_TAGS],

  setup(props, { emit }) {
    // data
    const input = ref("");

    // computed
    const newTag = computed(() => input.value.trim());

    // methods
    const removeTag = (tag: string) => {
      emit(
        UPDATE_TAGS,
        props.tags.filter((t) => t !== tag)
      );
    };

    const clearInput = () => {
      input.value = "";
    };

    const addTag = () => {
      if (newTag.value.length === 0 || props.tags.includes(newTag.value)) {
        return;
      }

      emit(UPDATE_TAGS, [...props.tags, newTag.value]);
      clearInput();
    };

    const handleBackspace = (e: KeyboardEvent) => {
      if (newTag.value.length === 0) {
        emit(UPDATE_TAGS, props.tags.slice(0, -1));
      }
    };

    return {
      input,
      removeTag,
      addTag,
      handleBackspace,
    };
  },
});
