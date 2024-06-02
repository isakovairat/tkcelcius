"use client"

import { useEffect, useMemo, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ProductCard } from "@/src/components/product-card"
import { Button } from "@/src/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"
import { createFuseInstance, options } from "@/src/lib/fuseSetup"
import { Brand, Category, Product } from "@prisma/client"
import { useDebounceCallback } from "usehooks-ts"

import { Icons } from "../icons"
import { Input } from "../ui/input"

type MainPageProps = {
  categories: Category[]
  products: Product[]
  brands: Brand[]
}

const MainPage = ({ categories, products, brands }: MainPageProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(
    Number(searchParams.get("category")) || categories[0].id
  )
  const [selectedBrand, setSelectedBrand] = useState(
    Number(searchParams.get("brand")) || brands[0].id
  )
  const [search, setSearch] = useState(searchParams.get("query") || "")
  const [fuse, setFuse] = useState<Fuse<Product> | null>(null)

  const defaultCategoryId = useMemo(() => categories[0].id, [categories])
  const defaultBrandId = useMemo(() => brands[0].id, [brands])

  const filteredProducts = useMemo(() => {
    let searchResults = products
    if (fuse && search.trim().length > 0) {
      searchResults = fuse.search(search).map((el: any) => el.item)
    }

    return searchResults.filter((product: Product) => {
      const isCategoryMatch =
        selectedCategory === defaultCategoryId ||
        product.categoryId === selectedCategory
      const isBrandMatch =
        selectedBrand === defaultBrandId || product.brandId === selectedBrand

      return isCategoryMatch && isBrandMatch
    })
  }, [
    products,
    fuse,
    search,
    selectedCategory,
    defaultCategoryId,
    selectedBrand,
    defaultBrandId,
  ])

  useEffect(() => {
    const fuseInstance = createFuseInstance(products, options)
    setFuse(fuseInstance)
  }, [products])

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
    setSelectedCategory(defaultCategoryId)
    setSelectedBrand(defaultBrandId)
    setSearch("")

    router.push(`${pathname}`, { scroll: false })
  }

  const handleSearch = (value: string) => {
    setSearch(value)
    // const current = new URLSearchParams(Array.from(searchParams.entries())) // -> has to use this form

    // if (!value) {
    //   current.delete("query")
    // } else {
    //   current.set("query", value)
    // }

    // cast to string
    // const searchValue = current.toString()
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    // const query = searchValue ? `?${searchValue}` : ""

    // router.push(`${pathname}${query}`, { scroll: false })
  }

  const debounced = useDebounceCallback(handleSearch, 500)

  return (
    <>
      <div className="flex flex-wrap items-center gap-6 lg:flex-nowrap">
        <div className="flex w-full items-center gap-4 md:w-auto">
          <div className="relative w-full md:w-auto">
            <Icons.search className="absolute inset-y-0 my-auto ml-2 size-5" />
            <Input
              onChange={(event) => debounced(event.target.value)}
              placeholder="Введите название товара"
              type="search"
              className="pl-10 pr-4 md:w-[400px]"
            />
            <span className="sr-only">Search</span>
          </div>
        </div>
        <div className=" w-full sm:w-[150px] md:w-[200px]">
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
          <Button
            onClick={handleCleanFilters}
            className="bg-[#466391] hover:hover:bg-[#466391]"
          >
            Очистить фильтры
          </Button>
        </div>
      </div>
      {filteredProducts.length === 0 && (
        <div className="col-span-full">Ничего не найдено</div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product: Product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </>
  )
}

export default MainPage
