import { getBrands } from "@/src/api/brands"
import { getCategories } from "@/src/api/categories"
import { getProducts } from "@/src/api/products"
import MainPage from "@/src/components/main-page"
import { siteConfig } from "@/src/config/site"

export default async function Page() {
  const products = await getProducts()
  const categories = await getCategories()
  const brands = await getBrands()

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            {siteConfig.name}
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>
      </section>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <h1 className="text-3xl font-extrabold">Каталог</h1>
        <MainPage products={products} categories={categories} brands={brands} />
      </section>
    </>
  )
}
