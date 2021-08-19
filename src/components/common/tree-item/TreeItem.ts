import { TreeItem } from "@/pages/vuejs.org-examples/tree-view/helpers";
import { ref, PropType, defineComponent, onMounted, computed } from "vue";

export default defineComponent({
  props: {
    item: Object as PropType<TreeItem>,
  },
  name: "TreeItem",
  setup(props, { emit }) {
    // data
    const isOpen = ref(true);

    // computd
    const isFolder = computed(
      () => props.item.children && props.item.children.length
    );

    // methods
    function toggle() {
      if (isFolder.value) {
        isOpen.value = !isOpen.value;
      }
    }

    function makeFolder() {
      // :CRITICAL: computed属性要用.value取值
      if (!isFolder.value) {
        emit("make-folder", props.item);
      }
    }

    return {
      isOpen,
      isFolder,
      toggle,
      makeFolder,
    };
  },
});
