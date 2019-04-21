import { Auth } from "aws-amplify";
import * as types from "@/store/mutation-types";
import {
  DefineGetters,
  DefineMutations,
  DefineActions
} from "vuex-type-helper";

const namespaced = true;

export interface State {
  currentUser: any;
}

export interface Getters {
  username: string;
  email: string;
  nickname: string;
}

export interface Mutations {
  [types.SET_CURRENT_USER]: {
    user: any;
  };
}

export interface Actions {
  currentUser: {};
  signUp: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  logout: {};
}

const state: State = {
  currentUser: null
};

const getters: DefineGetters<Getters, State> = {
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

const mutations: DefineMutations<Mutations, State> = {
  [types.SET_CURRENT_USER](state, { user }) {
    state.currentUser = user;
  }
};

const actions: DefineActions<Actions, State, Mutations, Getters> = {
  async currentUser({ commit }) {
    const user = await Auth.currentAuthenticatedUser().catch(() => {
      return null;
    });
    commit(types.SET_CURRENT_USER, { user });
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
    commit(types.SET_CURRENT_USER, { user });
  },
  async login({ commit }, { email, password }) {
    const user = await Auth.signIn({
      username: email,
      password
    }).catch(() => {
      return null;
    });
    commit(types.SET_CURRENT_USER, { user });
  },
  async logout({ commit }) {
    await Auth.signOut().catch(error => {
      return error;
    });
    commit(types.SET_CURRENT_USER, { user: null });
  }
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
