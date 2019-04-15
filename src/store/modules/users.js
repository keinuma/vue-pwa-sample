import * as types from "@/store/mutation-types";

const namespaced = true;

const state = {
  users: [],
  nextToken: null
};

const getters = {};

const mutations = {
  [types.SET_USERS](state, users) {
    state.users = users;
  },
  [types.SET_NEXT_TOKEN](state, nextToken) {
    state.nextToken = nextToken;
  }
};

const actions = {};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
