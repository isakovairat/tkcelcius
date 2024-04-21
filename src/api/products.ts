import { Product } from "@prisma/client"

import prisma from "../server/db"

export const getProducts = () => {
  return prisma.product.findMany()
}

export const getProduct = (id: Product["id"]) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
  })
}
