import { type Response } from "express"
import jwt from "jsonwebtoken"

import { config } from "../config"
import { type UserPayload } from "../types"

export function generateJwt(payload: UserPayload): string {
  return jwt.sign(payload, config.auth.jwt.signingKey, {
    expiresIn: config.auth.jwt.expirationTime,
  })
}

export function setJwtCookie(response: Response, token: string): void {
  response.cookie("jwt", token, {
    httpOnly: true,
    secure: config.node_env !== "development",
    sameSite: "strict",
    maxAge: config.auth.jwt.expirationTimeInMs,
  })
}

export function clearJwtCookie(response: Response): void {
  response.status(204).cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  })
}
