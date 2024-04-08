import Link from "next/link"
import { siteConfig } from "@/src/config/site"
import { cn } from "@/src/lib/utils"
import { NavItem } from "@/src/types/nav"

interface MainNavProps {
  items?: NavItem[]
}

export const Footer = ({ items }: MainNavProps) => {
  return (
    <footer className="w-full border-t bg-background p-4 shadow md:flex md:items-center md:justify-between md:p-6">
      <div className="mb-4 md:mb-0">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © {new Date().getFullYear()} <Link href="/">{siteConfig.name}</Link>
        </span>
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
                    "flex items-center text-sm font-medium text-muted-foreground",
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
