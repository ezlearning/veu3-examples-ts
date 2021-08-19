import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import ConfirmDeleteModal from "../confirm-delete-modal/ConfirmDeleteModal.vue";

export default defineComponent({
  name: "DeleteAccountButton",

  components: {
    ConfirmDeleteModal,
  },

  props: {
    accountId: [String, Number] as PropType<string | number>,
  },

  setup() {
    const confirmDeleteModalOpen = ref(false);
    onMounted(() => {});

    return { confirmDeleteModalOpen };
  },
});
