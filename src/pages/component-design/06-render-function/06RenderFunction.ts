import {
  h,
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
} from "vue";

import SourceLink from "../helpers/source-link/SourceLink.vue";
import HelloWorld from "../helpers/hello-world/HelloWorld.vue";
import HelloWorldV3 from "../helpers/hello-world/HelloWorldV3.vue";
import ContactListV2 from "../helpers/contact-list-v2/ContactListV2.vue";

export default defineComponent({
  name: "06RenderFunction",

  components: {
    SourceLink,
    HelloWorld,
    HelloWorldV3,
    ContactListV2,
  },

  props: {},

  setup() {
    const sourceLink = "https://codesandbox.io/s/z2k1j94o8m";
    onMounted(() => {});

    return { sourceLink };
  },
});
