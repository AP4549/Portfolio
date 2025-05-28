"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { StyleToggle } from "@/components/style-toggle"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Terminal } from "lucide-react"
import { useTheme } from "@/components/theme-context"

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()
  const { theme, style } = useTheme()

  if (!isMobile) return null

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="flex items-center gap-2 text-lg">
          <Terminal
              className={`w-6 h-6 ${theme === "light" ? "text-blue-600" : style === "retro" ? "text-green-400" : "text-cyan-400"} animate-pulse`}
            />
            <h1
              className={`text-2xl font-bold ${style === "retro" ? "font-mono pixel-text" : ""} ${theme === "light" ? "bg-gradient-to-r from-blue-600 to-purple-600" : style === "retro" ? "bg-gradient-to-r from-green-400 to-yellow-400" : "bg-gradient-to-r from-cyan-400 to-pink-400"} bg-clip-text text-transparent ${style === "cyberpunk" ? "glitch-text" : ""}`}
            >
              {style === "retro" ? "AYUSH_16BIT" : "AYUSH.EXE"}
            </h1>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className={cn("w-64 bg-background p-4 flex flex-col",
        theme === "light" ? "bg-white/80" : style === "retro" ? "bg-gray-900/80" : "bg-black/80",
        "backdrop-blur-md border-r",
        theme === "light" ? "border-slate-200" : style === "retro" ? "border-green-400/30" : "border-cyan-400/30"
      )}>
        <div className="flex flex-col gap-4">
           {["About", "Resume", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${theme === "light" ? "text-slate-600 hover:text-blue-600" : style === "retro" ? "text-green-300 hover:text-yellow-400" : "text-cyan-300 hover:text-pink-400"} transition-colors duration-300 ${style === "retro" ? "font-mono pixel-text" : ""}`}
                   onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
          <div className="flex gap-4 mt-4">
            <ThemeToggle />
            <StyleToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 