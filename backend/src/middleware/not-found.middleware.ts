import { Request, Response, NextFunction } from "express"

export function notFoundMiddleware(_req: Request, res: Response, next: NextFunction) {
  const error = new Error("This route could not be found")
  res.status(404).json({ error: error.message })
  next()
}
