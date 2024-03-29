import "@/styles/globals.css"

import * as React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import { ThemeProvider } from "@/providers/theme-provider"

import { HomePage } from "@/pages/home-page"
import { MainLayout } from "@/pages/layouts/main-layout"
import { NotFoundPage } from "@/pages/not-found-page"
import { SignInPage } from "@/pages/signin-page"
import { SignUpPage } from "@/pages/signup-page"

import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster />
      <TailwindIndicator />
    </ThemeProvider>
  </React.StrictMode>
)
