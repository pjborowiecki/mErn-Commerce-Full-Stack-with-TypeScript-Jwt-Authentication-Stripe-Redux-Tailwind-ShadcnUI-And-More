import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

import { config } from "../config"
import { NotAuthorizedError } from "../lib/errors.lib"
import { UserPayload } from "../types"

export function authenticationHandler(
  request: Request,
  _response: Response,
  next: NextFunction
): void {
  if (!request.cookies.jwt || typeof request.cookies.jwt !== "string")
    throw new NotAuthorizedError("Missing or malformed JSON Web Token (JWT)")
  try {
    request.currentUser = jwt.verify(
      request.cookies.jwt,
      config.auth.jwt.signingKey
    ) as UserPayload

    next()
  } catch (error) {
    throw new NotAuthorizedError("Invalid JSON Web Token (JWT)")
  }
}

export function authorizationHandler(
  request: Request,
  _response: Response,
  next: NextFunction
): void {
  if (request.currentUser && request.currentUser.isAdmin) {
    next()
  } else {
    throw new NotAuthorizedError("Not authorized as admin")
  }
}
