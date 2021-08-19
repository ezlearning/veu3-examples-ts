import { defineComponent, PropType } from "vue";
import { Contact } from "../types";

export default defineComponent({
  name: "ContactListV3",

  components: {},

  props: {
    contacts: Array as PropType<Contact[]>,
  },
});
