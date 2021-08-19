# Requirements

1. 各级科目之间使用 - (横杠)隔开，替换掉现在使用的红点。
2. 现在的科目组件输入不太方便，需要支持退格修改，当前科目组件不支持退格修改数据，需要通过鼠标点击上一级才能退回;
3. 组件的下拉选择需要支持上下键控制选择，然后回车键确认选择。
4. 组件需要支持新增、修改模式
   该组件是有用在新增修改表单内部的 table 上的，也有用在查询条件上的，所以需要支持修改时科目组件的数据回显。
5. 没有输入明细科目，应该要提示，控件应该支持控制是否检查科目完整性，也就是必须输入明细科目
   比如：凭证录入那里就必须输入明细科目，凭证查询条件里面就可以输入部分。

## 沟通

### 2021-07-23 10:00:01

假设用户这样选择的：

```js
  // selected level 1.
  {
    sbjCode: "1002",
    sbjName: "银行存款",
    sbjLv: 1,
    showCode: "1002",
    showName: "银行存款",
    sbjAttriCode: "",
    auxItem1Val: "",
    auxItem2Val: "",
    auxItem3Val: "",
    sbjExplain: "",
    isDetailLv: "0",
    qtyFlag: "",
  },

  // selected level 2.
  {
    sbjCode: "1002-01",
    sbjName: "银行存款-托管账户",
    sbjLv: 2,
    showCode: "01",
    showName: "托管账户",
    sbjAttriCode: "",
    auxItem1Val: "",
    auxItem2Val: "",
    auxItem3Val: "",
    sbjExplain: "",
    isDetailLv: "0",
    qtyFlag: "",
  },

  // selected level 3.
  {
    sbjCode: "1002-01-A001.42.01",
    sbjName: "银行存款-托管账户-托管户",
    sbjLv: 3,
    showCode: "A001.42.01",
    showName: "托管户",
    sbjAttriCode: "1002-0001-01",
    auxItem1Val: "",
    auxItem2Val: "",
    auxItem3Val: "",
    sbjExplain: "",
    isDetailLv: "1",
    qtyFlag: "0",
  },
```

Question: 再次编辑如果只想修改 3 级科目 A00 开头的，该怎么传参数查询？
Answer:

```js
{
    sbjCode: "1002-01-A001.42.01",
    sbjLv: 3,
    showCode: "A00",
    sbjAttriCode: "1002-0001-01",
    auxItem1Val: "",
    auxItem2Val: "",
    auxItem3Val: "",
}
```

你只要把 sbjLv 和 showCode 的值调整下，其他的就回传上次选中的就可以，后台会处理

Quesiton: 假设用法要重选第二级，输入框这样又该怎么传参数呢：1002-0，二级过滤条件为 0,
Answer: 科目级别传 2 showCode 传 0，其他就是修改时带入的值

```js
{
    sbjCode: "1002-01-A001.42.01",
    sbjLv: 2,
    showCode: "0",
    sbjAttriCode: "1002-0001-01",
    auxItem1Val: "",
    auxItem2Val: "",
    auxItem3Val: ""
},
```

你科目代码传 1002 也时可以的:

```js
{
  sbjCode: "1002",
  sbjLv: 2,
  showCode: "0",
  sbjAttriCode: "1002-0001-01",
  auxItem1Val: "",
  auxItem2Val: "",
  auxItem3Val: ""
},
```
