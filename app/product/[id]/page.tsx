import { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"
import { getCategory } from "@/src/api/categories"
import { getProduct, getProducts } from "@/src/api/products"
import ProductCarousel from "@/src/components/product-carousel"
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
import { Product } from "@prisma/client"
import { KeyRound } from "lucide-react"

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const product = await getProduct(Number(id))
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
  const images = product?.images as Record<string, string>[]

  return {
    title: product?.name,
    description: product?.description,
    openGraph: {
      images: [images[0].src, ...previousImages],
    },
  }
}

export async function generateStaticParams() {
  const products = await getProducts()

  return products.map((product) => ({ id: product.id.toString() }))
}

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(Number(params.id))
  const category = await getCategory(
    product?.categoryId as Product["categoryId"]
  )
  const images = product?.images as Record<"src" | "alt", string>[]

  return (
    <section className="container max-w-5xl items-center pb-8 pt-6 md:py-10">
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
        {images && images.length > 0 && (
          <div className="m-9 w-fit">
            <ProductCarousel images={images} />
          </div>
        )}
        {product?.specifications && (
          <div className="mb-2 mt-6 flex flex-col gap-2">
            <p className="pb-2 font-bold">Технические характеристики</p>
            <table>
              {Object.entries(product?.specifications).map(([key, value]) => (
                <tr key={key}>
                  <td className="text-balance border-b py-1 text-sm font-medium text-muted-foreground">
                    {key}
                  </td>
                  <td className="text-balance border-b text-right text-sm">
                    {value}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <div className="flex gap-4">
          <p className="font-bold">Наличие</p>
          <Badge variant={"celcius"}>
            {product?.isAvailable ? "В наличии" : "Под заказ"}
          </Badge>
        </div>
        <div className="flex flex-row items-center justify-between gap-2">
          <div>
            <p className="pb-2 font-bold">Цена</p>
            <p className="text-3xl font-bold">{product?.price} ₽</p>
          </div>
          <div>
            <Link href={"https://wa.me/79680008301?text=Здравствуйте"}>
              <Button size={"lg"} className="bg-[#466391] hover:bg-[#466391]">
                Купить
              </Button>
            </Link>
          </div>
        </div>
        <div className="my-2 h-px w-full bg-gray-300" />
        <div>
          <p className="pb-2 font-bold">Описание</p>
          <p className="text-md">{product?.description}</p>
        </div>
      </div>
    </section>
  )
}
