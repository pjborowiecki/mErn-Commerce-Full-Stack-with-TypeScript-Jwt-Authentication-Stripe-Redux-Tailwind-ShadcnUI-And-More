import { useParams } from "react-router-dom"

import { dummyCategories } from "@/db/dummy-categories"

export function CategoryPage(): JSX.Element {
  const { id: categoryId } = useParams()

  return <div>Category Page</div>
}
