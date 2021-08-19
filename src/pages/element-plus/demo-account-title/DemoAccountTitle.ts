import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";
import AccountTitleInput from "./helpers/account-title-input/AccountTitleInput.vue";
import { AccountTitle } from "./helpers/account-title-input/models";

export default defineComponent({
  name: "DemoAccountTitle",

  components: {
    AccountTitleInput,
  },

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup() {
    const input1 = ref<AccountTitle>(null);
    const input2 = ref<AccountTitle>({
      sbjCode: "1002-01-C001.42.01",
      sbjName: "银行存款-托管账户-测试银行账户",
      sbjLv: 3,
      showCode: "C001.42.01",
      showName: "测试银行账户",
      sbjAttriCode: "1002-0001-01",
      auxItem1Val: "",
      auxItem2Val: "",
      auxItem3Val: "",
      isDetailLv: "1",
      qtyFlag: "0",
    });

    const input3 = ref<AccountTitle>(null);
    const elInput = ref("");
    const accountTitleValue = ref("");
    onMounted(() => {});

    function onChange(newValue: AccountTitle) {
      console.log("newVal", newValue);
    }

    return {
      accountTitleValue,
      elInput,
      input1,
      input2,
      input3,
      onChange,
    };
  },
});
