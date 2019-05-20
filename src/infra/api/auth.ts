import { Auth } from "aws-amplify";

export default {
  login: async (email: string, password: string) => {
    return await Auth.signIn({
      username: email,
      password
    }).catch(e => {
      throw e;
    });
  }
}
