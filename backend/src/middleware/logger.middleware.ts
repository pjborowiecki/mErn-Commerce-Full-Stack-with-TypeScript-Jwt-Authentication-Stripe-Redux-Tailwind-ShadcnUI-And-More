import type { Request, Response, NextFunction } from "express"

export function logger(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  console.log(
    `Incomming - METHOD: [${request.method}] - URL: [${request.url}] - IP: [${request.socket.remoteAddress}]`
  )

  response.on("finish", () => {
    console.log(
      `Result - METHOD: [${request.method}] - URL: [${request.url}] - IP: [${request.socket.remoteAddress}] - STATUS: [${response.statusCode}]`
    )
  })

  next()
}
