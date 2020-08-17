<template>
  <div
    class="flex shadow-sm hover:shadow-lg justify-start items-center py-2 px-4 my-2 cursor-pointer border-solid border rounded-full border-gray-200 todo-item"
  >
    <span
      :class="[
        'text-base hover:text-gray-700 leading-normal focus:outline-none focus:shadow-outline',
        isCompleted ? 'line-through text-gray-500' : 'text-gray-700',
      ]"
      v-if="!isEdit"
      >{{ name }}</span
    >
    <todo-edit
      v-else
      :name="name"
      :index="index"
      v-on:cancelEdit="toggleEdit"
    ></todo-edit>
    <div class="flex ml-auto" v-show="!isEdit">
      <span
        class="hidden text-sm leading-normal font-semibold text-green-400 hover:text-green-700 todo-remove cursor-pointer"
        @click="completeTodo"
        v-if="!isCompleted"
        >complete</span
      >
      <span
        class="hidden text-sm leading-normal font-semibold text-green-400 hover:text-green-700 todo-remove cursor-pointer"
        @click="undoTodo"
        v-else
        >undo</span
      >
      <span
        class="hidden mx-4 text-sm leading-normal font-semibold text-orange-400 hover:text-orange-700 todo-remove cursor-pointer"
        @click="toggleEdit"
        >edit</span
      >
      <span
        class="hidden text-sm leading-normal font-semibold text-red-400 hover:text-red-700 todo-remove cursor-pointer"
        @click="removeTodo"
        >remove</span
      >
    </div>
  </div>
</template>

<script>
import { TodoEdit } from "@/components/todo";

export default {
  components: { TodoEdit },
  data: function () {
    return {
      isEdit: false,
    };
  },
  methods: {
    toggleEdit: function () {
      this.isEdit = !this.isEdit;
    },
    removeTodo() {
      this.$store.commit("todo/removeTodo", { data: this.index });
    },
    completeTodo() {
      this.$store.commit("todo/completeTodo", { data: this.index });
    },
    undoTodo() {
      this.$store.commit("todo/undoTodo", { data: this.index });
    },
  },
  props: {
    name: {
      type: String,
    },
    status: {
      type: String,
    },
    index: Number,
  },
  computed: {
    isCompleted() {
      return this.status === "done";
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  &:hover {
    .todo-remove {
      display: block;
    }
  }
}
</style>
