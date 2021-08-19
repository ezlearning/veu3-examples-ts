import { ref, reactive, defineComponent, onMounted, toRefs } from "vue";
import { treeData } from "./data";
import { TreeItem } from "./helpers";

export default defineComponent({
  name: "TreeView",
  setup() {
    const data = reactive({
      treeData: treeData,
    });

    // methods
    function addItem(item: TreeItem) {
      item.children.push({ name: "new stuff" });
    }

    function makeFolder(item: TreeItem) {
      console.log("ddd >>> makeFolder called", item);
      item.children = [];
      addItem(item);
    }

    onMounted(() => {});

    return {
      ...toRefs(data),
      addItem,
      makeFolder,
    };
  },
});
