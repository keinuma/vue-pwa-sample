import { NotAuthorizedException } from "@/const/errorCode";
import handleError, { AppError } from "@/service/error";
import AuthRepository from "@/repositories/api/auth";

export default {
  signUp: async (email: string, password: string) => {
    return await AuthRepository.signUp(email, password).catch(e => {
      handleError(e);
    });
  },
  login: async (email: string, password: string) => {
    return await AuthRepository.login(email, password).catch(e => {
      handleError(e);
    });
  },
  logout: async () => {
    return await AuthRepository.logout().catch(e => {
      handleError(e);
    });
  },
  getCurrentUser: async () => {
    return await AuthRepository.getCurrentUser().catch(e => {
      if (e === "not authenticated") {
        handleError(new AppError(NotAuthorizedException, e));
      } else {
        handleError(e);
      }
    });
  }
};
