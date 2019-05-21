import { Auth } from "aws-amplify";

export default {
  signUp: async (email: string, password: string) => {
    return await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email,
        nickname: email
      }
    }).catch(e => {
      throw e;
    });
  },
  login: async (email: string, password: string) => {
    return await Auth.signIn({
      username: email,
      password
    }).catch(e => {
      throw e;
    });
  },
  logout: async () => {
    return await Auth.signOut().catch(e => {
      throw e;
    });
  },
  getCurrentUser: async () => {
    return await Auth.currentAuthenticatedUser().catch(e => {
      throw e;
    });
  }
};
