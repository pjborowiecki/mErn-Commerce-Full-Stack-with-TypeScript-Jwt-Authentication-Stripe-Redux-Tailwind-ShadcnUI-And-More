import { useTheme } from "@/providers/theme-provider"

import { Button, type ButtonProps } from "@/components/ui/button"

import { cn } from "@/lib/utils"

import { Icons } from "@/components/icons"

export const ThemeSwitch = ({
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const { toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className={cn("size-8 rounded-full px-0", className)}
      {...props}
    >
      <Icons.sun
        className="size-8 rotate-0 scale-55 rounded-full transition-all dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <Icons.moon
        className="absolute size-8 rotate-90 scale-0 rounded-full transition-all dark:rotate-0 dark:scale-55"
        aria-hidden="true"
      />
    </Button>
  )
}
