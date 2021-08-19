import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";
import Modal from "./helpers/modal/Modal.vue";

export default defineComponent({
  name: "ModalComponent",

  components: {
    Modal,
  },

  props: {},

  setup() {
    const showModal = ref(false);

    onMounted(() => {});

    return {
      showModal,
    };
  },
});
