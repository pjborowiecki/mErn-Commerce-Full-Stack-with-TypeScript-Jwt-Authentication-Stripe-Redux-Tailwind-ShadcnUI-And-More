import * as React from "react"

interface IThemeContext {
  theme: string
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => console.warn("no theme provider"),
} as IThemeContext)

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<string>("light")

  const toggleTheme = React.useCallback(() => {
    const toggleTheme = theme === "light" ? "dark" : "light"
    setTheme(toggleTheme)
    window.localStorage.setItem("theme", toggleTheme)
  }, [theme])

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    localTheme && setTheme(localTheme)
  }, [])

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => React.useContext<IThemeContext>(ThemeContext)
