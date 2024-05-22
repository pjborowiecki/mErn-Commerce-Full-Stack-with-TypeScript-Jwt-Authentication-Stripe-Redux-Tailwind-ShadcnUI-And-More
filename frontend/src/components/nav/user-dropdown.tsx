import type { User } from "@/types"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button, type ButtonProps } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { cn } from "@/lib/utils"

import { Icons } from "@/components/icons"

interface UserDropdownProps
  extends React.ComponentPropsWithRef<typeof DropdownMenuTrigger>,
    ButtonProps {
  user: User | null
}

export function UserDropdown({
  user,
  className,
  ...props
}: Readonly<UserDropdownProps>) {
  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              className={cn("size-8 rounded-full", className)}
              {...props}
            >
              <Avatar className="size-8">
                <AvatarImage
                  src={user.image ?? ""}
                  alt={user.name ?? "current user's avatar"}
                />
                <AvatarFallback className="flex size-8 items-center justify-center">
                  <Icons.user className="p-1" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 rounded-sm"
            align="end"
            forceMount
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <a href="/profile" aria-label="profile">
                  <Icons.user className="mr-2 size-4" aria-hidden="true" />
                  Profile
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="/settings" aria-label="settings">
                  <Icons.settings className="mr-2 size-4" aria-hidden="true" />
                  Settings
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a href="/signout" aria-label="sign out" className="bg-accent">
                  <Icons.logout className="mr-2 size-4" aria-hidden="true" />
                  Sign Out
                </a>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <a href="/signup">
          <Button size="sm" className={cn(className)} {...props} asChild>
            Get started
            <span className="sr-only">Get started</span>
          </Button>
        </a>
      )}
    </>
  )
}
