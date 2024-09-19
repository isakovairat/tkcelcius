/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { Product } from "@prisma/client"

import { APP_ROUTES } from "../config/site"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const images = product.images as Record<"alt" | "src", string>[]

  return (
    <Link href={`${APP_ROUTES.PRODUCT}/${product.id}`}>
      <Card className="relative w-auto cursor-pointer">
        <Badge
          variant={product.isAvailable ? "celsius" : "celsiusSecondary"}
          className="absolute right-4 top-4 z-10 py-2"
        >
          {product.isAvailable ? "В наличии" : "Под заказ"}
        </Badge>
        <CardHeader>
          {images && images.length > 0 && (
            <div className="relative mb-4 overflow-hidden rounded-lg bg-cover bg-no-repeat">
              <img
                className="transition duration-300 ease-in-out hover:scale-105 "
                src={images[0].src}
                alt={images[0].alt}
              />
            </div>
          )}
        </CardHeader>
        <CardContent>
          <CardTitle className="line-clamp-2 min-h-12 text-balance">
            {product.name}
          </CardTitle>
        </CardContent>
        <CardFooter className="flex justify-between gap-2">
          <p>{product.price} руб</p>
        </CardFooter>
      </Card>
    </Link>
  )
}
