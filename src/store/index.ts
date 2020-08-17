import Vue from "vue";
import Vuex from "vuex";

import modules from "./modules";

Vue.use(Vuex);

export interface RootState {
  version: string;
}

const store = {
  state: {
    version: "0.0.1",
  },
  mutations: {},
  actions: {},
  modules,
};

export default new Vuex.Store(store);
