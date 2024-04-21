import Link from "next/link"
import { siteConfig } from "@/src/config/site"
import { cn } from "@/src/lib/utils"
import { NavItem } from "@/src/types/nav"

import styles from "./main-nav.module.css"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2 ">
        <span
          className={cn(
            "inline-block font-raleway text-2xl font-bold uppercase text-slate-50",
            styles["main-nav-title-hover"]
          )}
        >
          {siteConfig.name}
        </span>
      </Link>
      {items?.length && (
        <nav className="hidden gap-6 md:flex ">
          {items?.map(
            (item) =>
              item.href && (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-slate-50",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      )}
    </div>
  )
}
