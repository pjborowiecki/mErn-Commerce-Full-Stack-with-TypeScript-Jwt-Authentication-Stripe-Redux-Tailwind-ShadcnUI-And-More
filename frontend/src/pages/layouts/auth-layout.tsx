import { Outlet } from "react-router-dom"

export function AuthLayout(): JSX.Element {
  return (
    <div className="flex size-full min-h-screen flex-col items-center justify-center">
      <Outlet />
    </div>
  )
}
