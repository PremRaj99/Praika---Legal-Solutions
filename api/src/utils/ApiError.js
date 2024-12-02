export const ApiError = (
  statusCode = 500,
  message = "Internal Server Error"
) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
