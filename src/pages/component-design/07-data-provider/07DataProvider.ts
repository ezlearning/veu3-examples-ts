import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import SourceLink from "../helpers/source-link/SourceLink.vue";
import ContactListV3 from "../helpers/contact-list-v3/ContactListV3.vue";
import FetchJson from "../helpers/fetch-json/FetchJson.vue";
export default defineComponent({
  name: "07DataProvider",

  components: {
    SourceLink,
    FetchJson,
    ContactListV3,
  },

  setup() {
    const sourceLink = "https://codesandbox.io/s/nk9qr8yz0p";

    return {
      sourceLink,
    };
  },
});
