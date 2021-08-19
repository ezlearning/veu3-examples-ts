import { defineComponent } from "vue";

import ModalDialog from "../modal-dialog/ModalDialog.vue";

export default defineComponent({
  name: "AnnouncementModal",

  components: {
    ModalDialog,
  },

  emits: ["close"],

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const dismiss = () => emit("close");

    return {
      dismiss,
    };
  },
});
