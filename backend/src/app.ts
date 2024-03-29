import express from "express"
import compression from "compression"
import cookieParser from "cookie-parser"
import cookieSession from "cookie-session"
import helmet from "helmet"
import xss from "xss-shield"
import cors from "cors"

import { corsOptions } from "./config/cors"
import { cookieSessionOptions } from "./config/cookies"
import { compressionOptions } from "./config/compression"
import { xssOptions } from "./config/xss"
import { logger } from "./middleware/logger.middleware"
import { notFoundMiddleware } from "./middleware/not-found.middleware"

import { mainController } from "./controllers/v1/main.controller"
import { authController } from "./controllers/v1/auth.controller"

const app = express()

app.use(helmet())
app.use(express.json({ limit: "16kb" }))
app.use(xss.xssShield(xssOptions))
app.use(cookieSession(cookieSessionOptions))
app.use(cookieParser())
app.use(compression(compressionOptions))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cors(corsOptions))
app.use(logger)

app.use("/api/v1", mainController)
app.use("/api/v1/auth", authController)

app.use(notFoundMiddleware)

export { app }
