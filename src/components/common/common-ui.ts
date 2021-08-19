import { App, Component } from "vue";
import DemoGrid from "./demo-grid/DemoGrid.vue";
import TreeItem from "./tree-item/TreeItem.vue";

interface IComponents {
  [key: string]: Component;
}

const components: IComponents = {
  DemoGrid,
  TreeItem,
};

const install = function (app: App, opts = {}): void {
  Object.keys(components).forEach((key) => {
    app.component(key, components[key]);
  });
};

const CommonUi = {
  install,
};

export default CommonUi;
