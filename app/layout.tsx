import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/ui/theme-switcher"
import { Toaster } from "@/components/ui/sonner"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Exchange Rate Display",
  description: "Manage and cast exchange rates",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* ✅ Now inside the ThemeProvider */}
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>

          {children}
          <Toaster position="top-center" offset={20}  />
        </ThemeProvider>
      </body>
    </html>
    </SidebarProvider>
  )
}
