import prisma from "../server/db"

export const getBrands = async () => {
  const brands = await prisma.brand.findMany()
  brands.unshift({
    id: -1,
    name: "Все бренды",
    createdAt: null,
    updatedAt: null,
  })

  return brands
}
