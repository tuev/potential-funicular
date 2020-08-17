<template>
  <div class="container mt-8 pt-4">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-5">
      <!-- Container wrapper -->
      <div class="container">
        <!-- Navbar brand -->
        <strong class="text-dark mr-2">
          Filters:
        </strong>

        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapsible wrapper -->
        <div
          class="navbar-collapse collapse show"
          id="navbarSupportedContent"
          style=""
        >
          <!-- Left links -->
          <a-row type="flex" class="w-100" :gutter="[{ md: 24 }, { xs: 8 }]">
            <a-col :xs="24" :md="8">
              <PixaCategory />
            </a-col>
            <a-col :xs="24" :md="8">
              <PixaTypeSelect />
            </a-col>
            <a-col :xs="24" :md="8">
              <PixaSearch />
            </a-col>
          </a-row>
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import PixaCategory from "@/components/pixabay/PixaCategorySelect.vue";
import PixaSearch from "@/components/pixabay/PixaSearchInput.vue";
import PixaTypeSelect from "@/components/pixabay/PixaTypeSelect.vue";
import { mapMutations, mapState, mapActions } from "vuex";
import { PixabayType, PixabayCategory } from "@/common/enums/pixabay";
import qs from "qs";

@Component({
  components: { PixaCategory, PixaSearch, PixaTypeSelect },
  computed: {
    ...mapState("pixa", ["type", "category", "searchKeyword"]),
  },
  methods: {
    ...mapMutations("pixa", ["setPage"]),
    ...mapActions("pixa", ["getPixaItems"]),
  },
})
export default class PixabayFilter extends Vue {
  type!: PixabayType;
  category!: PixabayCategory[];
  searchKeyword!: string;
  setPage!: (page: number) => void;
  getPixaItems!: () => void;

  get queryString() {
    return qs.stringify({
      type: this.type,
      category: this.category,
      q: this.searchKeyword,
    });
  }

  @Watch("queryString")
  onQueryStringChanged() {
    console.log(this.queryString, "category");
    this.setPage(1);
    this.getPixaItems();
  }
}
</script>

<style></style>
