import { Request, Response, NextFunction, RequestHandler } from "express"

export const asyncHandler = (fn: RequestHandler) => (request: Request, response: Response, next: NextFunction) => {
  Promise.resolve(fn(request, response, next)).catch(next)
}
