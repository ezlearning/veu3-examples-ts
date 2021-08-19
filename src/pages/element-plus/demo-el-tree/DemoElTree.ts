import { ref, defineComponent, onMounted } from "vue";
import { addFakeNode, ITreeCheck, ITreeData } from "./helpers";
import { data } from "./data";

export default defineComponent({
  name: "DemoElTree",
  setup() {
    // 必须指定 treeProps
    const treeProps = {
      label: "label",
      children: "children",
    };

    // 数据必须是 reactive
    const treeData = ref(addFakeNode(data));

    // 节点应用，不建议使用
    const tree = ref(null);

    const getCheckedKeys = () => {
      // getCheckedKeys 有 bug, 参数不起作用
      console.log("getCheckedKeys", tree.value.getCheckedKeys(true));
      console.log("getCheckedKeys", tree.value.getCheckedKeys(false));
      console.log("getHalfCheckedKeys", tree.value.getHalfCheckedKeys());
    };

    const setCheckedKeys = () => {
      tree.value.setCheckedKeys([3]);
    };

    const getCheckedNodes = () => {
      console.log("getCheckedNodes", tree.value.getCheckedNodes(false, true));
    };

    const resetChecked = () => {
      tree.value.setCheckedKeys([]);
    };

    const onCheck = (
      data: ITreeData,
      {
        checkedKeys,
        halfCheckedKeys,
        checkedNodes,
        halfCheckedNodes,
      }: ITreeCheck
    ) => {
      console.log("onCheck data", data);
      console.log("onCheck checkedKeys", checkedKeys);
      console.log("onCheck halfCheckedKeys", halfCheckedKeys);
      console.log("onCheck checkedNodes", checkedNodes);
      console.log("onCheck halfCheckedNodes", halfCheckedNodes);
    };

    // 不显示fake节点，让父节点可以半选中
    const filterFakeNode = (value: string, data: ITreeData) =>
      !String(data.id).startsWith(value);

    onMounted(() => {
      tree.value.filter("fake_");
    });

    return {
      tree,
      treeProps,
      treeData,
      getCheckedKeys,
      setCheckedKeys,
      getCheckedNodes,
      resetChecked,
      onCheck,
      filterFakeNode,
    };
  },
});
