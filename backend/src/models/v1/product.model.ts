import mongoose from "mongoose"

export interface IProduct {
  name: string
  description: string
  price: number
  image: string
  category: string
  countInStock: number
  brand: string
  rating: number
  numReviews: number
  reviews: mongoose.Schema.Types.ObjectId[]
  user: mongoose.Schema.Types.ObjectId
}

export const productSchema = new mongoose.Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    image: { type: String, required: true },
    category: { type: String, required: true },
    countInStock: { type: Number, required: true, default: 0 },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_doc, ret) {
        delete ret.__v
      },
    },
  }
)

export const Product = mongoose.model<IProduct>("Product", productSchema)
