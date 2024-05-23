import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({ baseUrl: process.env.BASE_API_URL })

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Product", "Order"],
  endpoints: (_builder) => ({}),
})
