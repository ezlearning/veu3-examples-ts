import {
  defineComponent,
  ref,
  toRefs,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import SearchSelect from "../helpers/search-select/SearchSelect.vue";

export default defineComponent({
  name: "12SearchSelect",

  components: {
    SearchSelect,
  },

  setup() {
    const sourceLink = "https://codesandbox.io/s/vyxl1z5pp5";

    const state = reactive({
      selectedBand: null,
      bands: [
        "Anthrax",
        "Dark Angel",
        "Death Angel",
        "Destruction",
        "Exodus",
        "Flotsam and Jetsam",
        "Kreator",
        "Megadeth",
        "Metallica",
        "Overkill",
        "Sepultura",
        "Slayer",
        "Testament",
      ],
    });

    function applySearchFilter(bands: string[], search: string) {
      return bands.filter((band) =>
        band.toLowerCase().startsWith(search.toLowerCase())
      );
    }

    return {
      ...toRefs(state),
      sourceLink,
      applySearchFilter,
    };
  },
});
