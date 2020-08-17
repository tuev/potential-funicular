import { RootState } from "./../../index";
import { Module } from "vuex";
import state, { PixaState } from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const PixaModule: Module<PixaState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default PixaModule;
