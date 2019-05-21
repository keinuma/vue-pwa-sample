import AuthService from "@/service/auth";
import * as types from "@/store/mutation-types";
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store";

export interface IAuthState {
  currentUser: any;
}

@Module({ dynamic: true, store, namespaced: true, name: "auth" })
class Auth extends VuexModule implements IAuthState {
  currentUser = null;

  get username(): string {
    if (this.currentUser !== null) {
      return this.currentUser.username;
    }
    return null;
  }

  get email(): string {
    if (this.currentUser !== null) {
      return this.currentUser.attributes.email;
    }
    return null;
  }

  get nickname(): string {
    if (this.currentUser !== null) {
      return this.currentUser.attributes.nickname;
    }
    return null;
  }

  @Mutation
  private [types.SET_CURRENT_USER](user: any) {
    this.currentUser = user;
  }

  @Action
  public async getCurrentUser() {
    const user = await AuthService.getCurrentUser().catch(() => {
      return null;
    });
    this.context.commit(types.SET_CURRENT_USER, user);
  }

  @Action
  public async signUp({ email, password }) {
    const user = await AuthService.signUp(email, password).catch(e => {
      this.context.commit(
        types.SET_ERROR,
        {
          code: e.code,
          message: e.message
        },
        { root: true }
      );
      return null;
    });
    this.context.commit(types.SET_CURRENT_USER, user);
  }

  @Action
  public async login({ email, password }) {
    const user = await AuthService.login(email, password).catch(e => {
      this.context.commit(
        types.SET_ERROR,
        {
          code: e.code,
          message: e.message
        },
        { root: true }
      );
      return null;
    });
    this.context.commit(types.SET_CURRENT_USER, user);
  }

  @Action
  public async logout() {
    await AuthService.logout().catch(e => {
      this.context.commit(
        types.SET_ERROR,
        {
          code: e.code,
          message: e.message
        },
        { root: true }
      );
    });
    this.context.commit(types.SET_CURRENT_USER, null);
  }
}

export const authModule = getModule(Auth);
