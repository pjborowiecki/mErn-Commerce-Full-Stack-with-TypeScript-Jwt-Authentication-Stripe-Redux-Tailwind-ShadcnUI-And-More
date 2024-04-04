import type { Request, Response } from "express"

import { User } from "../../models/v1/user.model"
import { generateJwt, setJwtCookie, clearJwtCookie } from "../../lib/auth.lib"
import {
  NotAuthorizedError,
  ResourceAlreadyExistsError,
} from "../../lib/errors.lib"
import type { SignInRequestBody, SignUpRequestBody } from "../../types"

export async function signUp(
  request: Request<object, object, SignUpRequestBody>,
  response: Response
): Promise<void> {
  const existingUser = await User.findOne({ email: request.body.email })
  if (existingUser)
    throw new ResourceAlreadyExistsError("This email has already been taken")

  const newUser = await User.create({
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
  })

  if (newUser) {
    const payload = {
      id: newUser._id.toString(),
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    }

    const token = generateJwt(payload)
    setJwtCookie(response, token)
    response.status(201).json(payload)
  }
}

export async function signIn(
  request: Request<object, object, SignInRequestBody>,
  response: Response
): Promise<void> {
  const user = await User.findOne({ email: request.body.email })
  if (user && (await user.matchPasswords(request.body.password))) {
    const payload = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    }

    const token = generateJwt(payload)
    setJwtCookie(response, token)
    response.status(200).json(payload)
  } else {
    throw new NotAuthorizedError("Inavlid email or password")
  }
}

export function signOut(_request: Request, response: Response): void {
  clearJwtCookie(response)
}

export function getCurrentUser(_request: Request, response: Response): void {
  response.status(200).send({ message: "getCurrentUser" })
}

export function updateCurrentUser(_request: Request, response: Response): void {
  response.status(200).send({ message: "updateCurrentUser" })
}

export function deleteCurrentUser(_request: Request, response: Response): void {
  response.status(200).send({ message: "deleteCurrentUser" })
}

export function getAllUsers(_request: Request, response: Response): void {
  response.status(200).send({ message: "getAllUsers" })
}

export function getUserById(_request: Request, response: Response): void {
  response.status(200).send({ message: "getUserById" })
}

export function updateUserById(_request: Request, response: Response): void {
  response.status(200).send({ message: "updateCurrentUser" })
}

export function deleteUserById(_request: Request, response: Response): void {
  response.status(200).send({ message: "deleteUserById" })
}
