<template>
  <div class="flex">
    <div class="flex" v-for="filter in filters" :key="filter">
      <span
        :class="[
          'todo-action mr-2',
          activeFilter === filter ? 'bg-blue-300' : ' bg-gray-200',
        ]"
        @click="changeFilter(filter)"
        >{{ filter }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      activeFilter: "all",
      filters: ["all", "todo", "done"],
    };
  },
  methods: {
    changeFilter(filter) {
      this.activeFilter = filter;
    },
  },
  watch: {
    activeFilter() {
      this.$store.commit("todo/changeFilter", { data: this.activeFilter });
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-action {
  @apply inline-block cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply shadow-md bg-blue-300;
  }
}
</style>
