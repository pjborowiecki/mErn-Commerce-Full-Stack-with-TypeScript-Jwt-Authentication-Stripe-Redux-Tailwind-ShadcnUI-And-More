import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Balancer from "react-wrap-balancer"

import { useGetProductQuery } from "@/state/slices/products-slice"

import { NotFoundPage } from "@/pages/not-found-page"

import { Button } from "@/components/ui/button"

import { formatPrice } from "@/lib/utils"

import { Icons } from "@/components/icons"
import { Rating } from "@/components/rating"

export function ProductPage(): JSX.Element {
  const { id: productId } = useParams()

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductQuery(productId ?? "")

  if (!product) return NotFoundPage()

  return (
    <div className="space-y-4">
      <Link to="/">
        <Button variant="ghost" className="gap-2 pl-2">
          <Icons.arrowLeft className="size-4" />
          Go Back
          <span className="sr-only">Go Back</span>
        </Button>
      </Link>

      {isLoading ? (
        <div>TODO: Implement loading skeletons</div>
      ) : error ? (
        <div>TODO: Implement Error component</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-md border px-8 py-6">images</div>
          <div className="space-y-4 rounded-md border px-6 py-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-muted-foreground">
              <Balancer>{product.description}</Balancer>
            </p>
            <p className="font-medium">{formatPrice(product.price)}</p>

            <Rating rating={product.rating} numReviews={product.numReviews} />
            <div className="flex items-center justify-between">
              <Button disabled={product.countInStock < 1}>Add to Cart</Button>

              <p>
                {product.countInStock && `${product.countInStock} in stock`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
