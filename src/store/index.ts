import Vue from "vue";
import Vuex from "vuex";

import { IAuthState } from "@/store/modules/auth";

Vue.use(Vuex);

export interface State {
  auth: IAuthState
}

export default new Vuex.Store<State>({});
