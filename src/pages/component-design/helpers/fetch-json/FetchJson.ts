import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FetchJson",

  components: {},

  props: {
    url: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    // data
    const responseData = ref(null);
    const loading = ref(true);

    // created
    fetch(props.url)
      .then((resposne) => resposne.json())
      .then((responseJson) => {
        responseData.value = responseJson;
      })
      .finally(() => (loading.value = false));

    return {
      responseData,
      loading,
    };
  },
});
