import { defineComponent } from "vue";

import RenderlessTagInput, {
  props,
  emits,
  UPDATE_TAGS,
} from "../renderless-tag-input/RenderlessTagInput";

export default defineComponent({
  name: "InlineTagInput",
  components: {
    RenderlessTagInput,
  },
  emits,
  props,
  setup(props, { emit }) {
    console.log("props", props);
    const bubbleTags = (newTags: string[]) => {
      emit(UPDATE_TAGS, newTags);
    };

    return { bubbleTags };
  },
});
