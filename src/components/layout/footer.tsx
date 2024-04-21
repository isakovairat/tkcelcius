import Link from "next/link"
import { siteConfig } from "@/src/config/site"
import { cn } from "@/src/lib/utils"
import { NavItem } from "@/src/types/nav"

import styles from "../main-nav.module.css"

interface MainNavProps {
  items?: NavItem[]
}

export const Footer = ({ items }: MainNavProps) => {
  return (
    <footer className="w-full border-t bg-[#466391] p-4 shadow md:flex md:items-center md:justify-between md:p-6">
      <div className="mb-4 md:mb-0">
        <Link href="/" className="items-center space-x-2">
          <span
            className={cn(
              "inline-block font-raleway text-2xl font-bold uppercase text-slate-50",
              styles["main-nav-title-hover"]
            )}
          >
            {siteConfig.name}
          </span>
        </Link>
      </div>
      {items?.length ? (
        <nav className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
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
      ) : null}
    </footer>
  )
}
