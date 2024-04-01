import mongoose from "mongoose"

import { config } from "../config"
import { DatabaseConnectionError } from "../lib/errors"

export async function connectDatabase(): Promise<void> {
  try {
    await mongoose.connect(String(config.database.url))
    console.log("Database connected successfully")
  } catch (error) {
    throw new DatabaseConnectionError("Error connecting to database")
  }
}

export async function disconnectDatabase(): Promise<void> {
  try {
    await mongoose.disconnect()
    console.log("Database connection closed successfully")
  } catch (error) {
    throw new DatabaseConnectionError("Error closing database connection")
  }
}
