import { Link } from "react-router-dom"

import type { DummyCategory } from "@/types"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CategoryCardProps {
  category: DummyCategory
}

export function CategoryCard({
  category,
}: Readonly<CategoryCardProps>): JSX.Element {
  return (
    <Link to={`/categories/${category._id}`} aria-label={category.name}>
      <Card className="rounded-md bg-accent/20 hover:bg-accent/60">
        <CardHeader>
          <CardTitle>{category.name}</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Link>
  )
}
