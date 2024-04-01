import { type Request, type Response } from "express"

import { User } from "../../models/v1/user.model"
import { NotAuthorizedError } from "../../lib/errors"
import { type SignInRequestBody } from "../../types/auth"

export function signUp(_request: Request, response: Response): void {
  response.status(201).send({ message: "signUp" })
}

export async function signIn(request: Request<object, object, SignInRequestBody>, response: Response): Promise<void> {
  const user = await User.findOne({ email: request.body.email })
  if (user && (await user.matchPasswords(request.body.password))) {
    response.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    throw new NotAuthorizedError("Inavlid email or password")
  }
}

export function signOut(_request: Request, response: Response): void {
  response.status(200).send({ message: "signOut" })
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
