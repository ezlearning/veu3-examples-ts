import { defineComponent, PropType } from "vue";

import ModalDialog from "../modal-dialog/ModalDialog.vue";
export default defineComponent({
  name: "ConfirmDeleteModal",
  components: {
    ModalDialog,
  },
  emits: ["close"],
  props: {
    show: Boolean,
    accountId: [String, Number] as PropType<string | number>,
  },

  setup(props, { emit }) {
    function cancel() {
      emit("close");
    }

    function confirmDelete() {
      console.log(`Deleting account ${props.accountId}...`);
      emit("close");
    }

    return {
      cancel,
      confirmDelete,
    };
  },
});
