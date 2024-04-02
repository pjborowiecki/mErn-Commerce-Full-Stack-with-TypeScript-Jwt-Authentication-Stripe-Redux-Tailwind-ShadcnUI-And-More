import express, { type Router } from "express"
import asyncHandler from "express-async-handler"

import * as productsService from "../../services/v1/products.service"

const productsController: Router = express.Router()

productsController.route("/").get(asyncHandler(productsService.getAllProducts))

productsController
  .route("/:id")
  .get(asyncHandler(productsService.getProductById))

export { productsController }
