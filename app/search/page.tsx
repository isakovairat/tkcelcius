import { Metadata } from "next"
import { getProducts } from "@/src/api/products"
import { SearchPage } from "@/src/components/pages/search-page"
import { siteConfig } from "@/src/config/site"

export const metadata: Metadata = {
  title: {
    default: "Поиск",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
  icons: {
    icon: "/favicon.ico",
  },
  robots: "index, follow",
  openGraph: {
    title: `Поиск - ${siteConfig.name}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/banner.jpg`],
  },
}

export default async function Page() {
  const products = await getProducts()

  return <SearchPage products={products} />
}
