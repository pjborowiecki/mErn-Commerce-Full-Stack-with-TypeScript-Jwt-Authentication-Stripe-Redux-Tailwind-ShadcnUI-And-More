import { siteConfig } from "@/config/site"

import { type ButtonProps, buttonVariants } from "@/components/ui/button"

import { cn } from "@/lib/utils"

export function HeaderLogo({ className }: Readonly<ButtonProps>): JSX.Element {
  return (
    <a
      href="/"
      className={cn((buttonVariants({ variant: "link" }), className))}
    >
      {siteConfig.name}
      <span className="sr-only">Home Page</span>
    </a>
  )
}
