import { body, ValidationChain } from "express-validator"

export const signIn: ValidationChain[] = [
  body("email").isEmail().withMessage("Invalid email address").notEmpty(),
  body("password").isString().trim().notEmpty().withMessage("Password is required"),
]
