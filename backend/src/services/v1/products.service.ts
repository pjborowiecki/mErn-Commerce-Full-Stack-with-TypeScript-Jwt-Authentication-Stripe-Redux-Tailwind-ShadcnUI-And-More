import { type Request, type Response } from "express"

export function getAllProducts(_request: Request, response: Response): void {
  response.status(200).json({ message: "All products" })
}

export function getProductById(_request: Request, response: Response): void {
  response.status(200).json({ message: "Product by id" })
}
