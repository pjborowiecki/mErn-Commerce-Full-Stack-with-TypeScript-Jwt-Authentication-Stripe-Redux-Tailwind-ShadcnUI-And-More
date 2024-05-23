import { dummyCategories } from "@/db/dummy-categories"
import { dummyProducts } from "@/db/dummy-products"

import { CategoryCard } from "@/components/cards/category-card"
import { ProductCard } from "@/components/cards/product-card"

export function HomePage(): JSX.Element {
  return (
    <div className="space-y-12 py-8">
      <section id="categories-section" className="space-y-6">
        <h2 className="text-lg font-medium leading-none">Categories</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {dummyCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section id="products-section" className="space-y-6">
        <h2 className="text-lg font-medium leading-none">Products</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
