import dotenv from "dotenv"

import { connectDatabase, disconnectDatabase } from "../db/connection"
import { User } from "../models/v1/user.model"
import { Product } from "../models/v1/product.model"
import { Review } from "../models/v1/review.model"
import { Order } from "../models/v1/order.model"

import { dummyUsers } from "../db/dummy-users"
import { dummyProducts } from "../db/dummy-products"

dotenv.config()

export async function seedDatabase(): Promise<void> {
  try {
    await connectDatabase()

    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    await Review.deleteMany()

    await User.insertMany(dummyUsers)
    const admin = await User.findOne({ isAdmin: true })

    const products = dummyProducts.map((product) => {
      return { ...product, user: admin?._id }
    })

    await Product.insertMany(products)

    console.log("Database successfully seeded with users and products")
  } catch (error) {
    console.error("Error seeding the database: ", error)
  } finally {
    await disconnectDatabase()
    process.exit()
  }
}

export async function clearDatabase(): Promise<void> {
  try {
    await connectDatabase()

    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    await Review.deleteMany()

    console.log("Database successfully cleared")
  } catch (error) {
    console.error("Error clearing the database: ", error)
  } finally {
    await disconnectDatabase()
    process.exit()
  }
}

if (process.argv[2] === "-c") {
  clearDatabase().catch((error) =>
    console.error("Error seeding the database: ", error)
  )
} else {
  seedDatabase().catch((error) =>
    console.error("error clearing the database: ", error)
  )
}
