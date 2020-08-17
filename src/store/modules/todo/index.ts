import { RootState } from "./../../index";
import { Module } from "vuex";
import state, { TodoState } from "./state";
import getters from "./getters";
import mutations from "./mutations";

const TodoModule: Module<TodoState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
};

export default TodoModule;
