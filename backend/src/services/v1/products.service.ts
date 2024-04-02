import { type Request, type Response } from "express"
import { Product } from "../../models/v1/product.model"

export async function getAllProducts(
  _request: Request,
  response: Response
): Promise<void> {
  const products = await Product.find({})
  if (products.length > 0) {
    response.status(200).json(products)
  } else {
    throw new Error("No products found")
  }
}

export async function getProductById(
  request: Request,
  response: Response
): Promise<void> {
  const product = await Product.findById(request.params.id)
  if (product) {
    response.status(200).json(product)
  } else {
    throw new Error("Product not found")
  }
}
