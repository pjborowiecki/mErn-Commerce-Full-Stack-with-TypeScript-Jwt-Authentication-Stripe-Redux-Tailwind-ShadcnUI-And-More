import dotenv from "dotenv"
import path from "path"
import Joi from "joi"

dotenv.config({ path: path.resolve(__dirname, "../../.env") })

const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid("development", "production", "test").required(),
  SERVER_PROTOCOL: Joi.string().required().default("http"),
  SERVER_HOSTNAME: Joi.string().required().default("localhost"),
  SERVER_PORT: Joi.number().required().default(4000),
  CLIENT_PROTOCOL: Joi.string().required().default("http"),
  CLIENT_HOSTNAME: Joi.string().required().default("localhost"),
  CLIENT_PORT: Joi.number().required().default(3000),
  DATABASE_URL: Joi.string().required(),
  JWT_SIGNING_KEY: Joi.string().required(),
  JWT_EXPIRATION_TIME: Joi.string().required().default("1d"),
  JWT_EXPIRATION_TIME_IN_MS: Joi.number().required().default(86400000),
})

const { error, value: validatedEnv } = envSchema.validate(process.env, {
  abortEarly: false,
  stripUnknown: true,
}) as { error?: Joi.ValidationError; value: NodeJS.ProcessEnv }

if (error) {
  throw new Error(
    `Environment variable validation error: \n${error.details
      .map((detail) => detail.message)
      .join("\n")}`
  )
}

export const config = {
  node_env: validatedEnv.NODE_ENV,
  server: {
    protocol: validatedEnv.SERVER_PROTOCOL,
    hostname: validatedEnv.SERVER_HOSTNAME,
    port: validatedEnv.SERVER_PORT,
  },
  client: {
    protocol: validatedEnv.CLIENT_PROTOCOL,
    hostname: validatedEnv.CLIENT_HOSTNAME,
    port: validatedEnv.CLIENT_PORT,
  },
  database: {
    url: validatedEnv.DATABASE_URL,
  },
  auth: {
    jwt: {
      signingKey: validatedEnv.JWT_SIGNING_KEY,
      expirationTime: validatedEnv.JWT_EXPIRATION_TIME,
      expirationTimeInMs: validatedEnv.JWT_EXPIRATION_TIME_IN_MS,
    },
  },
}
