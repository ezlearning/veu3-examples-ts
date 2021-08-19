import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import SourceLink from "../helpers/source-link/SourceLink.vue";
import ContactListV1 from "../helpers/contact-list-v1/ContactListV1.vue";
import { Contact } from "../helpers/types";

export default defineComponent({
  name: "05ScopedSlots",

  components: {
    ContactListV1,
    SourceLink,
  },

  setup() {
    const sourceLink = "https://codesandbox.io/s/nwz1xpkyl0";
    onMounted(() => {});

    const pseudoSlot = (contact: Contact) => {
      console.log("contact", contact);
      return contact.name.first;
    };

    return {
      sourceLink,
      pseudoSlot,
    };
  },
});
