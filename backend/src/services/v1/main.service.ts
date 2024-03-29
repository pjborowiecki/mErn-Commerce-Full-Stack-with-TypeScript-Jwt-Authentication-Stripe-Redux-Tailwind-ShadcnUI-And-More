import { type Request, type Response } from "express"

export function healthCheck(_request: Request, response: Response): void {
  response.status(200).json({ message: "All healthy!" })
}
