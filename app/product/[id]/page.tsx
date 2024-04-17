import { Metadata } from "next"
import Link from "next/link"
import { getCategory } from "@/src/api/categories"
import { getProduct, getProducts } from "@/src/api/products"
import ProductCarousel from "@/src/components/product-caroisel"
import { Badge } from "@/src/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb"
import { Button } from "@/src/components/ui/button"
import { APP_ROUTES, siteConfig } from "@/src/config/site"

export function generateStaticParams() {
  return getProducts().map((product) => ({ id: product.id.toString() }))
}

export default function Page({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)
  const category = getCategory(product?.category_id as number)

  return (
    <section className="container items-center pb-8 pt-6 md:py-10">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem className="font-semibold">
            <BreadcrumbLink asChild>
              <Link href={APP_ROUTES.MAIN}>Главная</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`${APP_ROUTES.MAIN}?category=${category?.id}`}>
                {category?.name}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`${APP_ROUTES.PRODUCT}/${product?.id}`}>
                {product?.name}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-extrabold">{product?.name}</h1>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-6">
        {product?.images_src && product?.images_src.length > 0 && (
          <div className="m-9 w-fit">
            <ProductCarousel product={product} />
          </div>
        )}
        <div className="flex flex-col gap-2 lg:mt-9 lg:w-3/6">
          <div className="flex gap-4">
            <p className="font-bold">Наличие</p>
            <Badge variant={"default"}>
              {product?.is_available ? "В наличии" : "Под заказ"}
            </Badge>
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <div>
              <p className="pb-2 font-bold">Цена</p>
              <p className="text-3xl font-bold">{product?.price} ₽</p>
            </div>
            <div>
              <Link href={"https://wa.me/79680008301?text=Здравствуйте"}>
                <Button size={"lg"}>Купить</Button>
              </Link>
            </div>
          </div>
          <div className="my-2 h-px w-full bg-gray-300" />
          <div>
            <p className="pb-2 font-bold">Описание</p>
            <p className="text-md">{product?.description}</p>
          </div>
        </div>
      </div>
      {product?.specifications && (
        <div className="flex flex-col gap-2">
          <div className="my-2 h-px w-full bg-gray-300" />
          <p className="pb-2 font-bold">Технические характеристики</p>
          <table className="table-auto border border-slate-400">
            <tbody>
              {Object.entries(product?.specifications).map(([key, value]) => (
                <tr key={key}>
                  <td className="border border-slate-300 p-2">{key}</td>
                  <td className="border border-slate-300 p-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
