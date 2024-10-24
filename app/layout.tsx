/* eslint-disable @next/next/no-img-element */
import "@/src/styles/globals.css"
import { Metadata } from "next"
import Script from "next/script"
import { Footer } from "@/src/components/layout/footer"
import { SiteHeader } from "@/src/components/layout/header"
import { TailwindIndicator } from "@/src/components/tailwind-indicator"
import { ThemeProvider } from "@/src/components/theme-provider"
import { YANDEX_METRIKA, siteConfig } from "@/src/config/site"
import { fontSans } from "@/src/lib/fonts"
import { cn } from "@/src/lib/utils"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="ru" suppressHydrationWarning>
        <head>
          <Script
            id="yandex-metrika"
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: YANDEX_METRIKA }}
          />
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/91276036"
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <Footer items={siteConfig.mainNav} />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
