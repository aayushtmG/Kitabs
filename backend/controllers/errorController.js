export default function globalErrorHandler(err, req, res, next) {
  res.status(200).json({
    errorMessage:err.message
  })
}
