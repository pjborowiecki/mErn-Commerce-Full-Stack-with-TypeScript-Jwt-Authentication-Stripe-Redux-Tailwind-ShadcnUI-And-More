import { Request, Response, NextFunction } from "express"

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`)

  res.on("finish", () => {
    console.log(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`)
  })

  next()
}
