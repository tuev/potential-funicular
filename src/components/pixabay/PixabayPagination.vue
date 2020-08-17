<template>
  <div class="container my-4">
    <a-pagination
      :default-current="page"
      :total="totalPage"
      hideOnSinglePage
      @change="onPageChange"
    />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

@Component({
  computed: {
    ...mapState("pixa", ["page"]),
    ...mapGetters("pixa", ["totalPage"]),
  },
  methods: {
    ...mapMutations("pixa", ["setPage"]),
    ...mapActions("pixa", ["getPixaItems"]),
  },
})
export default class PixabayPagination extends Vue {
  onPageChange(page) {
    this.setPage(page);
    this.getPixaItems();
  }
}
</script>

<style></style>
