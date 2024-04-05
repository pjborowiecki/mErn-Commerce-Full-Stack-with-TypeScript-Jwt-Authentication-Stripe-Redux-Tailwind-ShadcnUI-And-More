import { body, type ValidationChain } from "express-validator"

const emailSchema = body("email")
  .isEmail()
  .withMessage("Invalid email address")
  .notEmpty()
  .withMessage("Email is required")
  .isLength({ min: 5, max: 32 })
  .withMessage("Email must be between 5 and 32 characters long")

const passwordSchema = body("password")
  .isString()
  .trim()
  .notEmpty()
  .withMessage("Password is required")
  .isLength({ min: 8 })
  .withMessage("Password must be at least 8 characters long")

const nameSchema = body("name")
  .isString()
  .trim()
  .notEmpty()
  .withMessage("Name is required")
  .isLength({ min: 3, max: 32 })
  .withMessage("Name must be between 3 and 32 characters long")

export const signInValidationSchema: ValidationChain[] = [
  emailSchema,
  passwordSchema,
]

export const signUpValidationSchema: ValidationChain[] = [
  nameSchema,
  emailSchema,
  passwordSchema,
]

export const updateCurrentUserValidationSchema: ValidationChain[] = [
  body("name").optional().notEmpty().withMessage("Name cannot be empty"),
  body("email")
    .optional()
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password")
    .optional()
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isString()
    .trim(),
]
