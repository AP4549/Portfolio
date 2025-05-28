"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"
type Style = "cyberpunk" | "retro"

interface ThemeContextType {
  theme: Theme
  style: Style
  setTheme: (theme: Theme) => void
  setStyle: (style: Style) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [style, setStyle] = useState<Style>("cyberpunk")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    const savedStyle = localStorage.getItem("style") as Style
    if (savedTheme) setTheme(savedTheme)
    if (savedStyle) setStyle(savedStyle)
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  useEffect(() => {
    localStorage.setItem("style", style)
    document.documentElement.classList.toggle("retro", style === "retro")
    document.documentElement.classList.toggle("cyberpunk", style === "cyberpunk")
  }, [style])

  return <ThemeContext.Provider value={{ theme, style, setTheme, setStyle }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
