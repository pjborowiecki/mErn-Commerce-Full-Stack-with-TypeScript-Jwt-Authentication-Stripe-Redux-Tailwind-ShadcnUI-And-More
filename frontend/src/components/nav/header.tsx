import { navLinks } from "@/data/nav-links"

import { CartSheet } from "@/components/cart/cart-sheet"
import { Navigation } from "@/components/nav/navigation"
import { NavigationMobile } from "@/components/nav/navigation-mobile"
import { UserDropdown } from "@/components/nav/user-dropdown"
import { ThemeSwitch } from "@/components/theme-switch"

export function Header(): JSX.Element {
  const session = {
    user: {
      name: "Piotr",
      email: "piotr@example.com",
      // image: "https://bit.ly/dan-abramov",
      image: null,
    },
  }

  return (
    <header className="sticky top-0 z-50 flex h-20 w-full bg-background">
      <div className="container flex items-center justify-between p-4">
        <Navigation navLinks={navLinks} />
        <NavigationMobile navLinks={navLinks} />

        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center justify-center gap-1">
            <ThemeSwitch />
            <CartSheet />
            <UserDropdown user={session?.user} />
          </nav>
        </div>
      </div>
    </header>
  )
}
