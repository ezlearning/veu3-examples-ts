<script lang="ts">
import {
  h,
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";
import { Contact } from "../types";

export default defineComponent({
  name: "ContactListV2",

  components: {},

  props: {},

  setup() {
    // data
    const contacts = ref<Contact[]>([]);
    onMounted(() => {});

    // created
    fetch("/data/contacts.json")
      .then((resposne) => resposne.json())
      .then((data: Contact[]) => (contacts.value = data));

    // render
    return () => {
      const list = contacts.value.map((c) =>
        h("li", `${c.name.first} ${c.name.last}`)
      );

      const h1 = h(
        "h1",
        {
          class: "font-bold text-xl",
        },
        "Your Contacts"
      );
      const ol = h("ol", list);

      return h("div", [h1, ol]);
    };
  },
});
</script>
