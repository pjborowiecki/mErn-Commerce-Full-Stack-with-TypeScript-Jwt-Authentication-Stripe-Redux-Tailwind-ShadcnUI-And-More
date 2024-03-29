import { Outlet } from "react-router-dom"

import { Footer } from "@/components/nav/footer"
import { Header } from "@/components/nav/header"

export function MainLayout(): JSX.Element {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
