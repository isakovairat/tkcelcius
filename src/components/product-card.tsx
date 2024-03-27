/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

export const ProductCard = (props: any) => {
  const { slug, name, price, isAvailable, images } = props.product.attributes

  return (
    <Link href={`/product/${slug}`}>
      <Card className="w-max">
        <CardHeader>
          <div className="transition duration-300 hover:scale-110">
            <img
              className="h-auto rounded-lg"
              src={images[0].src}
              alt={images[0].alt}
            />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>{name}</CardTitle>
        </CardContent>
        <CardFooter className="flex justify-between gap-2">
          <p>{price} руб</p>
          <Badge variant={"default"}>
            {isAvailable ? "В наличии" : "Под заказ"}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  )
}
