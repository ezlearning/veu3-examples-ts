import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "GridComponent",

  setup() {
    const searchQuery = ref("");
    const gridColumns = ref(["name", "power"]);
    const gridData = ref([
      { name: "Chuck Norris", power: Infinity },
      { name: "Bruce Lee", power: 9000 },
      { name: "Jackie Chan", power: 7000 },
      { name: "Jet Li", power: 8000 },
    ]);

    onMounted(() => {});

    return {
      searchQuery,
      gridColumns,
      gridData,
    };
  },
});
