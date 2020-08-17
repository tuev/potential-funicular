import { RootState } from "./../../index";
import { PixaState } from "./state";
import { ActionContext, ActionTree } from "vuex";
import AppPixabayService from "@/services/pixabayService";
import get from "lodash/get";

const actions: ActionTree<PixaState, RootState> = {
  async getPixaItems({ commit, state }: ActionContext<PixaState, RootState>) {
    const { category, searchKeyword, type, page } = state;
    try {
      commit("setLoading", true);
      const response = await AppPixabayService.getPixaItems({
        category,
        searchKeyword,
        type,
        page,
      });
      commit("setItems", get(response, "hits"));
      commit("setTotal", get(response, "total"));
      commit("setPage", state.page + 1);
    } catch (error) {
      console.log(error);
    } finally {
      commit("setLoading", false);
    }
  },
};

export default actions;
