import { AccountTitle, EditField, InputCheckResult } from "./models";

/**
 * 将v-modal输入转换为编辑域
 * @param modalValue 控件v-modal输入, e.g.
 * {
 *    sbjCode: "1002-01-C001.42.01",
 *    sbjName: "银行存款-托管账户-测试银行账户",
 *    sbjLv: 3,
 *    showCode: "C001.42.01",
 *    showName: "测试银行账户",
 *    sbjAttriCode: "1002-0001-01",
 *    auxItem1Val: "",
 *    auxItem2Val: "",
 *    auxItem3Val: "",
 *    sbjExplain: "",
 *    isDetailLv: "1",
 *    qtyFlag: "0",
 * }
 */
export function checkInputValue(modalValue: AccountTitle): InputCheckResult {
  let valid = true;
  let option: AccountTitle = null;
  let fields: EditField[] = [];

  if (
    modalValue &&
    modalValue.sbjLv &&
    modalValue.sbjCode &&
    modalValue.sbjName
  ) {
    const result = convertValueToFields(modalValue.sbjCode, modalValue.sbjLv);
    valid = result.valid;
    fields = result.fields;

    if (valid) {
      option = Object.assign({}, modalValue);
    }

    return { valid, fields, option };
  }

  fields.push({ value: "" });
  return { valid, fields, option };
}

/**
 * convert value to fields, value is "-" sepelated string,
 * and the last field can can contain "-";
 *
 * @param inputValue
 * @param level
 * @returns
 */
export function convertValueToFields(
  inputValue: string,
  level: number
): { valid: boolean; fields: EditField[] } {
  let valid = true;
  const values = inputValue.split("-");
  const fields: EditField[] = [];

  // 必输是3个数据项用#号分割开
  if (values.length < level) {
    console.error("科目编辑输入格式错: " + inputValue);
    valid = false;
    fields.push({ value: "" });
    return { valid, fields };
  }

  for (let i = 0; i < level - 1; i++) {
    fields.push({ value: values[i] });
  }

  // 最后一级可能包含"-"字符
  const lastIndex = level - 1;
  fields.push({
    value: values.slice(level - 1).join("-"),
  });

  return { valid, fields };
}

/**
 * 计算下一个聚焦选项
 * @param event
 * @param elementCount
 * @param currentFocus
 */
export function calcNextFocusOption(
  event: KeyboardEvent,
  elementCount: number,
  currentFocus: number
): number {
  // first press
  if (currentFocus === -1) {
    return 0;
  }

  // down
  if (event.key === "ArrowDown" || (event.key === "Tab" && !event.shiftKey)) {
    currentFocus++;
    if (currentFocus === elementCount) {
      currentFocus = 0;
    }
    return currentFocus;
  }

  // up
  if (event.key === "ArrowUp" || (event.key === "Tab" && event.shiftKey)) {
    currentFocus--;
    if (currentFocus === -1) {
      currentFocus = elementCount - 1;
    }
    return currentFocus;
  }

  // other keys or no options
  return currentFocus;
}

/**
 * check is KeyPress in dropmenu
 *
 * @param target HTMLKeyBoardEvent
 * @param dropdown ul element
 * @returns
 */
export function checkValidTarget(
  target: EventTarget,
  dropdown: HTMLDivElement
): boolean {
  let valid = target === dropdown;

  if (!valid) {
    for (const item of dropdown.children) {
      valid = target === item;
      if (valid) {
        break;
      }
    }
  }

  return valid;
}

export function calcDropdownPostition(
  container: HTMLDivElement,
  updated: number
): Record<string, string> {
  if (container) {
    const domRect = container.getBoundingClientRect();
    const spaceAbove = domRect.top + updated - updated;
    const spaceBelow = window.innerHeight - domRect.bottom;

    if (spaceAbove > spaceBelow) {
      return {
        left: domRect.left + "px",
        top: domRect.top + "px",
        transform: "translateY(calc(-100% - 5px))",
        "min-width": domRect.width + "px",
      };
    } else {
      return {
        left: domRect.left + "px",
        top: domRect.top + "px",
        transform: "translateY(" + (container.clientHeight + 5) + "px)",
        "min-width": domRect.width + "px",
      };
    }
  }

  return {
    left: "0",
    top: "0",
    "margin-top": "32px",
  };
}

/**
 * 获取查询str
 *
 * @param inputValue
 * @param fields
 * @returns
 */
export function getQueryStr(
  inputValue: string,
  fields: EditField[]
): [number, string] {
  let queryStr = inputValue;

  // reverse find query level
  let level = 1;
  for (let i = fields.length - 1; i > 0; i--) {
    const previousValue =
      fields
        .slice(0, i)
        .map((f) => f.value)
        .join("-") + "-";
    if (inputValue.startsWith(previousValue)) {
      level = i + 1;
      break;
    }
  }

  // last level changed
  if (level > 1 && level === fields.length) {
    const previousInput = fields
      .slice(0, level - 1)
      .map((field) => field.value)
      .join("-");

    queryStr = inputValue.slice(previousInput.length + 1);
  } else {
    // not last level changed
    queryStr = inputValue.split("-")[level - 1];
  }

  return [level, queryStr];
}

export function getLastField(fields: EditField[]): EditField {
  if (fields.length > 0) {
    return fields[fields.length - 1];
  } else {
    return null;
  }
}
