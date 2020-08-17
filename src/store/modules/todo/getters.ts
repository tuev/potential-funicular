import { RootState } from "./../../index";
import { GetterTree } from "vuex";
import { TodoState } from "./state";

export interface TodoGetter {
  count: number;
  todoActive: number;
  todoDone: number;
}

const getters: GetterTree<TodoState, RootState> = {
  count: (state) => state.todos.length,
  todoActive: (state) =>
    state.todos.filter((todo) => todo?.status === "todo").length,
  todoDone: (state) =>
    state.todos.filter((todo) => todo?.status === "done").length,
};

export default getters;
