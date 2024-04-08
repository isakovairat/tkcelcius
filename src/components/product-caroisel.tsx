"use client"

import { Card, CardContent } from "@/src/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

/* eslint-disable @next/next/no-img-element */
export default function ProductCarousel({ product }: any) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full lg:max-w-md"
    >
      <CarouselContent>
        {product?.images_src.map((img: any, index: number) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img src={img.src} alt={img.alt} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
