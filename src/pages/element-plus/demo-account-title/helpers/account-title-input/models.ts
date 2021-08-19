/**
 * 科目查询接口: api/fvSbjLikeQuery
 *
 * Input:
 * 参数名称	参数中文名称	备注
 * fundId	产品编号	外部传入
 * showCode	当前级别搜索代码或者名称	当前级别输入框值
 * sbjLv	当前查询科目级别
 * sbjCode	科目代码	上次选中下拉记录带出值
 * sbjAttriCode	科目性质	上次选中下拉记录带出值
 * auxItem1Val	辅助项1值	上次选中下拉记录带出值
 * auxItem2Val	辅助项2值	上次选中下拉记录带出值
 * auxItem3Val	辅助项3值	上次选中下拉记录带出值
 *
 * Output:
 * 参数名称	参数中文名称	备注
 * showCode	下拉显示代码
 * showName	下拉显示名称
 * sbjLv	科目级别	例如：3	回填
 * sbjCode	科目代码	例如：1021-01-A001-03-01	回填显示
 * sbjName	科目名称	例如：银行存款-托管账户-银行托管户	回填显示
 * sbjAttriCode	科目性质		回填
 * auxItem1Val	辅助项1值		回填
 * auxItem2Val	辅助项2值		回填
 * auxItem3Val	辅助项3值		回填
 * isDetailLv	是否明细
 * sbjExplain	科目释义
 */
export interface QueryParam {
  fundId?: string; // 产品编号
  auxItem1Val?: string; // 辅助项1值
  auxItem2Val?: string; // 辅助项2值
  auxItem3Val?: string; // 辅助项3值
  sbjAttriCode?: ""; // 科目性质
  sbjCode?: string; // 科目代码
  sbjLv?: number; // 当前查询科目级别
  showCode?: string; // 查询条件
}

export interface AccountTitle {
  sbjLv: number; // 当前查询科目级别
  showCode: string; // 下拉菜单:显示Code
  showName: string; // 下拉菜单:显示Label
  sbjName: string; // 科目名称: "银行存款-托管账户-托管户"; // 显示全名
  sbjCode: string; // 科目代码
  sbjAttriCode: string; // 科目性质
  auxItem1Val: string; // 辅助项1
  auxItem2Val: string; // 辅助项2
  auxItem3Val: string; // 辅助项3
  isDetailLv: string; // 是否最后一级: "0" - "否", "1" - 是;
  qtyFlag: string; // 是否核算数量
}

export interface InputCheckResult {
  valid: boolean;
  fields: EditField[];
  option: AccountTitle;
}

export interface EditField {
  value: string;
}
