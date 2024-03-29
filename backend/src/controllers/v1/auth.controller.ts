import express, { type Router } from "express"

import * as authService from "../../services/v1/auth.service"

const authController: Router = express.Router()

authController.route("/signup").post(authService.signUp)

authController.route("/signin").post(authService.signIn)

authController.route("/signout").post(authService.signOut)

authController.route("/current-user").get(authService.getCurrentUser)

export { authController }
