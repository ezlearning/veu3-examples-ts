import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
  toRefs,
} from "vue";

import ToggleInput from "../toggle-input/ToggleInput.vue";
import DeleteAccountButton from "../delete-account-button/DeleteAccountButton.vue";

export default defineComponent({
  name: "UserSettingsForm",

  components: {
    ToggleInput,
    DeleteAccountButton,
  },

  props: {
    accountId: [String, Number] as PropType<string | number>,
  },

  setup() {
    const data = reactive({
      email: "jane@example.com",
      receiveNewsletter: false,
    });

    onMounted(() => {});

    function submit() {
      console.log("Submiting preferences ...", {
        email: data.email,
        receiveNewsletter: data.receiveNewsletter,
      });
    }

    return {
      ...toRefs(data),
      submit,
    };
  },
});
