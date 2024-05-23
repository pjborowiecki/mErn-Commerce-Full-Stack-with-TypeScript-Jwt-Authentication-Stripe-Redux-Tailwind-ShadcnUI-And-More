import type { DummyCategory } from "@/types"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { slugify } from "@/lib/utils"

interface CategoryCardProps {
  category: DummyCategory
}

export function CategoryCard({
  category,
}: Readonly<CategoryCardProps>): JSX.Element {
  return (
    <a
      href={`/categories/${slugify(category.name)}`}
      aria-label={category.name}
    >
      <Card>
        <CardHeader>
          <CardTitle>{category.name}</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter></CardFooter>
      </Card>
    </a>
  )
}
