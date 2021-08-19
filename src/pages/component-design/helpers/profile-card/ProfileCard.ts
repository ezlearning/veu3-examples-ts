import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import WithDimensions from "../with-dimensions/WithDimensions";

export default defineComponent({
  name: "ProfileCard",

  components: {
    WithDimensions,
  },

  props: {},

  setup() {
    onMounted(() => {});

    return {};
  },
});
