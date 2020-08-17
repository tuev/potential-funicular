<template>
  <div class="d-flex mx-auto max-w-lg rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Todo App</div>
      <div class="my-2">
        <todo-add></todo-add>
      </div>
      <div class="my-4" v-for="(todo, index) in todoList" :key="todo.name">
        <todo-item v-bind="todo" :index="index"></todo-item>
      </div>
    </div>
    <div
      class="flex px-6 py-4 justify-between items-center todo-footer"
      v-show="count"
    >
      <todo-count></todo-count>
      <todo-filter></todo-filter>
      <todo-clear></todo-clear>
    </div>
  </div>
</template>

<script>
import {
  TodoAdd,
  TodoItem,
  TodoCount,
  TodoFilter,
  TodoClear,
} from "@/components/todo";
export default {
  components: {
    TodoAdd,
    TodoItem,
    TodoCount,
    TodoFilter,
    TodoClear,
  },
  data: function () {
    return {
      todos: [],
    };
  },
  computed: {
    filter() {
      return this.$store.state.todo.filter;
    },
    count() {
      return this.$store.getters["todo/count"];
    },
    todoList() {
      const todos = this.$store.state.todo.todos;
      switch (this.filter) {
        case "todo":
          return todos.filter((todo) => todo.status === "todo");
        case "done":
          return todos.filter((todo) => todo.status === "done");
        default:
          return todos;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-footer {
  border-top: 1px solid;
  @apply border-gray-300;
}
</style>
