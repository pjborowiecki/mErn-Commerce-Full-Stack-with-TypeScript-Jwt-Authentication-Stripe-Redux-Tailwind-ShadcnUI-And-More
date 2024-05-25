import { Link } from "react-router-dom"

import type { Product } from "@/types"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { formatPrice } from "@/lib/utils"

import { Rating } from "@/components/rating"

interface ProductCardProps {
  product: Product
}

export function ProductCard({
  product,
}: Readonly<ProductCardProps>): JSX.Element {
  return (
    <Link to={`/products/${product._id}`} aria-label={product.name}>
      <Card className="rounded-md bg-accent/20 hover:bg-accent/60">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.category}</CardDescription>
        </CardHeader>
        <CardContent>
          <span>{formatPrice(product.price)}</span>
        </CardContent>
        <CardFooter>
          <Rating rating={product.rating} numReviews={product.numReviews} />
        </CardFooter>
      </Card>
    </Link>
  )
}
