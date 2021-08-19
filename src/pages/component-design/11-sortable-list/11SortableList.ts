import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";
import SortableHandle from "../helpers/sortable-handle/SortableHandle";
import SortableItem from "../helpers/sortable-item/SortableItem";
import SortableList from "../helpers/sortable-list/SortableList";
import { contacts } from "./contacts";

export default defineComponent({
  name: "10SortableList",

  components: {
    SortableList: SortableList,
    SortableHandle: SortableHandle,
    SortableItem: SortableItem,
  },

  setup() {
    const sourceLink = "https://codesandbox.io/s/o98y1l735y";

    return {
      contacts: ref(contacts),
      sourceLink,
    };
  },
});
