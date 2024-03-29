import { type Request, type Response } from "express"

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
