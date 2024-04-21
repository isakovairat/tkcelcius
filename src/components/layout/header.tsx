"use client"

import Link from "next/link"
import { Icons } from "@/src/components/icons"
import { MainNav } from "@/src/components/main-nav"
import { Button, buttonVariants } from "@/src/components/ui/button"
import { siteConfig } from "@/src/config/site"
import { useSidebarStore } from "@/src/stores/sidebarStore"
import { useScrollLock } from "usehooks-ts"

import { Sidebar } from "./sidebar"

export function SiteHeader() {
  const drawer = useSidebarStore((state: any) => state.drawer)
  const toggleDrawer = useSidebarStore((state: any) => state.toggleDrawer)

  useScrollLock({ autoLock: drawer, lockTarget: "body" })

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-[#466391]">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1 text-slate-50">
              <Link href={`tel:${siteConfig.phone}`} rel="noreferrer">
                <div
                  role="button"
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.phone className="size-5" />
                  <span className="sr-only">phone</span>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={toggleDrawer}
              >
                <Icons.menu className="size-5" />
                <span className="sr-only">menu</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <Sidebar />
    </>
  )
}
