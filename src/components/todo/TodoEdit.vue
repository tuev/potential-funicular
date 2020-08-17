<template>
  <div class="relative w-full">
    <input
      class="appearance-none bg-transparent border-none w-full text-gray-700 pl-1 pr-32 leading-tight focus:outline-none"
      type="text"
      ref="todoEdit"
      v-model="value"
      :placeholder="name"
      @keypress.enter="submitEditTodo"
    />
    <div class="absolute right-0 mr-4 top-0 height-full">
      <span
        class="text-sm text-green-400 mx-2 hover:text-green-600 hover:underline"
        @click="submitEditTodo"
      >
        change
      </span>
      <span
        class="text-sm text-red-400 hover:text-red-600 hover:underline"
        @click="$emit('cancelEdit')"
      >
        cancel
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    index: Number,
  },
  data: function () {
    return {
      value: this.name,
    };
  },
  methods: {
    submitEditTodo() {
      this.$store.commit("todo/editTodo", {
        index: this.index,
        value: this.value,
      });
    },
  },
  mounted() {
    this.$refs.todoEdit.focus();
  },
};
</script>

<style></style>
