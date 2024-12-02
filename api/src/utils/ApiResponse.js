export default function ApiResponse(status = 200, data = null, message = "Success") {
  return {
    status,
    data,
    message,
    success: statusCode < 400
  }
}