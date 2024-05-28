import { Product } from "@prisma/client"
import Fuse from "fuse.js"

const createFuseInstance = (
  products: Product[],
  options: Fuse.IFuseOptions<Product>
): Fuse<Product> => {
  return new Fuse(products, options)
}

const options: Fuse.IFuseOptions<Product> = {
  keys: ["name"],
  threshold: 0.3,
  includeScore: true,
}

export { createFuseInstance, options }
