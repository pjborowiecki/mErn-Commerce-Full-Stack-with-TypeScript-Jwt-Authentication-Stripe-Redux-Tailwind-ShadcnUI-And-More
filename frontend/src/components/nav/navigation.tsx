import type { NavLink } from "@/types"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { cn } from "@/lib/utils"

import { HeaderLogo } from "@/components/nav/header-logo"

interface NavigationProps {
  navLinks: NavLink[]
}

export function Navigation({ navLinks }: NavigationProps): JSX.Element {
  return (
    <div className="hidden gap-6 lg:flex lg:items-center">
      <HeaderLogo className="mr-16 text-lg font-semibold tracking-tight" />
      <NavigationMenu className="hidden transition-all duration-300 ease-in-out md:flex">
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.label} asChild>
              <NavigationMenuLink
                href={link.href}
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
