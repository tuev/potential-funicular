<template>
  <span
    class="text-base leading-normal font-semibold text-red-700 hover:underline cursor-pointer"
    @click="clearDoneTodo"
    v-if="todoCompleted !== 0"
    >Complete All</span
  >
</template>

<script>
export default {
  computed: {
    todoCompleted() {
      return this.$store.getters["todo/todoDone"];
    },
  },
  methods: {
    clearDoneTodo() {
      this.$store.commit("todo/clearCompletedTodo");
    },
  },
};
</script>

<style></style>
