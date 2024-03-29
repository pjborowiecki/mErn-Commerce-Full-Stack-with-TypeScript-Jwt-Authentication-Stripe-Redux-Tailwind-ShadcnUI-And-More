import express, { type Router } from "express"

import * as mainService from "../../services/v1/main.service"

const mainController: Router = express.Router()

mainController.route("/health-check").get(mainService.healthCheck)

export { mainController }
