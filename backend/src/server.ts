import http from "http"

import { config } from "./config"
import { connectDatabase, disconnectDatabase } from "./db/connection"
import { app } from "./app"

const server = http.createServer(app)
async function main() {
  try {
    await connectDatabase()
    startServer()
  } catch (error) {
    console.error("Error starting the application: ", error)
    process.exit(1)
  }
}

function startServer() {
  server.listen(Number(config.server.port), () => {
    console.log(`Server running at ${config.server.protocol}://${config.server.hostname}:${config.server.port}`)
    handleSignals("SIGTERM")
    handleSignals("SIGINT")
  })
}

export async function closeServer(): Promise<void> {
  console.log("Closing HTTP server")
  try {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          console.error("Error closing server: ", error)
          reject(error)
        } else {
          console.log("Server closed successfully")
          resolve()
        }
      })
    })
  } catch (error) {
    console.error("Error while closing server: ", error)
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
      .catch((error) => {
        console.error("Error while closing server: ", error)
        process.exit(1)
      })
  })
}

main().catch((error) => {
  console.error("Error starting the application: ", error)
  process.exit(1)
})
