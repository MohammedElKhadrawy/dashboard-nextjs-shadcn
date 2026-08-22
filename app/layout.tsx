import "./globals.css"

import { Geist, Geist_Mono } from "next/font/google"

import AppSidebar from "@/components/AppSidebar"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Dashboard",
  description: "Dashboard with ShadCN Components and Next.js 16",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        geistMono.variable,
        "font-sans",
        geistSans.variable
      )}
    >
      <body className="flex">
        <ThemeProvider>
          <AppSidebar />
          <main className="w-full">
            <Navbar />
            <div className="px-4">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
