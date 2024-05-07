/* eslint-disable @next/next/no-img-element */
import { getBrands } from "@/src/api/brands"
import { getCategories } from "@/src/api/categories"
import { getProducts } from "@/src/api/products"
import MainPage from "@/src/components/pages/main-page"
import { TextGenerateEffect } from "@/src/components/text-generate-effect"
import { siteConfig } from "@/src/config/site"
import { cn } from "@/src/lib/utils"

import styles from "../src/components/main-nav.module.css"

export default async function Page() {
  const products = await getProducts()
  const categories = await getCategories()
  const brands = await getBrands()

  return (
    <>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="mt-5 flex flex-col items-center justify-center gap-1">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <img className="w-[140px]" src="/images/logo.png" alt="logo" />
            <h1
              className={cn(
                "relative z-20 text-center font-raleway text-5xl font-bold uppercase md:text-7xl",
                styles["main-nav-title"]
              )}
            >
              {siteConfig.name}
            </h1>
          </div>
          <TextGenerateEffect
            words={siteConfig.description}
            className="relative z-20 text-center text-xl text-muted-foreground"
          />
        </div>
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <h2 className="text-3xl font-extrabold">Каталог</h2>
          <MainPage
            products={products}
            categories={categories}
            brands={brands}
          />
        </section>
      </div>
    </>
  )
}
