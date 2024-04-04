import { body, ValidationChain } from "express-validator"

export const signIn: ValidationChain[] = [
  body("email").isEmail().withMessage("Invalid email address").notEmpty(),
  body("password")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Password is required"),
]

export const signUp: ValidationChain[] = [
  body("email").isEmail().withMessage("Invalid email address").notEmpty(),
  body("password")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Password is required"),
  body("name").isString().trim().notEmpty().withMessage("Name is required"),
]
