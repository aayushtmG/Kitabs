export default function globalErrorHandler(err, req, res, next) {
  res.status(500).json({
    errorMessage:err.message
  })
}