import type { Request, Response } from "express"

import { User } from "../../models/v1/user.model"
import { generateJwt, setJwtCookie, clearJwtCookie } from "../../lib/auth.lib"
import {
  NotAuthorizedError,
  NotFoundError,
  ResourceAlreadyExistsError,
} from "../../lib/errors.lib"
import type {
  SignInRequestBody,
  SignUpRequestBody,
  UpdateCurrentUserRequestBody,
} from "../../types"

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
      id: newUser._id,
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
      id: user._id,
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

export async function getCurrentUser(
  request: Request,
  response: Response
): Promise<void> {
  const currentUser = await User.findById(request.currentUser?.id)
  if (currentUser) {
    response.status(200).json({
      id: currentUser._id,
      name: currentUser.name,
      email: currentUser.email,
      isAdmin: currentUser.isAdmin,
    })
  } else {
    throw new NotFoundError("User not found")
  }
}

export async function updateCurrentUser(
  request: Request<object, object, UpdateCurrentUserRequestBody>,
  response: Response
): Promise<void> {
  const currentUser = await User.findById(request.currentUser?.id)
  if (!currentUser) throw new NotFoundError("User not found")

  currentUser.name = request.body.name || currentUser.name
  currentUser.email = request.body.email || currentUser.email

  if (request.body.password) currentUser.password = request.body.password

  const updateUser = await currentUser.save()

  response.status(200).json({
    id: updateUser._id,
    name: updateUser.name,
    email: updateUser.email,
    isAdmin: updateUser.isAdmin,
  })
}

// TODO
export async function deleteCurrentUser(
  _request: Request,
  response: Response
): Promise<void> {
  await User.deleteOne()
  response.status(200).send({ message: "deleteCurrentUser" })
}

// TODO
export function getAllUsers(_request: Request, response: Response): void {
  response.status(200).send({ message: "getAllUsers" })
}

// TODO
export function getUserById(_request: Request, response: Response): void {
  response.status(200).send({ message: "getUserById" })
}

// TODO
export function updateUserById(_request: Request, response: Response): void {
  response.status(200).send({ message: "updateCurrentUser" })
}

// TODO
export function deleteUserById(_request: Request, response: Response): void {
  response.status(200).send({ message: "deleteUserById" })
}
