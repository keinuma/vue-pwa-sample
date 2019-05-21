import ErrorMessageForUser from "../const/errorMessageForUser";

export class AppError extends Error {
  code: string = "";

  constructor(code: string = "", message: string = "", ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }

    this.code = code;
    this.message = message;
  }
}

export default error => {
  if (error.code !== undefined) {
    throw new AppError(error.code, ErrorMessageForUser.get(error.code));
  }
  throw new AppError(
    "InternalErrorException",
    ErrorMessageForUser.get("InternalErrorException")
  );
};
