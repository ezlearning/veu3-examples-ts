import { ref, defineComponent, onMounted, computed } from "vue";
import { debounce } from "lodash-es";
import marked from "marked";

type MouseEventHandler = (payload: Event) => void;
type InputEventHandler = (payload: Event) => void;

export default defineComponent({
  name: "MarkdownEditor",

  setup() {
    // data
    const input = ref("# hello");

    // computed
    const compiledMarkdown = computed(() => {
      return marked(input.value, { sanitize: true });
    });

    // methods
    const update = debounce((event: Event) => {
      input.value = (event.target as HTMLTextAreaElement).value;
      event.preventDefault();
    }, 1000);

    // hooks
    onMounted(() => {});

    return {
      input,
      update,
      compiledMarkdown,
    };
  },
});
