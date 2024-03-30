import mongoose from "mongoose"

export interface IPaymentResult {
  id: string
  email: string
  status: string
  updated_at: string
}

export const paymentResultSchema = new mongoose.Schema<IPaymentResult>({
  id: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, required: true },
  updated_at: { type: String, required: true },
})
