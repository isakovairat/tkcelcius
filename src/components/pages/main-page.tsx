"use client"

import { useMemo, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { getBrands } from "@/src/api/brands"
import { getCategories } from "@/src/api/categories"
import { getProducts } from "@/src/api/products"
import { ProductCard } from "@/src/components/product-card"
import { Button } from "@/src/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"

const MainPage = () => {
  const products = getProducts()
  const categories = getCategories()
  const brands = getBrands()

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(
    Number(searchParams.get("category")) || categories[0].id
  )
  const [selectedBrand, setSelectedBrand] = useState(
    Number(searchParams.get("brand")) || brands[0].id
  )

  const handleCategoryChange = (id: string) => {
    setSelectedCategory(Number(id))

    const current = new URLSearchParams(Array.from(searchParams.entries())) // -> has to use this form

    if (!id) {
      current.delete("category")
    } else {
      current.set("category", id)
    }

    // cast to string
    const search = current.toString()
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : ""

    router.push(`${pathname}${query}`, { scroll: false })
  }

  const handleBrandChange = (id: string) => {
    setSelectedBrand(Number(id))

    const current = new URLSearchParams(Array.from(searchParams.entries())) // -> has to use this form

    if (!id) {
      current.delete("brand")
    } else {
      current.set("brand", id)
    }

    // cast to string
    const search = current.toString()
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : ""

    router.push(`${pathname}${query}`, { scroll: false })
  }

  const handleCleanFilters = () => {
    setSelectedCategory(categories[0].id)
    setSelectedBrand(brands[0].id)

    router.push(`${pathname}`, { scroll: false })
  }

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedCategory === categories[0].id) {
          return true
        } else {
          return product.category_id === selectedCategory
        }
      })
      .filter((product) => {
        if (selectedBrand === brands[0].id) {
          return true
        } else {
          return product.brand_id === selectedBrand
        }
      })
  }, [products, selectedCategory, categories, selectedBrand, brands])

  return (
    <>
      <div className="flex flex-wrap gap-6 md:flex-nowrap">
        <div className="w-full sm:w-[150px] md:w-[200px]">
          <Select
            onValueChange={handleCategoryChange}
            value={selectedCategory.toString()}
          >
            <SelectTrigger>
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => {
                return (
                  <SelectItem key={c.id} value={c.id.toString()}>
                    {c.name}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-[150px] md:w-[200px]">
          <Select
            onValueChange={handleBrandChange}
            value={selectedBrand.toString()}
          >
            <SelectTrigger>
              <SelectValue placeholder="Бренд" />
            </SelectTrigger>
            <SelectContent>
              {brands.map((b) => {
                return (
                  <SelectItem key={b.id} value={b.id.toString()}>
                    {b.name}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button onClick={handleCleanFilters}>Очистить фильтры</Button>
        </div>
      </div>
      {filteredProducts.length === 0 && (
        <div className="col-span-full">Ничего не найдено</div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </>
  )
}

export default MainPage
