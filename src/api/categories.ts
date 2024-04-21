import { Category } from "@prisma/client"

import prisma from "../server/db"

export const getCategories = async () => {
  const categories = await prisma.category.findMany()

  categories.unshift({
    id: -1,
    name: "Все категории",
    createdAt: null,
    updatedAt: null,
  })

  return categories
}

export const getCategory = (id: Category["id"]) => {
  return prisma.category.findUnique({
    where: {
      id,
    },
  })
}
