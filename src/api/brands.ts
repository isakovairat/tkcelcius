import brandsData from "../../public/data/brands.json"

// import { BrandEntity, BrandEntityResponseCollection } from "@/types"

// export const getBrands = async (): Promise<BrandEntity[]> => {
//   try {
//     const data = await fetch(`${process.env.API_URL}/api/brands`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + process.env.API_TOKEN,
//       },
//       cache: "no-store",
//     })
//     const brands: BrandEntityResponseCollection = await data.json()

//     return [
//       {
//         id: "0",
//         attributes: {
//           name: "Все бренды",
//           slug: "all",
//         },
//       },
//       ...brands.data,
//     ]
//   } catch (err) {
//     console.error(err)

//     return []
//   }
// }

export const getBrands = () => {
  return brandsData.brands
}
