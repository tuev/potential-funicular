import { PixabayCategory, PixabayType } from "@/common/enums/pixabay";
import { PixabayModel } from "@/common/models/Pixa";
import { PixaState } from "./state";
import { MutationTree } from "vuex";

const mutations: MutationTree<PixaState> = {
  setItems(state, items: PixabayModel[]) {
    state.items = items;
  },
  setCategory(state, category: PixabayCategory[]) {
    console.log(category);
    state.category = category;
  },
  setType(state, type: PixabayType) {
    console.log(type);
    state.type = type;
  },
  setSearchKeyword(state, searchKeyword: string) {
    console.log(searchKeyword);
    state.searchKeyword = searchKeyword;
  },
  setLoading(state, loading: boolean) {
    state.loading = loading;
  },
  setTotal(state, total: number) {
    state.total = total;
  },
  setPage(state, page: number) {
    state.page = page;
  },
};

export default mutations;
