import mongoose from "mongoose"

import { orderItemSchema, type IOrderItem } from "./order-item.model"
import {
  shippingAddressSchema,
  type IShippingAddress,
} from "./shipping-address.model"
import {
  paymentResultSchema,
  type IPaymentResult,
} from "./payment-result.model"

export interface IOrder {
  orderItems: IOrderItem[]
  itemsPrice: number
  taxPrice: number
  totalPrice: number
  isPaid: boolean
  paidAt: Date
  isDelivered: boolean
  deliveredAt: Date
  paymentMethod: string
  paymentResult: IPaymentResult
  shippingAddress: IShippingAddress
  user: mongoose.Schema.Types.ObjectId
}

export const orderSchema = new mongoose.Schema<IOrder>(
  {
    orderItems: [orderItemSchema],
    itemsPrice: { type: Number, required: true, default: 0.0 },
    taxPrice: { type: Number, required: true, default: 0.0 },
    totalPrice: { type: Number, required: true, default: 0.0 },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, require: true, default: false },
    deliveredAt: { type: Date },
    paymentMethod: { type: String, required: true },
    paymentResult: paymentResultSchema,
    shippingAddress: shippingAddressSchema,
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

export const Order = mongoose.model<IOrder>("Order", orderSchema)
