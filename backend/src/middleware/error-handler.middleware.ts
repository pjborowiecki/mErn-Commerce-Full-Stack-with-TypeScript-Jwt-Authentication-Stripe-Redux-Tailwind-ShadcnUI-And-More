import { Request, Response, NextFunction } from "express"
import mongoose from "mongoose"

export function notFoundHandler(request: Request, response: Response, next: NextFunction) {
  const error = new Error(`This route could not be found: ${request.originalUrl}`)
  response.status(404).json({ error: error.message })
  next(error)
}

export function errorHandler(error: Error, _request: Request, response: Response, next: NextFunction) {
  let statusCode = response.statusCode === 200 ? 500 : response.statusCode
  let errorMessage = error.message

  if (error instanceof mongoose.Error.CastError && error.kind === "ObjectId") {
    errorMessage = "Resource not found"
    statusCode = 404
  }

  response.status(statusCode).json({
    error: errorMessage,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  })

  next()
}
