import {
  defineComponent,
  ref,
  reactive,
  PropType,
  computed,
  onMounted,
  watch,
  toRefs,
  DirectiveBinding,
} from "vue";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// localStorage persistence
const STORAGE_KEY = "todos-vuejs-3.0";
const todoStorage = {
  uid: 0,
  fetch() {
    const todos: Todo[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    todos.forEach((todo, index) => {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save(todos: Todo[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

// visibility filters
// type FilterType = "all" | "active" | "completed";
// type Filter = { [key: FilterType]: (todos: Todo[]) => Todo[] };
// type Filter = { [key: FilterType]: any };
const filters = {
  all(todos: Todo[]) {
    return todos;
  },
  active(todos: Todo[]) {
    return todos.filter((todo) => !todo.completed);
  },
  completed(todos: Todo[]) {
    return todos.filter((todo) => todo.completed);
  },
};

export default defineComponent({
  name: "TodoMvc",

  components: {},

  props: {
    columns: Array as PropType<string[]>,
    filterKey: String,
  },

  directives: {
    "todo-focus": function (
      el: HTMLInputElement,
      binding: DirectiveBinding<HTMLInputElement>
    ) {
      if (binding.value) {
        el.focus();
      }
    },
  },

  setup() {
    // data
    const data = reactive({
      todos: todoStorage.fetch(),
      newTodo: "",
      editedTodo: null as Todo,
      visibility: "all" as keyof typeof filters,
      // edit
      beforeEditCache: null as string,
    });

    // computed
    const filteredTodos = computed(() => {
      return filters[data.visibility](data.todos);
    });

    const remaining = computed(() => {
      return filters.active(data.todos).length;
    });

    const allDone = computed(() => ({
      get() {
        return remaining.value === 0;
      },
      set(value: boolean) {
        data.todos.forEach((todo) => {
          todo.completed = value;
        });
      },
    }));

    // watches
    // :CRITICAL: A watcher data source can either be a getter function that
    // returns a value, or directly a ref:
    watch(
      () => data.todos,
      (todos) => {
        console.log("watch updated", todos);
        todoStorage.save(todos);
      },
      { deep: true }
    );

    // methdos
    function pluralize(n: number) {
      return n === 1 ? "item" : "items";
    }

    function addTodo() {
      const value = data.newTodo && data.newTodo.trim();
      if (!value) {
        return;
      }
      data.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false,
      });
      data.newTodo = "";
    }

    function removeTodo(todo: Todo) {
      data.todos.splice(data.todos.indexOf(todo), 1);
    }

    function editTodo(todo: Todo) {
      data.beforeEditCache = todo.title;
      data.editedTodo = todo;
    }

    function doneEdit(todo: Todo) {
      if (!data.editedTodo) {
        return;
      }

      data.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        removeTodo(todo);
      }
    }

    function cancelEdit(todo: Todo) {
      data.editedTodo = null;
      todo.title = data.beforeEditCache;
    }

    function removeCompleted() {
      console.log("removeCompleted called");
      data.todos = filters.active(data.todos);
    }

    return {
      ...toRefs(data),
      filteredTodos,
      remaining,
      allDone,
      addTodo,
      removeTodo,
      editTodo,
      doneEdit,
      cancelEdit,
      pluralize,
      removeCompleted,
    };
  },
});
