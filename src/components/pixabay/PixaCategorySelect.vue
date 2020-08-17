<template>
  <a-select
    :default-value="[]"
    style="width: 100%;"
    placeholder="Please select category"
    @change="setCategory"
  >
    <a-select-option v-for="category in categories" :key="category">
      {{ category || "------" }}
    </a-select-option>
  </a-select>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { PixabayCategory } from "@/common/enums/pixabay";
import { mapMutations } from "vuex";

@Component({
  methods: {
    ...mapMutations("pixa", ["setCategory"]),
  },
})
export default class PixaCategory extends Vue {
  categories = PixabayCategory;
  handleChange(value: string) {
    console.log(`selected ${value}`);
  }
}
</script>

<style></style>
