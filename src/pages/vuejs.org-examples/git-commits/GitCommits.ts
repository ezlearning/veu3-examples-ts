import { ref, defineComponent, onMounted, watch } from "vue";
import { formatDate, truncate } from "./helpers";
import { GitCommit } from "./models";

const apiURL = "https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=";

export default defineComponent({
  name: "GitCommits",
  setup() {
    // data
    const branches = ref(["master", "dev"]);
    const currentBranch = ref("master");
    const commits = ref<GitCommit[]>(null);

    // methods
    function fetchData() {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", apiURL + currentBranch.value);
      xhr.onload = () => {
        commits.value = JSON.parse(xhr.responseText);
        console.log(commits.value[0].html_url);
      };
      xhr.send();
    }

    // watches
    watch(currentBranch, (current, previous) => {
      fetchData();
    });

    // created
    fetchData();

    onMounted(() => {});

    return {
      branches,
      currentBranch,
      commits,
      formatDate,
      truncate,
    };
  },
});
