<template>
  <span
    class="text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline"
  >
    {{ count }} left
  </span>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters["todo/todoActive"];
    },
  },
};
</script>

<style></style>
