import type { Product } from "@/types"

import { apiSlice } from "@/state/slices/api-slice"

const PRODUCTS_API_URL = `${import.meta.env.VITE_BASE_API_URL}/products`

export const productsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: PRODUCTS_API_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProduct: builder.query<Product, string>({
      query: (productId) => ({
        url: `${PRODUCTS_API_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductQuery } = productsSlice
