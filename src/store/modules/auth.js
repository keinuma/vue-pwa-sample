import { Auth } from "aws-amplify";
import * as types from "@/store/mutation-types";

const namespaced = true;

const state = {
  currentUser: null,
  loggedIn: false
};

const getters = {
  username: state => {
    if (typeof state.currentUser === "object") {
      return state.currentUser.username;
    }
    return null;
  }
};

const mutations = {
  [types.SET_LOGGED_IN](state) {
    state.loggedIn = true;
  },
  [types.SET_CURRENT_USER](state, user) {
    state.currentUser = user;
  }
};

const actions = {
  async currentUser({ commit }) {
    const user = await Auth.currentAuthenticatedUser().catch();
    commit(types.SET_CURRENT_USER, user);
  },
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
  async login({ commit }, { email, password }) {
    const user = await Auth.signIn({
      username: email,
      password
    });
    commit(types.SET_CURRENT_USER, user);
  },
  async logout({ commit }) {
    await Auth.signOut().then(() => {
      commit(types.SET_CURRENT_USER, null);
    });
  }
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
