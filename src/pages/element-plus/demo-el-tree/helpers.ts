export interface ITreeData {
  id: number | string;
  label: string;
  children?: ITreeData[];
}

export interface ITreeCheck {
  checkedKeys: string[];
  halfCheckedKeys: string[];
  checkedNodes: any[];
  halfCheckedNodes: any[];
}

export function addFakeNode(nodes: ITreeData[]): ITreeData[] {
  const newNodes: ITreeData[] = [];

  for (const node of nodes) {
    const newNode: ITreeData = Object.assign({}, node);

    if (newNode.children?.length > 0) {
      const firstChild = newNode.children[0];
      if (firstChild.children?.length) {
        // firstChild isParent
        newNode.children = addFakeNode(newNode.children);
      } else {
        // firstChild isLeaf, add fake node
        newNode.children.push({
          id: "fake_" + newNode.id,
          label: "fake_node",
        });
      }
    }

    newNodes.push(node);
  }

  return newNodes;
}
