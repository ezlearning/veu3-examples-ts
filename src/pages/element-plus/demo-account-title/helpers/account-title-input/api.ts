// import Vue from "vue";

import { AccountTitle, QueryParam, EditField } from "./models";

// mock test
import { fetch_data } from "./test-data/data";

/**
 * 科目查询
 *
 * @param api 查询接口
 * @param selectedOpitons 用户之前的选项
 * @param fields 输入的字段
 * @defaultParam defaultParam 其他请求参数
 * @returns
 */
export async function remoteMethod(
  api: string,
  defaultParam: QueryParam,
  selectedOpiton: AccountTitle,
  fields: EditField[]
): Promise<AccountTitle[]> {
  // 1. 默认第一级查询参数
  const queryParam: QueryParam = {
    auxItem1Val: "",
    auxItem2Val: "",
    auxItem3Val: "",
    sbjAttriCode: "",
    sbjCode: "",
    sbjLv: 1,
    showCode: "",
  };

  // 2. 非第一级查询，赋值上一级查询的选项
  const level = fields.length;
  if (level > 1) {
    const previousOption = selectedOpiton;
    Object.assign(queryParam, {
      auxItem1Val: selectedOpiton.auxItem1Val,
      auxItem2Val: selectedOpiton.auxItem2Val,
      auxItem3Val: selectedOpiton.auxItem3Val,
      sbjAttriCode: selectedOpiton.sbjAttriCode,
      sbjCode: selectedOpiton.sbjCode,
      sbjLv: level,
    });
  }

  // 3. 赋值queryStr
  const lastField = fields[fields.length - 1];
  queryParam.showCode = lastField.value;

  // 4. 默认参数
  Object.assign(queryParam, defaultParam);

  // 5. 发起请求
  // const http = Vue.prototype.$http;
  // const { data } = await (http.post(api, queryParam, {waiting_tip: 2}) as Promise<{
  //   data: AccountTitle[];
  // }>);

  // 6. mock: 模拟测试用1021科目
  const data = await fetch_data(queryParam);
  console.log("query result", data.length);

  // 7. 返回数据
  return data;
}
