import dotenv from "dotenv"

dotenv.config()

export const config = {
  node_env: process.env.NODE_ENV,
  server: {
    protocol: process.env.SERVER_PROTOCOL,
    hostname: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT,
  },
  client: {
    protocol: process.env.CLIENT_PROTOCOL,
    hostname: process.env.CLIENT_HOSTNAME,
    port: process.env.CLIENT_PORT,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    signingKey: process.env.JWT_SIGNING_KEY,
  },
}
