import { defineComponent, ref, PropType, onMounted } from "vue";

import ProfileCard from "../helpers/profile-card/ProfileCard.vue";
import WithDimensions from "../helpers/with-dimensions/WithDimensions";

export default defineComponent({
  name: "09ElementQuery",

  components: {
    WithDimensions,
    ProfileCard,
  },

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    const sourceLink = ref("https://codesandbox.io/s/20r8wnx44r");
    onMounted(() => {});

    return { sourceLink };
  },
});
