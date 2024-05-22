import * as z from "zod"

import { emailSchema } from "@/validations/email"

export const userIdSchema = z
  .string({
    required_error: "User Id is required",
    invalid_type_error: "User Id must be a string",
  })
  .min(1, {
    message: "User Id must be at least 1 character long",
  })
  .max(512, {
    message: "User Id must be at most 512 characters long",
  })

export const passwordSchema = z
  .string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  })
  .min(8, {
    message: "Password must be made of at least 8 characters",
  })
  .max(256, {
    message: "Password must be made of at most 256 characters",
  })

export const signUpWithPasswordSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema.regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      {
        message:
          "Password must contain at least 8 characters, including one uppercase, one lowercase, one number and one special character",
      }
    ),
    confirmPassword: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export type SignUpWithPasswordInput = z.infer<typeof signUpWithPasswordSchema>
