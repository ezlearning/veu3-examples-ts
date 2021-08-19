import { h, inject, defineComponent } from "vue";

export default defineComponent({
  name: "SortableItem",

  setup(_, { slots }) {
    const itemClass = inject("sortableListItemClass") as string;

    return () => {
      return h("div", { class: itemClass }, slots.default());
    };
  },
});
