import {
  toRefs,
  defineComponent,
  computed,
  onMounted,
  PropType,
  reactive,
  watch,
} from "vue";
import { capitalize } from "lodash-es";

interface IDataItem {
  [key: string]: string | number;
}

export default defineComponent({
  name: "DemoGrid",

  props: {
    data: Array as PropType<IDataItem[]>,
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  setup(props) {
    // data
    const sortOrders = props.columns.reduce(
      (prev, curr) => ((prev[curr] = 1), prev),
      {} as { [key: string]: number }
    );

    const data = reactive({
      sortKey: "",
      sortOrders,
    });

    // methods
    const sortBy = (key: string) => {
      data.sortKey = key;
      data.sortOrders[key] = data.sortOrders[key] * -1;
    };

    // computed
    const filteredData = computed(() => {
      const sortKey = data.sortKey;
      const filterKey = props.filterKey && props.filterKey.toLowerCase();
      const order = data.sortOrders[sortKey] || 1;
      let _data: IDataItem[] = [...props.data];

      if (filterKey) {
        _data = _data.filter((row) => {
          return Object.keys(row).some(
            (key) => String(row[key]).toLowerCase().indexOf(filterKey) > -1
          );
        });
      }

      if (sortKey) {
        _data.sort((row1, row2) => {
          const filed1 = row1[sortKey];
          const filed2 = row2[sortKey];
          return (filed1 === filed2 ? 0 : filed1 > filed2 ? 1 : -1) * order;
        });
      }

      return _data;
    });

    // hooks
    onMounted(() => {});

    return {
      ...toRefs(data),
      sortBy,
      capitalize,
      filteredData,
    };
  },
});
