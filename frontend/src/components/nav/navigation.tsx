import { Link } from "react-router-dom"

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
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                <Link to={link.href}>{link.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
