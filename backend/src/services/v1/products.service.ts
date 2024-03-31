import { type Request, type Response } from "express"
import { Product } from "../../models/v1/product.model"

export async function getAllProducts(_request: Request, response: Response): Promise<void> {
  const products = await Product.find({})
  if (products) response.status(200).json(products)
  response.status(404).json({ message: "No products found" })
}

export async function getProductById(request: Request, response: Response): Promise<void> {
  const product = await Product.findById(request.params.id)
  if (product) response.status(200).json(product)
  response.status(404).json({ message: "Product not found" })
}
