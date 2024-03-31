import express, { type Router } from "express"

import * as productsService from "../../services/v1/products.service"
import { asyncHandler } from "../../middleware/async-handler.middleware"

const productsController: Router = express.Router()

productsController.route("/").get(asyncHandler(productsService.getAllProducts))

productsController.route("/:id").get(asyncHandler(productsService.getProductById))

export { productsController }
