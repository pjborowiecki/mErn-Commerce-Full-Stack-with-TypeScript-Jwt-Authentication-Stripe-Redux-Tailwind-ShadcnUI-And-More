import { useTheme } from "@/providers/theme-provider"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const ThemeSwitch = () => {
  const { toggleTheme, theme } = useTheme()
  console.log("Theme", theme)

  return (
    <Button variant="navbarIcon" size="icon" onClick={toggleTheme}>
      <Icons.sun
        className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <Icons.moon
        className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />
    </Button>
  )
}
