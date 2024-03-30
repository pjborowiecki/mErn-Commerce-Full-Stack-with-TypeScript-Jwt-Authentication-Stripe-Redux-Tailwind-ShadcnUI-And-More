import mongoose from "mongoose"

export interface IShippingAddress {
  address: string
  city: string
  postalCode: string
  country: string
}

export const shippingAddressSchema = new mongoose.Schema<IShippingAddress>({
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
})
