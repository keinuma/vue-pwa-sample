import Vue from "vue";
import Vuex from "vuex";
import * as types from "@/store/mutation-types";

Vue.use(Vuex);

interface RootState {
  error: {
    code: string;
    message: string;
  };
  loading: boolean;
}

const initialState: RootState = {
  error: {
    code: "",
    message: ""
  },
  loading: false
};

export default new Vuex.Store({
  state: {
    error: initialState.error,
    loading: initialState.loading
  },
  mutations: {
    [types.SET_ERROR](state, error): void {
      state.error = error;
    },
    [types.CLEAR_ERROR](state): void {
      state.error = initialState.error;
    },
    [types.SHOW_LOADING](state): void {
      state.loading = true;
    },
    [types.HIDE_LOADING](state): void {
      state.loading = false;
    }
  },
  actions: {
    setInitial({ commit }) {
      commit(types.CLEAR_ERROR);
      commit(types.HIDE_LOADING);
    }
  }
});
