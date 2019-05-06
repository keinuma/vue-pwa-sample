import { Auth as AmplifyAuth } from "aws-amplify";
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
      return this.currentUser.email;
    }
    return null;
  }

  get nickname(): string {
    if (this.currentUser !== null) {
      return this.currentUser.nickname;
    }
    return null;
  }

  @Mutation
  private [types.SET_CURRENT_USER](user: any) {
    this.currentUser = user;
  }

  @Action
  public async getCurrentUser() {
    console.log(process.env);
    const user = await AmplifyAuth.currentAuthenticatedUser().catch(() => {
      return null;
    });
    this.context.commit(types.SET_CURRENT_USER, user);
  }

  @Action
  public async signUp({ email, password }) {
    const user = await AmplifyAuth.signUp({
      username: email,
      password: password,
      attributes: {
        email,
        nickname: email
      }
    });
    this.context.commit(types.SET_CURRENT_USER, user);
  }

  @Action
  public async login({ email, password }) {
    const user = await AmplifyAuth.signIn({
      username: email,
      password
    }).catch(() => {
      return null;
    });
    this.context.commit(types.SET_CURRENT_USER, user);
  }

  @Action
  public async logout() {
    await AmplifyAuth.signOut().catch(error => {
      throw error;
    });
    this.context.commit(types.SET_CURRENT_USER, null);
  }
}

export const authModule = getModule(Auth);