/* eslint-disable @next/next/no-img-element */
import { getBrands } from "@/src/api/brands"
import { getCategories } from "@/src/api/categories"
import { getProducts } from "@/src/api/products"
import MainPage from "@/src/components/pages/main-page"
import { SparklesCore } from "@/src/components/sparkles"
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
      <div className="relative flex h-80 w-full flex-col items-center justify-center overflow-hidden bg-background dark:bg-background">
        <div className="absolute inset-0 h-screen w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.8}
            maxSize={1.6}
            particleDensity={100}
            className="size-full"
            particleColor="#4f6391"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1 md:flex-row">
          <img src="/images/logo.png" alt="logo" />
          <h1
            className={cn(
              "relative z-20 mb-2 text-center font-raleway text-5xl font-bold uppercase md:text-7xl",
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
        <h1 className="text-3xl font-extrabold">Каталог</h1>
        <MainPage products={products} categories={categories} brands={brands} />
      </section>
    </>
  )
}
