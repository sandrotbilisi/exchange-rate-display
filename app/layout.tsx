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
          <div className="fixed top-4 left-4 z-50 flex items-center gap-2">
            {/* avatar */}
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm font-medium">John Doe</p>
            </div>
          </div>

          {children}
          <Toaster position="top-center" offset={20}  />
        </ThemeProvider>
      </body>
    </html>
  )
}
