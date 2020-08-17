import { TodoState, Filter } from "./state";
import { MutationTree } from "vuex";

const mutations: MutationTree<TodoState> = {
  addTodo: (state, payload: { data: string }) => {
    const isTodoExist = state.todos.find((item) => item?.name === payload.data);

    !isTodoExist && state.todos.push({ name: payload.data, status: "todo" });
  },
  removeTodo(state, payload: { data: number }) {
    state.todos = state.todos.filter((_, idx) => idx !== payload.data);
  },
  completeTodo(state, payload: { data: number }) {
    state.todos = state.todos.map((todo, idx) =>
      idx === payload.data ? { ...todo, status: "done" } : todo
    );
  },
  undoTodo(state, payload: { data: number }) {
    state.todos = state.todos.map((todo, idx) =>
      idx === payload.data ? { ...todo, status: "todo" } : todo
    );
  },
  editTodo(state, payload: { index: number; value: string }) {
    state.todos = state.todos.map((todo, idx) =>
      idx === payload.index ? { ...todo, name: payload.value } : todo
    );
  },
  clearCompletedTodo(state) {
    state.todos = state.todos.filter((todo) => todo.status !== "done");
  },
  changeFilter(state, payload: { data: Filter }) {
    state.filter = payload.data;
  },
};

export default mutations;
