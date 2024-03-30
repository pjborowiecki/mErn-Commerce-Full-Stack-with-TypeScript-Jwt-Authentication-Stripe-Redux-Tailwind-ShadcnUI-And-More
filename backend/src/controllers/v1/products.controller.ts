import express, { type Router } from "express"

import * as productsService from "../../services/v1/products.service"

const productsController: Router = express.Router()

productsController.route("/").get(productsService.getAllProducts)

productsController.route("/:id").get(productsService.getProductById)

export { productsController }
