"use client"

import { useMemo, useState } from "react"
import { ProductCard } from "@/src/components/product-card"
import { Button } from "@/src/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"

const MainPage = ({ products, categories, brands }: any) => {
  // console.log("products, categories, brands", products, categories, brands)

  const [selectedCategory, setSelectedCategory] = useState(categories[0].slug)
  const [selectedBrand, setSelectedBrand] = useState(brands[0].slug)

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug)
  }

  const handleBrandChange = (slug: string) => {
    setSelectedBrand(slug)
  }

  const handleCleanFilters = () => {
    setSelectedCategory(categories[0].slug)
    setSelectedBrand(brands[0].slug)
  }

  const filteredProducts = useMemo(() => {
    return products
      .filter((product: any) => {
        if (selectedCategory === categories[0].slug) {
          return true
        } else {
          return (
            product.attributes.category.data.attributes.slug ===
            selectedCategory
          )
        }
      })
      .filter((product: any) => {
        if (selectedBrand === brands[0].slug) {
          return true
        } else {
          return product.attributes.brand.data.attributes.slug === selectedBrand
        }
      })
  }, [products, brands, categories, selectedCategory, selectedBrand])

  return (
    <>
      <div className="flex flex-wrap gap-6 md:flex-nowrap">
        <div className="w-full sm:w-[150px] md:w-[200px]">
          <Select onValueChange={handleCategoryChange} value={selectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(({ attributes: { slug, name } }: any) => {
                return (
                  <SelectItem key={slug} value={slug}>
                    {name}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-[150px] md:w-[200px]">
          <Select onValueChange={handleBrandChange} value={selectedBrand}>
            <SelectTrigger>
              <SelectValue placeholder="Бренд" />
            </SelectTrigger>
            <SelectContent>
              {brands.map(({ attributes: { slug, name } }: any) => {
                return (
                  <SelectItem key={slug} value={slug}>
                    {name}
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
        {filteredProducts.map((product: any) => {
          return <ProductCard key={product.attributes.slug} product={product} />
        })}
      </div>
    </>
  )
}

export default MainPage
