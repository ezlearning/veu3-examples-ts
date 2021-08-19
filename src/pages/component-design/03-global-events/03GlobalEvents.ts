import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import AnnouncementModal from "../helpers/announcement-modal/AnnouncementModal.vue";
import SourceLink from "../helpers/source-link/SourceLink.vue";

export default defineComponent({
  name: "03GlobalEvents",

  components: {
    AnnouncementModal,
    SourceLink,
  },

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    const sourceLink = "https://codesandbox.io/s/z0mx3w9km";
    const modalOpen = ref(false);
    onMounted(() => {});

    return {
      sourceLink,
      modalOpen,
    };
  },
});
