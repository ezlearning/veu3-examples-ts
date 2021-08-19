import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import TagInput from "../helpers/tag-input/TagInput.vue";
import InlineTagInput from "../helpers/inline-tag-input/InlineTagInput.vue";
import StackedTagInput from "../helpers/stacked-tag-input/StackedTagInput.vue";

export default defineComponent({
  name: "17RenderlessComponents",

  components: {
    TagInput,
    InlineTagInput,
    StackedTagInput,
  },

  props: {},

  setup() {
    // data
    const sourceLink = ref("https://codesandbox.io/s/5z5056yoq4");
    const tags = ref(["awesome", "excellent", "amazing"]);

    return { sourceLink, tags };
  },
});
