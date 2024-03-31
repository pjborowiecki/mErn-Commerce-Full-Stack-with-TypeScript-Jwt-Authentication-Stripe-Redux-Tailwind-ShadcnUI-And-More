import { Request, Response, NextFunction } from "express"

export function notFoundHandler(_request: Request, response: Response, next: NextFunction) {
  const error = new Error("This route could not be found")
  response.status(404).json({ error: error.message })
  next()
}
