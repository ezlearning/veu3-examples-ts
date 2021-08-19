import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";
import { Contact } from "../types";

export default defineComponent({
  name: "ContactListV1",

  components: {},

  props: {
    pseudoSlot: Function as PropType<(contact: Contact) => string>,
  },

  setup() {
    // data
    const contacts = ref<Contact[]>([]);
    onMounted(() => {});

    // created
    fetch("/data/contacts.json")
      .then((resposne) => resposne.json())
      .then((data: Contact[]) => (contacts.value = data));

    return { contacts };
  },
});
