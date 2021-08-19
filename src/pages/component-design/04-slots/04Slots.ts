import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import TButton from "../helpers/t-button/TButton.vue";
import MediaCard from "../helpers/media-card/MediaCard.vue";
import SourceLink from "../helpers/source-link/SourceLink.vue";

export default defineComponent({
  name: "04Slots",

  components: {
    TButton,
    MediaCard,
    SourceLink,
  },

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    // Lesson 9. Native-Style Buttons Using Slots and Class Merging
    const sourceLink = "https://codesandbox.io/s/8x54ow4vl9";
    onMounted(() => {});

    return {
      sourceLink,
    };
  },
});
