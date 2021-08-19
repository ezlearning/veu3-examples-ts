import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";
import UserSettingsForm from "../helpers/user-settings-form/UserSettingsForm.vue";
import AnnouncementModal from "../helpers/announcement-modal/AnnouncementModal.vue";
import SourceLink from "../helpers/source-link/SourceLink.vue";

export default defineComponent({
  name: "01ControlledComponents",

  components: {
    UserSettingsForm,
    AnnouncementModal,
    SourceLink,
  },

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    const sourceLink = "https://codesandbox.io/s/xv1ooy9v1p";

    const showAnnouncement = ref(true);
    const confirmDeleteModalOpen = ref(false);
    const accoundId = ref("id123");

    onMounted(() => {});

    return {
      sourceLink,
      showAnnouncement,
      confirmDeleteModalOpen,
      accoundId,
    };
  },
});
