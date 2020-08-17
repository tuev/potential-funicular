<template>
  <div>
    <a-input-search
      placeholder="input search text"
      enter-button
      @search="onSearch"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapMutations } from "vuex";
import { debounce } from "lodash";

@Component({
  methods: {
    ...mapMutations("pixa", ["setSearchKeyword"]),
  },
})
export default class PixabaySearch extends Vue {
  setSearchKeyword!: (value: string) => void;

  onChange = debounce((e) => {
    this.setSearchKeyword(e.target.value);
  }, 500);

  onSearch(value: string) {
    this.setSearchKeyword(value);
  }
}
</script>

<style></style>
