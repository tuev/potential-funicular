<template>
  <div>
    <a-row type="flex" justify="center">
      <PixabayFilters />
      <PixaPagination />
    </a-row>
    <a-row class="pixabay-images">
      <PixaMansonry />
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PixabayFilters from "@/components/pixabay/PixaFilters.vue";
import PixaMansonry from "@/components/pixabay/PixabayMansory.vue";
import PixaPagination from "@/components/pixabay/PixabayPagination.vue";

import { mapActions, mapState } from "vuex";

@Component({
  components: { PixabayFilters, PixaMansonry, PixaPagination },
  computed: {
    ...mapState("pixa", ["items"]),
  },
  methods: {
    ...mapActions("pixa", ["getPixaItems"]),
  },
})
export default class Pixabay extends Vue {
  getPixaItems!: () => void;

  mounted() {
    this.getPixaItems();
  }
}
</script>

<style lang="scss" scoped></style>
