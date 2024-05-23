import type { DummyProduct } from "@/types"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { slugify } from "@/lib/utils"

interface ProductCardProps {
  product: DummyProduct
}

export function ProductCard({
  product,
}: Readonly<ProductCardProps>): JSX.Element {
  return (
    <a href={`/products/${slugify(product.name)}`} aria-label={product.name}>
      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter></CardFooter>
      </Card>
    </a>
  )
}
