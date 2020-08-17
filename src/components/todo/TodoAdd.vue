<template>
  <div class="d-flex">
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="todo"
      type="text"
      :value="value"
      @input="value = $event.target.value"
      placeholder="new todo"
      @keypress.enter="addTodo"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      value: "",
    };
  },
  methods: {
    addTodo() {
      this.$store.commit("todo/addTodo", { data: this.value });
      this.value = "";
    },
  },
};
</script>

<style></style>
