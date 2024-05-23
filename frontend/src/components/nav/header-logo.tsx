import { siteConfig } from "@/config/site"

import { Button, type ButtonProps } from "@/components/ui/button"

import { cn } from "@/lib/utils"

import { Icons } from "@/components/icons"

export function HeaderLogo({
  className,
  ...props
}: Readonly<ButtonProps>): JSX.Element {
  return (
    <a href="/">
      <Button
        variant="link"
        className={cn("gap-1.5 px-0", className)}
        {...props}
      >
        <Icons.logo className="size-6" aria-hidden="true" />
        <span className="text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </span>
        <span className="sr-only">Home Page</span>
      </Button>
    </a>
  )
}
