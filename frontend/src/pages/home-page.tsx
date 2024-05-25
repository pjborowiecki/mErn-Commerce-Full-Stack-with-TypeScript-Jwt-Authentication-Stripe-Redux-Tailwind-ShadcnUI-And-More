import { useGetProductsQuery } from "@/state/slices/products-slice"

import { NotFoundPage } from "@/pages/not-found-page"

import { dummyCategories } from "@/db/dummy-categories"

import { CategoryCard } from "@/components/cards/category-card"
import { ProductCard } from "@/components/cards/product-card"

export function HomePage(): JSX.Element {
  const { data: products, isLoading, error } = useGetProductsQuery()

  if (!products) return NotFoundPage()

  return (
    <div className="py-8">
      {isLoading ? (
        <div>TODO: Implement loading skeleton</div>
      ) : error ? (
        <div>TODO: Implement error component</div>
      ) : (
        <div className="space-y-12">
          <section id="categories-section" className="space-y-6">
            <h2 className="text-lg font-medium leading-none">Categories</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {dummyCategories.map((category) => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </div>
          </section>

          <section id="products-section" className="space-y-6">
            <h2 className="text-lg font-medium leading-none">Products</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
