import mongoose from "mongoose"
import bcrypt from "bcrypt"

export interface IUser {
  name: string
  email: string
  password: string
  isAdmin: boolean
  matchPasswords: (enteredPassword: string) => Promise<boolean>
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
    toJSON: {
      transform(_doc, ret) {
        delete ret.password
        delete ret.__v
      },
    },
  }
)

userSchema.methods.matchPasswords = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, String(this.password))
}

export const User = mongoose.model<IUser>("User", userSchema)
