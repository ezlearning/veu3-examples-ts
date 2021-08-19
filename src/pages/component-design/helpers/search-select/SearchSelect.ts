import {
  defineComponent,
  toRefs,
  nextTick,
  reactive,
  PropType,
  computed,
  onBeforeUnmount,
} from "vue";
import OnClickOutside from "../on-click-outside/OnClickOutside";

import { createPopper, Instance } from "@popperjs/core";

const UPDATE_MODEL = "update:modelValue";

export default defineComponent({
  name: "SearchSelect",

  components: {
    OnClickOutside,
  },

  props: {
    modelValue: {
      type: [String, null],
      required: true,
    },
    options: {
      type: Array as PropType<string[]>,
      required: true,
    },
    filterFunction: {
      type: Function as PropType<
        (options: string[], search: string) => string[]
      >,
      required: true,
    },
  },

  emits: [UPDATE_MODEL],

  setup(props, { emit }) {
    const sourceLink = "https://codesandbox.io/s/vyxl1z5pp5";

    const state = reactive({
      // refs
      openBtn: null as HTMLButtonElement,
      searchInput: null as HTMLInputElement,
      optionsUl: null as HTMLUListElement,
      dropdown: null as HTMLDivElement,
      popper: null as Instance,
      search: "",
      isOpen: false,
      highlightedIndex: 0,
    });

    const filteredOptions = computed(() =>
      props.filterFunction(props.options, state.search)
    );

    onBeforeUnmount(() => {
      if (state.popper) {
        state.popper.destroy();
      }
    });

    function setupPopper() {
      if (!state.popper) {
        state.popper = createPopper(state.openBtn, state.dropdown, {
          placement: "bottom",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 5],
              },
            },
          ],
        });
      }
    }

    function open() {
      state.isOpen = true;
      nextTick(() => {
        setupPopper();
        state.searchInput.focus();
        _scrollToHighlighted();
      });
    }

    function close() {
      state.isOpen = false;
      state.openBtn.focus();
    }

    function select(option: string) {
      emit(UPDATE_MODEL, option);
      state.search = "";
      state.highlightedIndex = 0;
      close();
    }

    // Keyboard Navigation
    function _scrollToHighlighted() {
      state.optionsUl.children[state.highlightedIndex].scrollIntoView({
        block: "nearest",
      });
    }

    function _highlight(index: number) {
      state.highlightedIndex = index;
      const filteredOptionsLength = filteredOptions.value.length;
      if (index < 0) {
        state.highlightedIndex = filteredOptionsLength - 1;
      } else if (index >= filteredOptionsLength) {
        state.highlightedIndex = 0;
      } else {
        state.highlightedIndex = index;
      }

      _scrollToHighlighted();
    }

    const highlightPrev = () => _highlight(state.highlightedIndex - 1);

    const highlightNext = () => _highlight(state.highlightedIndex + 1);

    const selectHighligted = () =>
      select(filteredOptions.value[state.highlightedIndex]);

    return {
      ...toRefs(state),
      filteredOptions,
      open,
      close,
      select,

      highlightPrev,
      highlightNext,
      selectHighligted,
    };
  },
});
