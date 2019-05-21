import AppError from "@/domain/error";
import ErrorMessageForUser from "@/const/errorMessageForUser";
import AuthRepository from "@/repositories/api/auth";

export default {
  login: async (email: string, password: string) => {
    return await AuthRepository.login(email, password).catch(e => {
      console.log(e);
      if (e.code !== undefined) {
        throw new AppError(e.code, ErrorMessageForUser.get(e.code));
      }
      throw new AppError(
        "InternalErrorException",
        ErrorMessageForUser.get("InternalErrorException")
      );
    });
  }
};
