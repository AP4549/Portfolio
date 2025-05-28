"use client"

import { Button } from "@/components/ui/button"
import { Gamepad2, Zap } from "lucide-react"
import { useTheme } from "./theme-context"

export function StyleToggle() {
  const { style, setStyle } = useTheme()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setStyle(style === "cyberpunk" ? "retro" : "cyberpunk")}
      className="border-pink-400/50 text-pink-400 hover:bg-pink-400/10 hover:border-pink-400 transition-all duration-300"
    >
      {style === "cyberpunk" ? <Gamepad2 className="h-4 w-4" /> : <Zap className="h-4 w-4" />}
      <span className="sr-only">Toggle style</span>
    </Button>
  )
}
