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
    authValidator.signUp,
    requestValidator,
    asyncHandler(authService.signUp)
  )

authController
  .route("/signin")
  .post(
    authValidator.signIn,
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
  .get(authenticationHandler, authorizationHandler, authService.getUserById)
  .put(authenticationHandler, authorizationHandler, authService.updateUserById)
  .delete(
    authenticationHandler,
    authorizationHandler,
    authService.deleteUserById
  )

authController
  .route("/users/current-user")
  .get(authenticationHandler, authService.getCurrentUser)
  .put(authenticationHandler, authService.updateCurrentUser)
  .delete(authenticationHandler, authService.deleteUserById)

export { authController }
