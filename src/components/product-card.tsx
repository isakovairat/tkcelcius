/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

import { APP_ROUTES } from "../config/site"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

type ProductCardProps = {
  product: any
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`${APP_ROUTES.PRODUCT}/${product.id}`}>
      <Card className="w-auto cursor-pointer">
        <CardHeader>
          {product.images_src && product.images_src.length > 0 && (
            <div className="transition duration-300 hover:scale-110">
              <img
                className="h-auto rounded-lg"
                src={product.images_src[0].src}
                alt={product.images_src[0].alt}
              />
            </div>
          )}
        </CardHeader>
        <CardContent>
          <CardTitle>{product.name}</CardTitle>
        </CardContent>
        <CardFooter className="flex justify-between gap-2">
          <p>{product.price} руб</p>
          <Badge variant={"default"}>
            {product.is_available ? "В наличии" : "Под заказ"}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  )
}
