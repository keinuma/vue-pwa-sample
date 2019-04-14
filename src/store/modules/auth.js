import { Auth } from "aws-amplify";
import * as types from "@/store/mutation-types";

const namespaced = true;

const state = {
  loggedIn: false
};

const mutations = {
  [types.SET_LOGGED_IN](state) {
    state.loggedIn = true;
  }
};

const actions = {
  signUp: function({ commit }, { email, password }) {
    Auth.signUp({
      username: email,
      password,
      attributes: {
        email
      }
    }).then(() => {
      commit(types.SET_LOGGED_IN);
    });
  },
  login: function({ commit }, { email, password }) {
    Auth.signIn({
      username: email,
      password
    }).then(() => {
      commit(types.SET_LOGGED_IN);
    });
  }
};

export default {
  namespaced,
  state,
  mutations,
  actions
};
