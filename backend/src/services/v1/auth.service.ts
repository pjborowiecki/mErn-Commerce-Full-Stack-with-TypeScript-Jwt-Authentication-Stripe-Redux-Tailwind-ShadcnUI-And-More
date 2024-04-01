import { type Request, type Response } from "express"
import { User } from "../../models/v1/user.model"

export function signUp(_request: Request, response: Response): void {
  response.status(201).send({ message: "signUp" })
}

export function signIn(_request: Request, response: Response): void {
  response.status(200).send({ message: "signIn" })
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
