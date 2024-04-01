import express, { type Router } from "express"
import asyncHandler from "express-async-handler"

import * as authService from "../../services/v1/auth.service"

const authController: Router = express.Router()

authController.route("/signup").post(authService.signUp)

authController.route("/signin").post(authService.signIn)

authController.route("/signout").post(authService.signOut)

authController.route("/users").get(authService.getAllUsers)

authController.route("/users/:id").get(authService.getUserById)
authController.route("/users/:id").put(authService.updateUserById)
authController.route("/users/:id").delete(authService.deleteUserById)

authController.route("/current-user").get(authService.getCurrentUser)
authController.route("/current-user").put(authService.updateCurrentUser)
authController.route("/current-user").delete(authService.deleteUserById)

export { authController }
