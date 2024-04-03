import mongoose from "mongoose"

export interface IReview {
  name: string
  comment: string
  rating: number
  user: mongoose.Schema.Types.ObjectId
}

export const reviewSchema = new mongoose.Schema<IReview>(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
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

export const Review = mongoose.model<IReview>("Review", reviewSchema)
