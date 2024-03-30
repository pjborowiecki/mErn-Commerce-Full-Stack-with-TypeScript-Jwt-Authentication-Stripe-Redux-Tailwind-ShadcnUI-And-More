import mongoose from "mongoose"

export interface IUser {
  name: string
  email: string
  password: string
  isAdmin: boolean
}

export const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
)

export const User = mongoose.model<IUser>("User", userSchema)
