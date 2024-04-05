import express, { type Router } from "express"
import asyncHandler from "express-async-handler"

import * as authService from "../../services/v1/auth.service"
import * as authValidator from "../../validators/v1/auth.validator"
import { requestValidator } from "../../middleware/request-validator.middleware"
import {
  authenticationHandler,
  authorizationHandler,
} from "../../middleware/auth-handler.middleware"

const authController: Router = express.Router()

authController
  .route("/signup")
  .post(
    authValidator.signUpValidationSchema,
    requestValidator,
    asyncHandler(authService.signUp)
  )

authController
  .route("/signin")
  .post(
    authValidator.signInValidationSchema,
    requestValidator,
    asyncHandler(authService.signIn)
  )

authController
  .route("/signout")
  .post(requestValidator, authenticationHandler, authService.signOut)

authController
  .route("/users")
  .get(
    requestValidator,
    authenticationHandler,
    authorizationHandler,
    authService.getAllUsers
  )

authController
  .route("/users/:id")
  .get(
    requestValidator,
    authenticationHandler,
    authorizationHandler,
    authService.getUserById
  )
  .put(
    requestValidator,
    authenticationHandler,
    authorizationHandler,
    authService.updateUserById
  )
  .delete(
    requestValidator,
    authenticationHandler,
    authorizationHandler,
    authService.deleteUserById
  )

authController
  .route("/current-user")
  .get(
    requestValidator,
    authenticationHandler,
    asyncHandler(authService.getCurrentUser)
  )
  .put(
    authenticationHandler,
    authValidator.updateCurrentUserValidationSchema,
    requestValidator,
    asyncHandler(authService.updateCurrentUser)
  )
  .delete(
    requestValidator,
    authenticationHandler,
    asyncHandler(authService.deleteUserById)
  )

export { authController }
