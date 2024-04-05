import type { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"

import { RequestValidationError } from "../lib/errors.lib"

export function requestValidator(
  request: Request,
  _response: Response,
  next: NextFunction
): void {
  const errors = validationResult(request)
  if (!errors.isEmpty()) throw new RequestValidationError(errors.array())
  next()
}
