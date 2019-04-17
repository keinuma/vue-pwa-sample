import { Auth } from "aws-amplify";
import * as types from "@/store/mutation-types";

const namespaced = true;

const state = {
  currentUser: null,
  loggedIn: false
};

const getters = {
  username: state => {
    if (state.currentUser !== null) {
      return state.currentUser.username;
    }
    return null;
  },
  email: state => {
    if (state.currentUser !== null) {
      return state.currentUser.attributes.email;
    }
    return null;
  },
  nickname: state => {
    if (state.currentUser !== null) {
      return state.currentUser.attributes.nickname;
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
    const user = await Auth.currentAuthenticatedUser().catch(() => {
      commit(types.SET_CURRENT_USER, null);
      throw Error;
    });
    commit(types.SET_CURRENT_USER, user);
  },
  async signUp({ commit }, { email, password }) {
    const user = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
        nickname: email
      }
    });
    commit(types.SET_CURRENT_USER, user);
  },
  async login({ commit }, { email, password }) {
    const user = await Auth.signIn({
      username: email,
      password
    }).catch(() => {
      return null;
    });
    commit(types.SET_CURRENT_USER, user);
  },
  async logout({ commit }) {
    await Auth.signOut().catch(() => {
      console.log("error in sign out");
    });
    commit(types.SET_CURRENT_USER, null);
  }
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
