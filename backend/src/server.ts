import http from "http"

import { config } from "./config"
import { connectDatabase, disconnectDatabase } from "./db/connection"
import { InternalServerError } from "./lib/errors"
import { app } from "./app"

const server = http.createServer(app)

async function startServer() {
  return new Promise<void>((resolve, reject) => {
    server
      .listen(Number(config.server.port), () => {
        console.log(`Server running at ${config.server.protocol}://${config.server.hostname}:${config.server.port}`)
        resolve()
      })
      .on("error", () => reject(new InternalServerError("Error starting server")))
  })
}

async function closeServer(): Promise<void> {
  console.log("Closing HTTP server")
  try {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(new InternalServerError("Error closing server"))
        } else {
          console.log("Server closed successfully")
          resolve()
        }
      })
    })
  } finally {
    await disconnectDatabase()
  }
}

function handleSignals(signalName: string) {
  process.on(signalName, () => {
    console.log(`${signalName} signal received`)
    closeServer()
      .then(() => {
        process.exit(0)
      })
      .catch(() => {
        throw new InternalServerError("Error closing server")
      })
  })
}

async function main() {
  try {
    await connectDatabase()
    await startServer()
    handleSignals("SIGTERM")
    handleSignals("SIGINT")
  } catch (error) {
    throw new InternalServerError("Error starting server")
  }
}

main().catch(() => {
  console.error("Error starting server")
  process.exit(1)
})
