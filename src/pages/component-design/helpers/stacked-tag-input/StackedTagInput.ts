import { defineComponent } from "vue";

import RenderlessTagInput, {
  UPDATE_TAGS,
  props,
  emits,
} from "../renderless-tag-input/RenderlessTagInput";

export default defineComponent({
  name: "StackedTagInput",
  components: {
    RenderlessTagInput,
  },
  emits,
  props,
  setup(_, { emit }) {
    const bubbleTags = (newTags: string[]) => {
      emit(UPDATE_TAGS, newTags);
    };

    return { bubbleTags };
  },
});
