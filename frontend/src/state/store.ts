import { configureStore } from "@reduxjs/toolkit"

import { apiSlice } from "@/state/slices/api-slice"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: import.meta.env.NODE_ENV === "development",
})
