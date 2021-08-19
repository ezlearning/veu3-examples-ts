import { defineComponent, h, ref, onMounted, provide } from "vue";

import { Sortable } from "@shopify/draggable";

const UPDATE_MODEL = "update:modelValue";

function move(items: any[], oldIndex: number, newIndex: number) {
  const newItems = items.filter((_, index) => index !== oldIndex);
  newItems.splice(newIndex, 0, items[oldIndex]);
  return newItems;
}

export default defineComponent({
  name: "SortableList",

  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    itemClass: {
      type: String,
      default: "sortable-list-item",
    },
    handleClass: {
      type: String,
      default: "sortable-list-handle",
    },
  },
  emits: [UPDATE_MODEL],
  setup(props, { emit, slots }) {
    const $el = ref<HTMLDivElement>(null);

    provide("sortableListItemClass", props.itemClass);
    provide("sortableListHandleClass", props.handleClass);

    onMounted(() => {
      console.log("modelVale", props.modelValue);
      const listEl = $el.value.firstElementChild as HTMLDivElement;
      const sortable = new Sortable(listEl, {
        draggable: `.${props.itemClass}`,
        handle: `.${props.handleClass}`,
        mirror: { constrainDimensions: true },
      });
      sortable.on("sortable:stop", ({ oldIndex, newIndex }) => {
        emit(UPDATE_MODEL, move(props.modelValue, oldIndex, newIndex));
      });
    });

    return () => {
      return h("div", { ref: $el }, slots.default());
    };
  },
});
