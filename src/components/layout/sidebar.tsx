import Link from "next/link"
import { useRouter } from "next/navigation"
import { siteConfig } from "@/src/config/site"
import { cn } from "@/src/lib/utils"
import { useSidebarStore } from "@/src/stores/sidebarStore"

import { Icons } from "../icons"
import { Button } from "../ui/button"

export const Sidebar = () => {
  const router = useRouter()
  const drawer = useSidebarStore((state: any) => state.drawer)
  const toggleDrawer = useSidebarStore((state: any) => state.toggleDrawer)

  return (
    <aside
      id="default-sidebar"
      className={cn(
        "left-0 top-0 z-40 h-screen w-full md:hidden",
        drawer ? "fixed" : "hidden"
      )}
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-background">
        <div className="container flex h-[65px] items-center justify-between border-b">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-controls="navbar-default"
            aria-expanded={drawer}
            onClick={toggleDrawer}
          >
            <Icons.x className="size-5" />
            <span className="sr-only">menu</span>
          </Button>
        </div>
        <nav className="container my-8 flex flex-col gap-6">
          {siteConfig.mainNav.map((nav) => (
            <Link
              onClick={() => {
                router.push(nav.href)
                toggleDrawer()
              }}
              key={nav.href}
              href={nav.href}
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground",
                nav.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {nav.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
