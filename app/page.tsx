"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, MapPin, Users, Star, Terminal, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { StyleToggle } from "@/components/style-toggle"
import { useTheme } from "@/components/theme-context"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const { theme, style } = useTheme()

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const projects = [
    {
      title: "ParkiSense",
      description:
        "AI-powered application designed to assist in the early detection of Parkinson's disease through keystroke dynamics, voice analysis, and an AI chatbot.",
      tech: ["Python", "Machine Learning", "Jupyter Notebook"],
      github: "https://github.com/AP4549/ParkiSense",
      category: "Healthcare AI",
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Chart-Whisper",
      description:
        "AI-powered application that analyzes chart images, extracts data, and lets you ask questions about your charts using natural language.",
      tech: ["TypeScript", "AI/ML", "Data Visualization"],
      github: "https://github.com/AP4549/Chart-Whisper",
      category: "Data Analysis",
      color: "from-cyan-400 to-blue-600",
    },
    {
      title: "Premier League Classification",
      description:
        "Interactive tool for sports enthusiasts, researchers, and developers interested in image classification and sports analytics.",
      tech: ["Python", "Machine Learning", "Jupyter Notebook"],
      github: "https://github.com/AP4549/premier_league_classification",
      category: "Sports Analytics",
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Agile-Support",
      description:
        "Modern, AI-powered support desk application that combines agile project management with intelligent ticket handling.",
      tech: ["TypeScript", "React", "AI Integration"],
      github: "https://github.com/AP4549/Agile-Support",
      category: "Business Tools",
      color: "from-orange-400 to-red-600",
    },
    {
      title: "Forex-Future",
      description:
        "Comprehensive Forex price prediction and analysis platform that combines advanced machine learning models with interactive data visualizations.",
      tech: ["Python", "Machine Learning", "Jupyter Notebook"],
      github: "https://github.com/AP4549/Forex-Future",
      category: "Financial Analysis",
      color: "from-yellow-400 to-orange-600",
    },
    {
      title: "Cloud Computing Concepts",
      description: "Distributed Systems Projects covering MP1 & MP2 implementations and cloud computing fundamentals.",
      tech: ["C++", "Distributed Systems", "Cloud Computing"],
      github: "https://github.com/AP4549/Cloud-Computing-Concepts-Part-1-2",
      category: "Systems Programming",
      color: "from-indigo-400 to-purple-600",
    },
  ]

  const skills = [
    "Python",
    "Machine Learning",
    "Data Science",
    "TypeScript",
    "React",
    "Next.js",
    "Jupyter Notebook",
    "AI/ML",
    "Data Visualization",
    "C++",
    "Cloud Computing",
    "Distributed Systems",
    "Natural Language Processing",
    "Computer Vision",
  ]

  // Dynamic classes based on theme and style
  const bgClass =
    style === "retro"
      ? theme === "light"
        ? "bg-gradient-to-br from-green-200 via-yellow-100 to-orange-200"
        : "bg-gradient-to-br from-gray-900 via-green-900 to-gray-800"
      : theme === "light"
        ? "bg-gradient-to-br from-slate-50 to-slate-100"
        : "bg-black"

  const textClass =
    style === "retro"
      ? theme === "light"
        ? "text-gray-900"
        : "text-green-400"
      : theme === "light"
        ? "text-slate-900"
        : "text-white"

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} overflow-x-hidden relative transition-all duration-500`}>
      {/* Animated Background - only for cyberpunk style */}
      {style === "cyberpunk" && (
        <div className="fixed inset-0 z-0">
          <div
            className={`absolute inset-0 ${theme === "light" ? "bg-gradient-to-br from-blue-100/20 via-white to-purple-100/20" : "bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"}`}
          ></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

          {/* Floating Geometric Shapes */}
          <div
            className={`absolute top-20 left-10 w-20 h-20 border-2 ${theme === "light" ? "border-blue-400" : "border-cyan-400"} rotate-45 animate-pulse opacity-30`}
          ></div>
          <div
            className={`absolute top-40 right-20 w-16 h-16 border-2 ${theme === "light" ? "border-purple-400" : "border-pink-400"} animate-spin-slow opacity-30`}
          ></div>
          <div
            className={`absolute bottom-40 left-20 w-24 h-24 border-2 ${theme === "light" ? "border-orange-400" : "border-yellow-400"} rotate-12 animate-bounce-slow opacity-30`}
          ></div>
          <div
            className={`absolute bottom-20 right-40 w-12 h-12 border-2 ${theme === "light" ? "border-green-500" : "border-green-400"} animate-pulse opacity-30`}
          ></div>

          {/* Grid Pattern */}
          <div
            className={`absolute inset-0 bg-[linear-gradient(${theme === "light" ? "rgba(59,130,246,0.03)" : "rgba(120,119,198,0.03)"}_1px,transparent_1px),linear-gradient(90deg,${theme === "light" ? "rgba(59,130,246,0.03)" : "rgba(120,119,198,0.03)"}_1px,transparent_1px)] bg-[size:50px_50px]`}
          ></div>
        </div>
      )}

      {/* Retro 16-bit Background */}
      {style === "retro" && (
        <div className="fixed inset-0 z-0">
          {/* Pixelated Grid */}
          <div
            className={`absolute inset-0 bg-[linear-gradient(${theme === "light" ? "rgba(34,197,94,0.1)" : "rgba(34,197,94,0.05)"}_2px,transparent_2px),linear-gradient(90deg,${theme === "light" ? "rgba(34,197,94,0.1)" : "rgba(34,197,94,0.05)"}_2px,transparent_2px)] bg-[size:20px_20px]`}
          ></div>

          {/* Pixelated Shapes */}
          <div
            className={`absolute top-20 left-10 w-16 h-16 ${theme === "light" ? "bg-green-500" : "bg-green-400"} pixel-art animate-bounce-slow opacity-60`}
          ></div>
          <div
            className={`absolute top-40 right-20 w-12 h-12 ${theme === "light" ? "bg-yellow-500" : "bg-yellow-400"} pixel-art animate-pulse opacity-60`}
          ></div>
          <div
            className={`absolute bottom-40 left-20 w-20 h-20 ${theme === "light" ? "bg-red-500" : "bg-red-400"} pixel-art animate-bounce-slow opacity-60`}
          ></div>
          <div
            className={`absolute bottom-20 right-40 w-8 h-8 ${theme === "light" ? "bg-blue-500" : "bg-blue-400"} pixel-art animate-pulse opacity-60`}
          ></div>
        </div>
      )}

      {/* Mouse Follower - only for cyberpunk */}
      {style === "cyberpunk" && (
        <div
          className={`fixed w-6 h-6 ${theme === "light" ? "bg-blue-500" : "bg-cyan-400"} rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out`}
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
          }}
        ></div>
      )}

      {/* Header */}
      <header
        className={`relative z-10 ${theme === "light" ? "bg-white/80" : style === "retro" ? "bg-gray-900/80" : "bg-black/80"} backdrop-blur-md border-b ${theme === "light" ? "border-slate-200" : style === "retro" ? "border-green-400/30" : "border-cyan-400/30"} sticky top-0`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal
              className={`w-6 h-6 ${theme === "light" ? "text-blue-600" : style === "retro" ? "text-green-400" : "text-cyan-400"} animate-pulse`}
            />
            <h1
              className={`text-2xl font-bold ${style === "retro" ? "font-mono pixel-text" : ""} ${theme === "light" ? "bg-gradient-to-r from-blue-600 to-purple-600" : style === "retro" ? "bg-gradient-to-r from-green-400 to-yellow-400" : "bg-gradient-to-r from-cyan-400 to-pink-400"} bg-clip-text text-transparent ${style === "cyberpunk" ? "glitch-text" : ""}`}
            >
              {style === "retro" ? "AYUSH_16BIT" : "AYUSH.EXE"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <nav className="flex gap-6">
              {["About", "Resume", "Projects", "Skills", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${theme === "light" ? "text-slate-600 hover:text-blue-600" : style === "retro" ? "text-green-300 hover:text-yellow-400" : "text-cyan-300 hover:text-pink-400"} transition-all duration-300 ${style === "cyberpunk" ? "hover:glow-text" : ""} relative group ${style === "retro" ? "font-mono pixel-text" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 ${theme === "light" ? "bg-gradient-to-r from-blue-600 to-purple-600" : style === "retro" ? "bg-gradient-to-r from-green-400 to-yellow-400" : "bg-gradient-to-r from-cyan-400 to-pink-400"} group-hover:w-full transition-all duration-300`}
                  ></span>
                </a>
              ))}
            </nav>

            {/* Theme Toggle Buttons */}
            <div className="flex gap-2">
              <ThemeToggle />
              <StyleToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1 w-full">
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-4 sm:mb-6">
              <Badge
                className={`${theme === "light" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : style === "retro" ? "bg-green-500 text-black pixel-text" : "bg-gradient-to-r from-cyan-500 to-blue-500 text-black"} font-bold text-xs sm:text-sm ${style === "cyberpunk" ? "animate-pulse" : style === "retro" ? "animate-bounce-slow" : ""}`}
              >
                <Zap className="w-3 h-3 mr-1" />
                {style === "retro" ? "DATA_SCIENTIST" : "DATA SCIENTIST"}
              </Badge>
              <Badge
                className={`${theme === "light" ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : style === "retro" ? "bg-yellow-500 text-black pixel-text" : "bg-gradient-to-r from-pink-500 to-purple-500 text-white"} border-0 text-xs sm:text-sm ${style === "cyberpunk" ? "animate-bounce-slow" : style === "retro" ? "animate-pulse" : ""}`}
              >
                {style === "retro" ? "HIRE_ME" : "AVAILABLE FOR HIRE"}
              </Badge>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight ${style === "retro" ? "font-mono pixel-text" : ""}`}
            >
              <span
                className={`block ${theme === "light" ? "text-slate-900" : style === "retro" ? "text-green-400" : "text-white"} ${style === "cyberpunk" ? "glitch-text" : ""}`}
                data-text="HI, I'M"
              >
                {style === "retro" ? "HEY_IM" : "HI, I'M"}
              </span>
              <span
                className={`block ${theme === "light" ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" : style === "retro" ? "bg-gradient-to-r from-green-400 via-yellow-400 to-red-400" : "bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400"} bg-clip-text text-transparent ${style === "cyberpunk" ? "animate-gradient-x" : ""}`}
              >
                AYUSH
              </span>
            </h1>

            <div
              className={`text-sm sm:text-base xl:text-xl ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-300" : "text-cyan-300"} mb-6 sm:mb-8 leading-relaxed ${style === "retro" ? "font-mono pixel-text" : "font-mono"}`}
            >
              <div className={style === "cyberpunk" ? "typing-animation" : ""}>
                {style === "retro"
                  ? "> 3RD_YEAR_DATA_SCIENCE_STUDENT_"
                  : "> 3rd year Data Science student passionate about AI_"}
              </div>
              <div className={style === "cyberpunk" ? "typing-animation" : ""} style={{ animationDelay: "2s" }}>
                {style === "retro" ? "> BUILDING_COOL_STUFF_" : "> Building intelligent solutions for tomorrow_"}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
              <Button
                size="lg"
                className={`${theme === "light" ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white" : style === "retro" ? "bg-green-500 hover:bg-green-400 text-black pixel-text" : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black"} font-bold transform hover:scale-105 transition-all duration-300 ${style === "cyberpunk" ? "hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]" : ""} group w-full sm:w-auto`}
                onClick={() => (window.location.href = "mailto:panditaayush4549@gmail.com")}
              >
                <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                {style === "retro" ? "SEND_EMAIL" : "SEND EMAIL"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`${theme === "light" ? "border-purple-400 text-purple-600 hover:bg-purple-400 hover:text-white" : style === "retro" ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black pixel-text" : "border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black"} transform hover:scale-105 transition-all duration-300 ${style === "cyberpunk" ? "hover:shadow-[0_0_30px_rgba(244,114,182,0.7)]" : ""}`}
                asChild
              >
                <a href="https://github.com/AP4549" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  {style === "retro" ? "FOLLOW_ON_GITHUB" : "FOLLOW ON GITHUB"}
                </a>
              </Button>
            </div>

            <div
              className={`flex flex-wrap items-center justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-sm ${theme === "light" ? "text-slate-500" : style === "retro" ? "text-green-400" : "text-cyan-400"} ${style === "retro" ? "font-mono pixel-text" : "font-mono"}`}
            >
              <div
                className={`flex items-center gap-1 ${theme === "light" ? "hover:text-purple-600" : style === "retro" ? "hover:text-yellow-400" : "hover:text-pink-400"} transition-colors`}
              >
                <MapPin className="w-4 h-4 animate-pulse" />
                {style === "retro" ? "INDIA_UTC+5:30" : "INDIA (UTC+5:30)"}
              </div>
              <div
                className={`flex items-center gap-1 ${theme === "light" ? "hover:text-purple-600" : style === "retro" ? "hover:text-yellow-400" : "hover:text-pink-400"} transition-colors`}
              >
                <Users className="w-4 h-4" />
                {style === "retro" ? "4_FOLLOWERS" : "4 FOLLOWERS"}
              </div>
              <div
                className={`flex items-center gap-1 ${theme === "light" ? "hover:text-purple-600" : style === "retro" ? "hover:text-yellow-400" : "hover:text-pink-400"} transition-colors`}
              >
                <Star className="w-4 h-4 animate-pulse" />
                {style === "retro" ? "1_STAR" : "1 STAR"}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="w-80 h-80 relative">
              {style === "cyberpunk" && (
                <>
                  {/* Rotating Rings */}
                  <div
                    className={`absolute inset-0 border-2 ${theme === "light" ? "border-blue-400" : "border-cyan-400"} rounded-full animate-spin-slow opacity-30`}
                  ></div>
                  <div
                    className={`absolute inset-4 border-2 ${theme === "light" ? "border-purple-400" : "border-pink-400"} rounded-full animate-spin-reverse opacity-40`}
                  ></div>
                  <div
                    className={`absolute inset-8 border-2 ${theme === "light" ? "border-orange-400" : "border-yellow-400"} rounded-full animate-spin-slow opacity-30`}
                  ></div>
                </>
              )}

              {style === "retro" && (
                <>
                  {/* Pixelated Squares */}
                  <div
                    className={`absolute inset-0 border-4 ${theme === "light" ? "border-green-500" : "border-green-400"} pixel-art animate-pulse opacity-30`}
                  ></div>
                  <div
                    className={`absolute inset-8 border-4 ${theme === "light" ? "border-yellow-500" : "border-yellow-400"} pixel-art animate-bounce-slow opacity-40`}
                  ></div>
                  <div
                    className={`absolute inset-16 border-4 ${theme === "light" ? "border-red-500" : "border-red-400"} pixel-art animate-pulse opacity-30`}
                  ></div>
                </>
              )}

              {/* Center Avatar */}
              <div
                className={`absolute inset-8 sm:inset-12 ${theme === "light" ? "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500" : style === "retro" ? "bg-gradient-to-br from-green-400 via-yellow-500 to-red-500" : "bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500"} ${style === "retro" ? "pixel-art" : "rounded-full"} p-1 animate-pulse`}
              >
                <div
                  className={`w-full h-full ${style === "retro" ? "pixel-art bg-gray-900" : "rounded-full bg-black"} flex items-center justify-center relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 ${theme === "light" ? "bg-gradient-to-br from-blue-400/20 to-purple-400/20" : style === "retro" ? "bg-gradient-to-br from-green-400/20 to-yellow-400/20" : "bg-gradient-to-br from-cyan-400/20 to-pink-400/20"} ${style === "cyberpunk" ? "animate-gradient-x" : ""}`}
                  ></div>
                  <span
                    className={`text-4xl sm:text-6xl font-black ${theme === "light" ? "bg-gradient-to-r from-blue-600 to-purple-600" : style === "retro" ? "bg-gradient-to-r from-green-400 to-yellow-400" : "bg-gradient-to-r from-cyan-400 to-pink-400"} bg-clip-text text-transparent relative z-10 ${style === "retro" ? "font-mono pixel-text" : ""}`}
                  >
                    AP
                  </span>
                </div>
              </div>

              {/* Floating Particles */}
              {style === "cyberpunk" && (
                <>
                  <div
                    className={`absolute top-10 right-10 w-2 h-2 ${theme === "light" ? "bg-blue-400" : "bg-cyan-400"} rounded-full animate-ping`}
                  ></div>
                  <div
                    className={`absolute bottom-10 left-10 w-2 h-2 ${theme === "light" ? "bg-purple-400" : "bg-pink-400"} rounded-full animate-ping`}
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className={`absolute top-20 left-20 w-1 h-1 ${theme === "light" ? "bg-orange-400" : "bg-yellow-400"} rounded-full animate-ping`}
                    style={{ animationDelay: "1s" }}
                  ></div>
                </>
              )}

              {/* Pixelated Particles for retro */}
              {style === "retro" && (
                <>
                  <div
                    className={`absolute top-10 right-10 w-4 h-4 ${theme === "light" ? "bg-green-500" : "bg-green-400"} pixel-art animate-ping`}
                  ></div>
                  <div
                    className={`absolute bottom-10 left-10 w-4 h-4 ${theme === "light" ? "bg-yellow-500" : "bg-yellow-400"} pixel-art animate-ping`}
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className={`absolute top-20 left-20 w-2 h-2 ${theme === "light" ? "bg-red-500" : "bg-red-400"} pixel-art animate-ping`}
                    style={{ animationDelay: "1s" }}
                  ></div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`relative z-10 py-20 ${theme === "light" ? "bg-gradient-to-r from-blue-50/50 to-purple-50/50" : style === "retro" ? "bg-gradient-to-r from-green-900/10 to-yellow-900/10" : "bg-gradient-to-r from-purple-900/10 to-cyan-900/10"} backdrop-blur-sm`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className={`text-4xl font-black text-center mb-12 ${theme === "light" ? "bg-gradient-to-r from-blue-600 to-purple-600" : style === "retro" ? "bg-gradient-to-r from-green-400 to-yellow-400" : "bg-gradient-to-r from-cyan-400 to-pink-400"} bg-clip-text text-transparent ${style === "cyberpunk" ? "glitch-text" : style === "retro" ? "font-mono pixel-text" : ""}`}
          >
            {style === "retro" ? "ABOUT_ME" : "ABOUT.EXE"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p
                className={`text-base sm:text-lg ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-100" : "text-cyan-100"} leading-relaxed ${style === "retro" ? "font-mono pixel-text" : "font-mono"}`}
              >
                {style === "retro"
                  ? "> IM_A_PASSIONATE_DATA_SCIENCE_STUDENT_IN_MY_THIRD_YEAR_WITH_A_STRONG_FOCUS_ON_AI_AND_ML"
                  : "> I'm a passionate Data Science student in my third year, with a strong focus on artificial intelligence and machine learning."}
              </p>
              <p
                className={`text-base sm:text-lg ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-100" : "text-cyan-100"} leading-relaxed ${style === "retro" ? "font-mono pixel-text" : "font-mono"}`}
              >
                {style === "retro"
                  ? "> MY_JOURNEY_IN_TECH_HAS_LED_ME_TO_WORK_ON_DIVERSE_PROJECTS_FROM_HEALTHCARE_AI_TO_FINANCIAL_ANALYSIS"
                  : "> My journey in tech has led me to work on diverse projects ranging from healthcare AI to financial analysis and sports analytics."}
              </p>
              <p
                className={`text-base sm:text-lg ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-100" : "text-cyan-100"} leading-relaxed ${style === "retro" ? "font-mono pixel-text" : "font-mono"}`}
              >
                {style === "retro"
                  ? "> I_ENJOY_BUILDING_APPLICATIONS_THAT_LEVERAGE_THE_POWER_OF_AI_TO_SOLVE_REAL_WORLD_PROBLEMS"
                  : "> I enjoy building applications that leverage the power of AI to solve real-world problems."}
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  className={`${theme === "light" ? "border-blue-400 text-blue-600 hover:bg-blue-400 hover:text-white" : style === "retro" ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-black pixel-text" : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"} transform hover:scale-105 transition-all duration-300`}
                  asChild
                >
                  <a href="https://github.com/AP4549" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    {style === "retro" ? "GITHUB" : "GITHUB"}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className={`${theme === "light" ? "border-purple-400 text-purple-600 hover:bg-purple-400 hover:text-white" : style === "retro" ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black pixel-text" : "border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black"} transform hover:scale-105 transition-all duration-300`}
                  asChild
                >
                  <a href="https://linkedin.com/in/ayush-pandita-03b2a224b" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    {style === "retro" ? "LINKEDIN" : "LINKEDIN"}
                  </a>
                </Button>
              </div>
            </div>
            <div
              className={`${theme === "light" ? "bg-white/50" : style === "retro" ? "bg-gray-900/50" : "bg-black/50"} p-8 ${style === "retro" ? "pixel-art" : "rounded-lg"} border ${theme === "light" ? "border-slate-200" : style === "retro" ? "border-green-400/30" : "border-cyan-400/30"} backdrop-blur-sm ${theme === "light" ? "hover:border-purple-400/50" : style === "retro" ? "hover:border-yellow-400/50" : "hover:border-pink-400/50"} transition-all duration-300 transform hover:scale-105`}
            >
              <h3
                className={`text-xl font-bold ${theme === "light" ? "text-blue-600" : style === "retro" ? "text-green-400" : "text-cyan-400"} mb-6 ${style === "retro" ? "font-mono pixel-text" : "font-mono"}`}
              >
                {style === "retro" ? "SYSTEM_INFO" : "SYSTEM.INFO"}
              </h3>
              <div className={`space-y-4 ${style === "retro" ? "font-mono pixel-text" : "font-mono"}`}>
                {[
                  { label: style === "retro" ? "PUBLIC_REPOS" : "PUBLIC_REPOS", value: "11" },
                  {
                    label: style === "retro" ? "PRIMARY_LANG" : "PRIMARY_LANG",
                    value: style === "retro" ? "PYTHON_TYPESCRIPT" : "PYTHON, TYPESCRIPT",
                  },
                  {
                    label: style === "retro" ? "FOCUS_AREA" : "FOCUS_AREA",
                    value: style === "retro" ? "AI_ML_DATA_SCIENCE" : "AI/ML, DATA_SCIENCE",
                  },
                  {
                    label: style === "retro" ? "STATUS" : "STATUS",
                    value: style === "retro" ? "STUDENT_AND_DEVELOPER" : "STUDENT & DEVELOPER",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-2 ${theme === "light" ? "hover:bg-blue-400/10" : style === "retro" ? "hover:bg-green-400/10" : "hover:bg-cyan-400/10"} ${style === "retro" ? "pixel-art" : "rounded"} transition-all duration-300`}
                  >
                    <span
                      className={`${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-300" : "text-cyan-300"}`}
                    >
                      {item.label}:
                    </span>
                    <span
                      className={`${theme === "light" ? "text-purple-600" : style === "retro" ? "text-yellow-400" : "text-pink-400"} font-bold`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className={`text-4xl font-black text-center mb-12 ${theme === "light" ? "bg-gradient-to-r from-blue-600 to-purple-600" : style === "retro" ? "bg-gradient-to-r from-green-400 to-yellow-400" : "bg-gradient-to-r from-cyan-400 to-pink-400"} bg-clip-text text-transparent ${style === "cyberpunk" ? "glitch-text" : style === "retro" ? "font-mono pixel-text" : ""}`}
          >
            {style === "retro" ? "RESUME" : "RESUME.EXE"}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Resume Preview */}
            <div
              className={`${theme === "light" ? "bg-white/50 border-slate-200" : style === "retro" ? "bg-gray-900/50 border-green-400/30" : "bg-black/50 border-cyan-400/30"} p-8 ${style === "retro" ? "pixel-art" : "rounded-lg"} border backdrop-blur-sm`}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center border-b border-current pb-4">
                  <h3
                    className={`text-2xl font-bold ${theme === "light" ? "text-slate-800" : style === "retro" ? "text-green-400 pixel-text" : "text-cyan-400"} mb-2`}
                  >
                    AYUSH PANDITA
                  </h3>
                  <p
                    className={`${theme === "light" ? "text-blue-600" : style === "retro" ? "text-yellow-400 pixel-text" : "text-pink-400"} font-semibold`}
                  >
                    Data Science 3rd Yr Student
                  </p>
                  <div
                    className={`text-sm ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-300 pixel-text" : "text-cyan-300"} mt-2 space-y-1`}
                  >
                    <p>Mumbai, Maharashtra - 400101</p>
                    <p>panditaayush4549@gmail.com</p>
                    <p>9769322190</p>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h4
                    className={`text-lg font-bold ${theme === "light" ? "text-purple-600" : style === "retro" ? "text-green-400 pixel-text" : "text-cyan-400"} mb-3`}
                  >
                    SUMMARY
                  </h4>
                  <p
                    className={`text-sm ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-100 pixel-text" : "text-cyan-100"} leading-relaxed`}
                  >
                    Data science student with a solid academic background in statistics and Data Visualization.
                    Proficient in Python, statistics, and machine learning techniques.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h4
                    className={`text-lg font-bold ${theme === "light" ? "text-purple-600" : style === "retro" ? "text-green-400 pixel-text" : "text-cyan-400"} mb-3`}
                  >
                    EXPERIENCE
                  </h4>
                  <div
                    className={`text-sm ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-100 pixel-text" : "text-cyan-100"}`}
                  >
                    <div className="mb-3">
                      <h5
                        className={`font-semibold ${theme === "light" ? "text-slate-800" : style === "retro" ? "text-yellow-400" : "text-pink-400"}`}
                      >
                        Full Stack Developer Intern
                      </h5>
                      <p className="text-xs opacity-80">Young Thames LLP (Remote) | May 2025 – Oct 2025</p>
                      <ul className="list-disc list-inside text-xs mt-1 space-y-1 opacity-90">
                        <li>Built responsive web apps using React, Node.js</li>
                        <li>Worked remotely with mentors via email, VC</li>
                        <li>Maintained strict code confidentiality</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4
                    className={`text-lg font-bold ${theme === "light" ? "text-purple-600" : style === "retro" ? "text-green-400 pixel-text" : "text-cyan-400"} mb-3`}
                  >
                    EDUCATION
                  </h4>
                  <div
                    className={`text-sm ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-100 pixel-text" : "text-cyan-100"} space-y-2`}
                  >
                    <div>
                      <h5
                        className={`font-semibold ${theme === "light" ? "text-slate-800" : style === "retro" ? "text-yellow-400" : "text-pink-400"}`}
                      >
                        Bachelor of Technology
                      </h5>
                      <p className="text-xs">Mukesh Patel School of Technology | 2022 – 2026</p>
                    </div>
                    <div>
                      <h5
                        className={`font-semibold ${theme === "light" ? "text-slate-800" : style === "retro" ? "text-yellow-400" : "text-pink-400"}`}
                      >
                        Secondary School
                      </h5>
                      <p className="text-xs">Ryan International School | 2020 - 2022</p>
                    </div>
                  </div>
                </div>

                {/* Key Skills Preview */}
                <div>
                  <h4
                    className={`text-lg font-bold ${theme === "light" ? "text-purple-600" : style === "retro" ? "text-green-400 pixel-text" : "text-cyan-400"} mb-3`}
                  >
                    KEY SKILLS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Machine Learning", "Data Analysis", "React", "Tableau"].map((skill, index) => (
                      <Badge
                        key={index}
                        className={`text-xs ${theme === "light" ? "bg-blue-100 text-blue-800" : style === "retro" ? "bg-green-500/20 text-green-400 pixel-text" : "bg-cyan-500/20 text-cyan-400"}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="flex flex-col justify-center items-center space-y-6 sm:space-y-8">
              <div className="text-center">
                <h3
                  className={`text-xl sm:text-2xl font-bold ${theme === "light" ? "text-slate-800" : style === "retro" ? "text-green-400 pixel-text" : "text-cyan-400"} mb-3 sm:mb-4`}
                >
                  {style === "retro" ? "DOWNLOAD_FULL_RESUME" : "Download Full Resume"}
                </h3>
                <p
                  className={`${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-300 pixel-text" : "text-cyan-300"} mb-6 sm:mb-8 ${style === "retro" ? "font-mono" : ""}`}
                >
                  {style === "retro"
                    ? "> GET_THE_COMPLETE_PDF_VERSION_WITH_ALL_DETAILS"
                    : "> Get the complete PDF version with all details, projects, and certifications"}
                </p>
              </div>

              {/* Download Button */}
              <Button
                size="lg"
                className={`${theme === "light" ? "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white" : style === "retro" ? "bg-yellow-500 hover:bg-yellow-400 text-black pixel-text" : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white"} font-bold transform hover:scale-105 transition-all duration-300 ${style === "cyberpunk" ? "hover:shadow-[0_0_30px_rgba(244,114,182,0.7)]" : ""} group px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto`}
                asChild
              >
                <a href="/resume/Ayush_Pandita_Resume.pdf" download="Ayush_Pandita_Resume.pdf">
                  <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {style === "retro" ? "DOWNLOAD_PDF" : "DOWNLOAD PDF"}
                </a>
              </Button>

              {/* Resume Stats */}
              <div className={`grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md`}>
                <div
                  className={`${theme === "light" ? "bg-white/50 border-slate-200" : style === "retro" ? "bg-gray-900/50 border-green-400/30" : "bg-black/50 border-cyan-400/30"} p-3 sm:p-4 ${style === "retro" ? "pixel-art" : "rounded-lg"} border text-center`}
                >
                  <div
                    className={`text-2xl font-bold ${theme === "light" ? "text-blue-600" : style === "retro" ? "text-green-400" : "text-cyan-400"}`}
                  >
                    4+
                  </div>
                  <div
                    className={`text-sm ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-300 pixel-text" : "text-cyan-300"}`}
                  >
                    {style === "retro" ? "CERTIFICATIONS" : "Certifications"}
                  </div>
                </div>
                <div
                  className={`${theme === "light" ? "bg-white/50 border-slate-200" : style === "retro" ? "bg-gray-900/50 border-green-400/30" : "bg-black/50 border-cyan-400/30"} p-3 sm:p-4 ${style === "retro" ? "pixel-art" : "rounded-lg"} border text-center`}
                >
                  <div
                    className={`text-2xl font-bold ${theme === "light" ? "text-purple-600" : style === "retro" ? "text-yellow-400" : "text-pink-400"}`}
                  >
                    6+
                  </div>
                  <div
                    className={`text-sm ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-300 pixel-text" : "text-cyan-300"}`}
                  >
                    {style === "retro" ? "PROJECTS" : "Projects"}
                  </div>
                </div>
              </div>

              {/* Certifications Preview */}
              <div
                className={`${theme === "light" ? "bg-white/50 border-slate-200" : style === "retro" ? "bg-gray-900/50 border-green-400/30" : "bg-black/50 border-cyan-400/30"} p-6 ${style === "retro" ? "pixel-art" : "rounded-lg"} border w-full`}
              >
                <h4
                  className={`text-lg font-bold ${theme === "light" ? "text-purple-600" : style === "retro" ? "text-green-400 pixel-text" : "text-cyan-400"} mb-4 text-center`}
                >
                  {style === "retro" ? "RECENT_CERTIFICATIONS" : "Recent Certifications"}
                </h4>
                <div
                  className={`space-y-2 text-sm ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-100 pixel-text" : "text-cyan-100"}`}
                >
                  <div className="flex justify-between">
                    <span>IoT V2: DragonBoard</span>
                    <span className="text-xs opacity-70">Feb 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Blockchain Technologies</span>
                    <span className="text-xs opacity-70">Feb 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IoT Networking</span>
                    <span className="text-xs opacity-70">Aug 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className={`text-4xl font-black text-center mb-12 ${theme === "light" ? "bg-gradient-to-r from-blue-600 to-purple-600" : style === "retro" ? "bg-gradient-to-r from-green-400 to-yellow-400" : "bg-gradient-to-r from-cyan-400 to-pink-400"} bg-clip-text text-transparent ${style === "cyberpunk" ? "glitch-text" : style === "retro" ? "font-mono pixel-text" : ""}`}
          >
            {style === "retro" ? "PROJECTS" : "PROJECTS.EXE"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`${theme === "light" ? "bg-white/50 border-slate-200 hover:border-purple-400/50" : style === "retro" ? "bg-gray-900/50 border-green-400/30 hover:border-yellow-400/50" : "bg-black/50 border-cyan-400/30 hover:border-pink-400/50"} transition-all duration-500 transform hover:scale-105 ${style === "retro" ? "pixel-art hover:rotate-0" : "hover:rotate-1"} backdrop-blur-sm group relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      className={`${theme === "light" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : style === "retro" ? "bg-green-500 text-black pixel-text" : "bg-gradient-to-r from-cyan-500 to-blue-500 text-black"} font-bold text-xs`}
                    >
                      {project.category}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`${theme === "light" ? "text-blue-600 hover:text-purple-600 hover:bg-purple-400/10" : style === "retro" ? "text-green-400 hover:text-yellow-400 hover:bg-yellow-400/10" : "text-cyan-400 hover:text-pink-400 hover:bg-pink-400/10"} transform hover:scale-110 transition-all duration-300`}
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <CardTitle
                    className={`text-lg ${theme === "light" ? "text-slate-800 group-hover:text-purple-600" : style === "retro" ? "text-green-300 group-hover:text-yellow-300 font-mono pixel-text" : "text-cyan-300 font-mono group-hover:text-pink-300"} transition-colors duration-300`}
                  >
                    {project.title}
                  </CardTitle>
                  <CardDescription
                    className={`text-sm leading-relaxed ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-100 font-mono pixel-text" : "text-cyan-100 font-mono"}`}
                  >
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className={`text-xs ${theme === "light" ? "border-slate-300 text-slate-600 hover:border-purple-400 hover:text-purple-600" : style === "retro" ? "border-green-400/50 text-green-400 hover:border-yellow-400 hover:text-yellow-400 pixel-text" : "border-cyan-400/50 text-cyan-400 hover:border-pink-400 hover:text-pink-400"} transition-all duration-300`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`relative z-10 py-20 ${theme === "light" ? "bg-gradient-to-r from-purple-50/50 to-blue-50/50" : style === "retro" ? "bg-gradient-to-r from-yellow-900/10 to-green-900/10" : "bg-gradient-to-r from-cyan-900/10 to-purple-900/10"} backdrop-blur-sm`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className={`text-4xl font-black text-center mb-12 ${theme === "light" ? "bg-gradient-to-r from-blue-600 to-purple-600" : style === "retro" ? "bg-gradient-to-r from-green-400 to-yellow-400" : "bg-gradient-to-r from-cyan-400 to-pink-400"} bg-clip-text text-transparent ${style === "cyberpunk" ? "glitch-text" : style === "retro" ? "font-mono pixel-text" : ""}`}
          >
            {style === "retro" ? "SKILLS" : "SKILLS.EXE"}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                className={`px-4 py-2 text-sm ${theme === "light" ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-slate-300 text-slate-700 hover:border-purple-400 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20" : style === "retro" ? "bg-gradient-to-r from-green-500/20 to-yellow-500/20 border-green-400/50 text-green-300 hover:border-yellow-400 hover:text-yellow-300 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-green-500/20 pixel-text" : "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/50 text-cyan-300 hover:border-pink-400 hover:text-pink-300 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 font-mono"} transition-all duration-300 transform hover:scale-110 cursor-pointer`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className={`text-3xl sm:text-4xl font-black mb-6 sm:mb-8 ${theme === "light" ? "bg-gradient-to-r from-blue-600 to-purple-600" : style === "retro" ? "bg-gradient-to-r from-green-400 to-yellow-400" : "bg-gradient-to-r from-cyan-400 to-pink-400"} bg-clip-text text-transparent ${style === "cyberpunk" ? "glitch-text" : style === "retro" ? "font-mono pixel-text" : ""}`}
          >
            {style === "retro" ? "CONTACT" : "CONTACT.EXE"}
          </h2>
          <p
            className={`text-base sm:text-lg ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-300" : "text-cyan-300"} mb-4 sm:mb-6 ${style === "retro" ? "font-mono pixel-text" : "font-mono"}`}
          >
            {style === "retro"
              ? "> READY_TO_COLLABORATE_ON_THE_NEXT_BIG_THING?"
              : "> Ready to collaborate on the next big thing?"}
          </p>
          <p
            className={`text-base sm:text-lg ${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-300" : "text-cyan-300"} mb-6 sm:mb-8 ${style === "retro" ? "font-mono pixel-text" : "font-mono"}`}
          >
            {style === "retro"
              ? "> LETS_BUILD_SOMETHING_AMAZING_TOGETHER!"
              : "> Let's build something amazing together!"}
          </p>
          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className={`${theme === "light" ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white" : style === "retro" ? "bg-green-500 hover:bg-green-400 text-black pixel-text" : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black"} font-bold transform hover:scale-105 transition-all duration-300 ${style === "cyberpunk" ? "hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]" : ""} group w-full sm:w-auto`}
              onClick={() => (window.location.href = "mailto:panditaayush4549@gmail.com")}
            >
              <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              {style === "retro" ? "SEND_EMAIL" : "SEND EMAIL"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`${theme === "light" ? "border-purple-400 text-purple-600 hover:bg-purple-400 hover:text-white" : style === "retro" ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black pixel-text" : "border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black"} transform hover:scale-105 transition-all duration-300 ${style === "cyberpunk" ? "hover:shadow-[0_0_30px_rgba(244,114,182,0.7)]" : ""}`}
              asChild
            >
              <a href="https://github.com/AP4549" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                {style === "retro" ? "FOLLOW_ON_GITHUB" : "FOLLOW ON GITHUB"}
              </a>
            </Button>
          </div>

          {/* Email Display */}
          <div
            className={`mt-6 sm:mt-8 p-3 sm:p-4 ${theme === "light" ? "bg-white/50 border-slate-200" : style === "retro" ? "bg-gray-900/50 border-green-400/30" : "bg-black/50 border-cyan-400/30"} ${style === "retro" ? "pixel-art" : "rounded-lg"} backdrop-blur-sm inline-block`}
          >
            <p
              className={`${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-400" : "text-cyan-400"} ${style === "retro" ? "font-mono pixel-text" : "font-mono"} text-sm sm:text-base`}
            >
              {"> "}
              <span
                className={`${theme === "light" ? "text-purple-600" : style === "retro" ? "text-yellow-400" : "text-pink-400"}`}
              >
                panditaayush4549@gmail.com
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`relative z-10 ${theme === "light" ? "bg-white/80" : style === "retro" ? "bg-gray-900/80" : "bg-black/80"} backdrop-blur-md border-t ${theme === "light" ? "border-slate-200" : style === "retro" ? "border-green-400/30" : "border-cyan-400/30"} py-8`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p
            className={`${theme === "light" ? "text-slate-600" : style === "retro" ? "text-green-400" : "text-cyan-400"} ${style === "retro" ? "font-mono pixel-text" : "font-mono"}`}
          >
            {style === "retro"
              ? "© 2025 AYUSH PANDITA // BUILT WITH NEXT.JS & TAILWIND CSS // POWERED BY CAFFEINE"
              : "© 2025 AYUSH PANDITA // BUILT WITH NEXT.JS & TAILWIND CSS // POWERED BY CAFFEINE"}
          </p>
        </div>
      </footer>
    </div>
  )
}
