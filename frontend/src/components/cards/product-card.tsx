import { Link } from "react-router-dom"

import type { DummyProduct } from "@/types"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { formatPrice, slugify } from "@/lib/utils"

import { Rating } from "@/components/rating"

interface ProductCardProps {
  product: DummyProduct
}

export function ProductCard({
  product,
}: Readonly<ProductCardProps>): JSX.Element {
  return (
    <Link to={`/products/${slugify(product.name)}`} aria-label={product.name}>
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
