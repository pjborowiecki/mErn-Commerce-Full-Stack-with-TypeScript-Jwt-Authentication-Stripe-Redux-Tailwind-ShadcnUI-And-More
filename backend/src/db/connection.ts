import mongoose from "mongoose"
import { config } from "../config"

export async function connectDatabase() {
  try {
    await mongoose.connect(String(config.database.url))
    console.log("Database connected successfully")
  } catch (error) {
    console.error("Error connecting to database: ", error)
    throw error
  }
}

export async function disconnectDatabase() {
  try {
    await mongoose.disconnect()
    console.log("Database connection closed successfully")
  } catch (error) {
    console.error("Error closing database connection: ", error)
  }
}
