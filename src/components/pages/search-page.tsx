"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Icons } from "@/src/components/icons"
import { Input } from "@/src/components/ui/input"
import { createFuseInstance, options } from "@/src/lib/fuseSetup"
import { Product } from "@prisma/client"
import { useForm } from "react-hook-form"

import { ProductCard } from "../product-card"
import { Button } from "../ui/button"

interface IFormInput {
  search: string
}

export const SearchPage = ({ products }: { products: Product[] }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      search: searchParams.get("query") || "",
    },
  })
  const [results, setResults] = useState<Fuse.FuseResult<Product>[] | null>(
    null
  )
  const [fuse, setFuse] = useState<Fuse<Product> | null>(null)

  useEffect(() => {
    const fuseInstance = createFuseInstance(products, options)
    setFuse(fuseInstance)
  }, [products])

  useEffect(() => {
    const search = searchParams.get("query")
    if (fuse && search) {
      const searchResults = fuse.search(search)
      setResults(searchResults)
    }
  }, [fuse, searchParams])

  const onSubmit = ({ search }: any) => {
    if (fuse && search.trim().length > 0) {
      const searchResults = fuse.search(search)
      setResults(searchResults)

      const current = new URLSearchParams(Array.from(searchParams.entries())) // -> has to use this form

      if (!search) {
        current.delete("query")
      } else {
        current.set("query", search)
      }

      // cast to string
      const searchValue = current.toString()
      // or const query = `${'?'.repeat(search.length && 1)}${search}`;
      const query = searchValue ? `?${searchValue}` : ""

      router.push(`${pathname}${query}`, { scroll: false })
    } else {
      setResults([])
    }
  }

  return (
    <form role="search" method="get" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center gap-4">
        <div className="relative my-8 w-full md:w-auto">
          <Icons.search className="absolute inset-y-0 my-auto ml-2 size-5" />
          <Input
            {...register("search", { required: false })}
            placeholder="Введите название товара"
            type="search"
            className="pl-10 pr-4 md:w-[400px]"
          />
          <span className="sr-only">Search</span>
        </div>
        <Button
          onClick={handleSubmit(onSubmit)}
          className="hidden bg-[#466391] hover:hover:bg-[#466391] md:block"
        >
          Найти
        </Button>
      </div>
      {results && results.length === 0 && (
        <div className="col-span-full">Ничего не найдено</div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results &&
          results.map(({ item: product }) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </div>
    </form>
  )
}
