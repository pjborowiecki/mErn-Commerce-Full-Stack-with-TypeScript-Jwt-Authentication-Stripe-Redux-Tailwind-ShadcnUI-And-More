import dotenv from "dotenv"
import { z } from "zod"

dotenv.config()

const environmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  SERVER_PROTOCOL: z
    .string({ required_error: "SERVER_PROTOCOL missing" })
    .default("http"),
  SERVER_HOSTNAME: z
    .string({
      required_error: "SERVER_HOSTNAME missing",
    })
    .default("localhost"),
  SERVER_PORT: z.coerce
    .number({
      required_error: "SERVER_PORT missing",
    })
    .int()
    .positive()
    .max(65536)
    .default(4000),
  CLIENT_PROTOCOL: z
    .string({ required_error: "CLIENT_PROTOCOL missing" })
    .default("http"),
  CLIENT_HOSTNAME: z
    .string({ required_error: "CLIENT_HOSTNAME missing" })
    .default("localhost"),
  CLIENT_PORT: z.coerce
    .number({ required_error: "CLIENT_PORT missing" })
    .int()
    .positive()
    .max(65536)
    .default(3000),
  DATABASE_URL: z.string({ required_error: "DATABASE_URL missing" }).min(3),
  JWT_SIGNING_KEY: z.string({ required_error: "JWT_SIGNING_KEY missing" }),
  JWT_EXPIRATION_TIME: z
    .string({ required_error: "JWT_EXPIRATION_TIME missing" })
    .default("1d"),
  JWT_EXPIRATION_TIME_IN_MS: z.coerce
    .number({ required_error: "JWT_EXPIRATION_TIME_IN_MS missing" })
    .int()
    .positive()
    .default(86400000),
})

const env = environmentSchema.parse(process.env)

export const config = {
  node_env: env.CLIENT_HOSTNAME,
  server: {
    protocol: env.SERVER_PROTOCOL,
    hostname: env.SERVER_HOSTNAME,
    port: env.SERVER_PORT,
  },
  client: {
    protocol: env.CLIENT_PROTOCOL,
    hostname: env.CLIENT_HOSTNAME,
    port: env.CLIENT_PORT,
  },
  database: {
    url: env.DATABASE_URL,
  },
  auth: {
    jwt: {
      signingKey: env.JWT_SIGNING_KEY,
      expirationTime: env.JWT_EXPIRATION_TIME,
      expirationTimeInMs: env.JWT_EXPIRATION_TIME_IN_MS,
    },
  },
}
