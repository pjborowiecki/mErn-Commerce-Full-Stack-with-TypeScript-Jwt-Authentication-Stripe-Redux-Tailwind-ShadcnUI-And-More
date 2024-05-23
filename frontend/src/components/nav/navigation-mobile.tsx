import { siteConfig } from "@/config/site"

import * as React from "react"

// import { useLocation } from "react-router-dom"
import type { NavLink } from "@/types"

import { useMediaQuery } from "@/hooks/use-media-query"

import {
  Accordion,
  // AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

import { Icons } from "@/components/icons"

interface NavigationMobileProps {
  navLinks: NavLink[]
}

interface NavigationMobileLinkProps extends React.PropsWithChildren {
  href: string
  disabled?: boolean
  segment: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function NavigationMobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: Readonly<NavigationMobileLinkProps>): JSX.Element {
  return (
    <a
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        href.includes(segment) && "text-foreground",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </a>
  )
}

export function NavigationMobile({
  navLinks,
}: Readonly<NavigationMobileProps>): JSX.Element | null {
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  // const segment = useLocation().pathname
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  if (isDesktop) return null

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.menu className="size-5" aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0 pt-9">
        <div className="w-full px-7">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-1.5"
          >
            <Icons.logo aria-hidden="true" className="size-6" />
            <span className="font-bold">{siteConfig.name}</span>
            <span className="sr-only">Home Page</span>
          </a>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="pl-1 pr-7">
            <Accordion type="multiple" className="w-full">
              {navLinks?.map((link, index) => (
                <AccordionItem key={index} value={link.label}>
                  <AccordionTrigger className="text-sm capitalize">
                    {link.label}
                  </AccordionTrigger>
                  {/* <AccordionContent></AccordionContent> */}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
