import express, { type Router } from "express"
import asyncHandler from "express-async-handler"

import * as authService from "../../services/v1/auth.service"
import * as authValidator from "../../validators/v1/auth.validator"
import { requestValidator } from "../../middleware/request-validator.middleware"

const authController: Router = express.Router()

authController.route("/signup").post(authService.signUp)

authController.route("/signin").post(authValidator.signIn, requestValidator, asyncHandler(authService.signIn))

authController.route("/signout").post(authService.signOut)

authController.route("/users").get(authService.getAllUsers)

authController.route("/users/:id").get(authService.getUserById)
authController.route("/users/:id").put(authService.updateUserById)
authController.route("/users/:id").delete(authService.deleteUserById)

authController.route("/users/current-user").get(authService.getCurrentUser)
authController.route("/users/current-user").put(authService.updateCurrentUser)
authController.route("/users/current-user").delete(authService.deleteUserById)

export { authController }
