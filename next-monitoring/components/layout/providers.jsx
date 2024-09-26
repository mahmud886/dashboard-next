"use client"
import React from "react"
import ThemeProvider from "@/components/ThemeToggle/theme-provider";


export default function Providers({ children }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  )
}