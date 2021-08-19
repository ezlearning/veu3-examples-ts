// :TODO: Vue3项目只需要将 "@vue/composition-api" 换成 Vue, modelValue
import {
  defineComponent,
  reactive,
  PropType,
  computed,
  onMounted,
  onBeforeUnmount,
  toRefs,
  watch,
  onUpdated,
  // } from "@vue/composition-api";
} from "vue";

import { debounce } from "lodash-es";
import { AccountTitle, EditField } from "./models";
import { remoteMethod } from "./api";
import {
  calcDropdownPostition,
  calcNextFocusOption,
  checkInputValue,
  convertValueToFields,
  getLastField,
  getQueryStr,
} from "./helpers";

export default defineComponent({
  name: "AccountTitleInput",

  components: {},

  emits: ["change", "update:modelValue", "input"],

  props: {
    // 上次编辑的值
    // Vue3
    modelValue: {
      type: [String, Object] as PropType<AccountTitle>,
      default: null,
      validator: (value: AccountTitle) => {
        if (value) {
          if (value.sbjLv && value.sbjCode && value.sbjName) {
            return true;
          } else {
            console.error("输入的科目错误:", value);
            return false;
          }
        }
        return true;
      },
    },
    // Vue2
    value: {
      type: [String, Object] as PropType<AccountTitle>,
      default: null,
      validator: (value: AccountTitle) => {
        if (value) {
          if (value.sbjLv && value.sbjCode && value.sbjName) {
            return true;
          } else {
            console.error("输入的科目错误:", value);
            return false;
          }
        }
        return true;
      },
    },

    // 是否校验明细科目
    checkLast: {
      type: Boolean,
      default: true,
    },

    // 默认参数，用户支持按产品编码查询和方便以后扩展: {fundId: ""}
    defaultParam: {
      type: Object,
      default: () => ({}),
    },

    // width
    width: {
      type: [String, Number],
      default: 0,
    },

    // api
    api: {
      type: String,
      required: true,
    },

    // showName
    showName: {
      type: Boolean,
      default: true,
    },

    // showClear
    showClear: {
      type: Boolean,
      default: true,
    },

    // disabled
    disabled: {
      type: Boolean,
      default: false,
    },

    // readonly
    readonly: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    // 1. data
    const data = reactive({
      edited: false, // 是否编辑过

      valid: false, // 输入是否有效

      inputValue: "",
      container: null as HTMLDivElement,
      input: null as HTMLInputElement, // 输入控件
      fields: [] as EditField[], // 输入域, 不能包含#字符

      showDropdown: false, // 是否显示下拉菜单
      dropdown: null as HTMLDivElement, // dropdown list
      focusId: -1,
      options: [] as AccountTitle[], // 下来菜单
      selectedOption: null as AccountTitle, // 选中的菜单项目

      updated: 0, // 是否更新输入
      composing: false, // 是否正在输入
      queryFinished: false, // 查询是否结束

      showTooltip: false,
      nameEl: null as HTMLDivElement, // used for calc descript width
      nameHelperEl: null as HTMLDivElement,
    });

    // 2. computed
    // 获取下拉菜单的样式用于定位
    const dropdownStyle = computed(() => {
      return calcDropdownPostition(data.container, data.updated);
    });

    const style = computed(() => {
      const width = Number(props.width);
      if (!isNaN(width) && width > 0) {
        return `width: ${width}px`;
      } else {
        return `width: 100%`;
      }
    });

    const fieldsValue = computed(() => {
      return data.fields.map((field) => field.value).join("#");
    });

    // 3. watches
    watch(
      () => [props.value, props.modelValue],
      ([newVal1, newVal2]) => {
        // if edited account title, do nothing
        if (data.edited) {
          return;
        }

        // else convert input value to fields
        const { valid, fields, option } = checkInputValue(newVal1 || newVal2);
        data.fields = fields;
        data.valid = valid;
        data.selectedOption = option;
      },
      {
        immediate: true,
      }
    );

    // watch(() => data.inputValue, () => data.showDropdown = false);

    watch(
      () => data.updated,
      () => upateShowTooltip()
    );

    // 4. hooks
    function resizeListener() {
      data.updated++;
    }

    onMounted(() => {
      window.addEventListener("resize", resizeListener);
      resizeListener();
    });

    onBeforeUnmount(() => {
      document.removeEventListener("resize", resizeListener);
    });

    onUpdated(() => {
      if (
        data.showDropdown &&
        data.dropdown &&
        data.dropdown.childElementCount &&
        data.focusId > -1 &&
        data.focusId < data.dropdown.childElementCount
      ) {
        for (const item of data.dropdown.children) {
          if (item.classList.contains("selected")) {
            item.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center",
            });
          }
        }
      }
    });

    // 5. methods
    function updateInputValue() {
      data.inputValue = data.fields.map((field) => field.value).join("-");
      if (data.input) {
        data.input.focus();
      }
    }

    // finished selected
    function finishSelectAccontTitle() {
      data.queryFinished = true;
      emit("input", data.selectedOption);
      emit("update:modelValue", data.selectedOption);
      emit("change", data.selectedOption);
    }

    function clearSelectionAccountTitle() {
      data.selectedOption = null;
      emit("input", null);
      emit("update:modelValue", null);
      emit("change", data.selectedOption);
    }

    function clear() {
      data.showDropdown = false;
      data.fields = [{ value: "" }];
      clearSelectionAccountTitle();
      updateInputValue();
    }

    function closeDropdown() {
      data.showDropdown = false;
    }

    function onFocus(event: Event) {
      if (event.target === data.input) {
        // setCaret();
        if (data.input.value === "") {
          confirmQuery();
        }
      }
    }

    // set carret at end
    function setCaret() {
      // data.showDropdown = false;
      const input = data.input;
      if (input) {
        // console.log("start", input.selectionStart);
        input.setSelectionRange(input.value.length, input.value.length);
        // input.focus();
      }
    }

    function onBlur() {
      data.showDropdown = false;
      const selected = data.selectedOption;
      if (selected) {
        data.inputValue = data.selectedOption.sbjCode || "";
        const result = convertValueToFields(selected.sbjCode, selected.sbjLv);
        data.fields = result.fields;
      }
    }

    function addField() {
      const newFiled = { value: "" };
      data.fields.push(newFiled);
      data.focusId = -1;
    }

    // methods
    const onInput = debounce((event: Event) => {
      if (data.composing) {
        return;
      }
      confirmQuery();
    }, 300);

    // (中文)输入法正在输入
    function onComposition(event: CompositionEvent) {
      if (event.type === "compositionstart") {
        data.composing = true;
      } else if (event.type === "compositionend") {
        data.composing = false;
      }
    }

    function confirmQuery() {
      data.updated++;
      // 1. update fields
      const [level, queryStr] = getQueryStr(data.inputValue, data.fields);
      data.fields = data.fields.slice(0, level);
      const lastField = data.fields[data.fields.length - 1];
      lastField.value = queryStr;
      updateInputValue();

      if (data.edited && data.fields.length === 1 && queryStr === "") {
        clearSelectionAccountTitle();
      }

      // 2. query
      remoteMethod(
        props.api,
        props.defaultParam,
        data.selectedOption,
        data.fields
      )
        .then((options) => {
          data.focusId = -1;
          data.options = options;

          const lastField = getLastField(data.fields);

          // 如果查询无记录
          if (
            !props.checkLast &&
            options.length === 0 &&
            lastField?.value === ""
          ) {
            data.fields = data.fields.slice(0, -1);
            updateInputValue();
            finishSelectAccontTitle();
            data.showDropdown = false;
            data.input.focus();
            return;
          }

          data.showDropdown = true;
          data.input.focus();
        })
        .catch((err) => {
          console.error("Error!", err);
        });
    }

    function onKeyDown(event: KeyboardEvent) {
      // do nothing: when composing
      if (data.composing) {
        return;
      }

      // 1. delete a char: when dropdown is close
      if (event.key === "Backspace") {
        data.showDropdown = false;
        return;
      }

      // 2. select opton: when drop down is open
      if (
        ["Tab", "Enter", "ArrowDown", "ArrowUp"].includes(event.key) &&
        data.showDropdown
      ) {
        // 1. (enter key) confirm
        if (event.key === "Enter") {
          if (data.focusId > -1 && data.focusId < data.options.length) {
            const option = data.options[data.focusId];
            onSelect(option);
          }

          if (data.focusId === -1 && data.options.length === 1) {
            const option = data.options[0];
            onSelect(option);
          }
        } else {
          // 2. (tab, arrow key) switch focus
          data.focusId = calcNextFocusOption(
            event,
            data.dropdown.childElementCount,
            data.focusId
          );
        }

        event.preventDefault();
        return;
      }

      // 3. cancal select
      if (event.key === "Escape") {
        closeDropdown();
        return;
      }

      // disable arrow key
      if (
        !data.composing &&
        ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)
      ) {
        // setCaret();
        // event.preventDefault();
        return;
      }

      if (event.key === "Enter") {
        confirmQuery();
        event.preventDefault();
        return;
      }

      // tab不处理
      if (event.key === "Tab") {
        return;
      }

      // limit data lengh
      if (!data.composing) {
        const lastField = getLastField(data.fields);
        if (lastField && lastField.value && lastField.value.length >= 60) {
          event.preventDefault();
          return;
        }
      }
    }

    function onSelect(option: AccountTitle) {
      data.selectedOption = option;
      const result = convertValueToFields(option.sbjCode, option.sbjLv);
      data.fields = result.fields;
      closeDropdown();

      if (props.checkLast) {
        if (option.isDetailLv === "1") {
          finishSelectAccontTitle();
          updateInputValue();
          data.queryFinished = true;
          data.input.focus();
          data.edited = true;
          data.showDropdown = false;
          return;
        }
      } else {
        finishSelectAccontTitle();
      }

      addField();
      updateInputValue();
      confirmQuery();

      data.input.focus();
      data.edited = true;
      data.showDropdown = false;
    }

    function upateShowTooltip() {
      if (data.nameEl && data.nameHelperEl) {
        if (data.nameHelperEl.clientWidth > data.nameEl.clientWidth) {
          data.showTooltip = true;
          return;
        }
      }

      data.showTooltip = false;
    }

    // Init
    updateInputValue();

    return {
      ...toRefs(data),
      style,
      dropdownStyle,
      fieldsValue,
      onComposition,
      clear,
      onBlur,
      onInput,
      onFocus,
      setCaret,
      onKeyDown,
      onSelect,
    };
  },
});
