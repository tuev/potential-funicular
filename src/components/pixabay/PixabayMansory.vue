<template>
  <a-spin size="large" :spinning="loading">
    <div
      v-masonry
      transition-duration="3s"
      item-selector=".item"
      class="container"
    >
      <div v-masonry-tile class="item" :key="item.id" v-for="item in items">
        <img :src="item.webformatURL" />
      </div>
    </div>
  </a-spin>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState("pixa", ["loading", "items"]),
  },
})
export default class PixaMansonry extends Vue {
  @Watch("loading")
  onItemChanged(oldValue, newValue) {
    !newValue && this.$redrawVueMasonry("containerId");
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: calc(100% / 3);
  box-sizing: content-box;
}
.masonry-container {
  width: 55%;
  margin: 0 auto;
}
.container {
  padding: 0 !important;
}
</style>
