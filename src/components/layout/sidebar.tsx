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
        <div className="container flex h-[65px] items-center justify-between border-b bg-[#466391]">
          <Link
            href="/"
            className="flex items-center space-x-2 font-raleway text-2xl font-bold uppercase text-slate-50"
          >
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-controls="navbar-default"
            aria-expanded={drawer}
            onClick={toggleDrawer}
            className="text-slate-50"
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
        <div className="absolute bottom-0 w-full">
          <div className="container my-10 flex flex-wrap gap-6 md:flex-row">
            <Link href={`tel:${siteConfig.phone}`} className="w-full">
              <Button className="w-full bg-[#466391] hover:hover:bg-[#466391]">
                Позвонить нам
              </Button>
            </Link>
            <Link href={`mailto:${siteConfig.email}`} className="w-full">
              <Button className="w-full bg-[#466391] hover:hover:bg-[#466391]">
                Написать нам
              </Button>
            </Link>
            <Link
              href={"https://wa.me/79680008301?text=Здравствуйте"}
              className="w-full"
            >
              <Button className="w-full bg-[#25d366] hover:bg-[#128c7e] focus:bg-[#25d366] active:bg-[#25d366]">
                Написать нам в WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
