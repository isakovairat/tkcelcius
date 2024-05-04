import Link from "next/link"
import { siteConfig } from "@/src/config/site"
import { cn } from "@/src/lib/utils"

// import { NavItem } from "@/src/types/nav"

import styles from "../main-nav.module.css"

// interface MainNavProps {
//   items?: NavItem[]
// }

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-[#466391] p-4 shadow md:flex md:items-center md:justify-between md:p-6">
      <div className="mb-4 flex flex-col gap-2 md:mb-0">
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
        <div>
          <Link href={`tel:${siteConfig.phone}`}>
            <span className="text-sm font-medium text-slate-50">
              Телефон: <span className="font-bold">+7(968)-000-83-01</span>
            </span>
          </Link>
        </div>
        <div>
          <Link href={`mailto:${siteConfig.email}`}>
            <span className="text-sm font-medium text-slate-50">
              E-mail: <span className="font-bold">{siteConfig.email}</span>
            </span>
          </Link>
        </div>
        <div>
          <span className="text-balance text-sm font-medium text-slate-50">
            Адрес: {siteConfig.address}
          </span>
        </div>
      </div>
      {/* {items?.length ? (
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
      ) : null} */}
    </footer>
  )
}
