import { Link } from "react-router-dom"

import { Button, type ButtonProps } from "@/components/ui/button"

import { cn } from "@/lib/utils"

import { Icons } from "@/components/icons"

export function CartSheet({
  className,
  ...props
}: Readonly<ButtonProps>): JSX.Element {
  return (
    <Link to="/cart" className="rounded-full">
      <Button
        variant="ghost"
        className={cn("size-8 rounded-full px-0", className)}
        {...props}
        asChild
      >
        <Icons.shoppingCart className="size-[34px] rounded-full" />
      </Button>
    </Link>
  )
}
