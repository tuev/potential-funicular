import { RootState } from "./../../index";
import { PixaState } from "./state";
import { GetterTree } from "vuex";
const getters: GetterTree<PixaState, RootState> = {
  totalPage(state) {
    return state.total
      ? Math.floor(state.total / +process.env.VUE_APP_PIXABAY_ITEM_PER_PAGE)
      : 0;
  },
};

export default getters;
