import type { Request, Response, NextFunction } from "express"
import mongoose from "mongoose"

import { CustomError } from "../lib/errors"

export function notFoundHandler(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const error = new Error(
    `This route could not be found: ${request.originalUrl}`
  )
  response
    .status(404)
    .send({ errors: [{ message: error.message, stack: error.stack }] })
  next()
}

export function errorHandler(
  error: Error,
  _request: Request,
  response: Response,
  next: NextFunction
): void {
  if (error instanceof CustomError) {
    response.status(error.statusCode).send({ errors: error.serializeErrors() })
  } else if (
    error instanceof mongoose.Error.CastError &&
    error.kind === "ObjectId"
  ) {
    response
      .status(404)
      .send({ errors: [{ message: "Resource not found", stack: error.stack }] })
  } else
    response
      .status(400)
      .send({
        errors: [{ message: "Something went wrong", stack: error.stack }],
      })
  next()
}
