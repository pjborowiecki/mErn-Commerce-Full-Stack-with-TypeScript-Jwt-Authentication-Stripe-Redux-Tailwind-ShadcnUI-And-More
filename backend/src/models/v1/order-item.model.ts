import mongoose from "mongoose"

export interface IOrderItem {
  name: string
  quantity: number
  price: number
  product: mongoose.Schema.Types.ObjectId
}

export const orderItemSchema = new mongoose.Schema<IOrderItem>({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
})
