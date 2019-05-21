export default class AppError extends Error {
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
