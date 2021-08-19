import { h, defineComponent, inject } from "vue";

export default defineComponent({
  name: "SortableHandle",

  setup(_, { slots }) {
    const handleClass = inject("sortableListHandleClass") as string;

    return () => {
      return h("div", { class: handleClass }, slots.default());
    };
  },
});
