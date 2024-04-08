import categoriesData from "../../public/data/categories.json"

// export const getCategories = async (): Promise<CategoryEntity[]> => {
//   try {
//     const data = await fetch(`${process.env.API_URL}/api/categories`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + process.env.API_TOKEN,
//       },
//       cache: "no-store",
//     })

//     const categories: CategoryEntityResponseCollection = await data.json()

//     return [
//       {
//         id: "0",
//         attributes: {
//           name: "Все",
//           slug: "all",
//         },
//       },
//       ...categories.data,
//     ]
//   } catch (e) {
//     console.error(e)

//     return []
//   }
// }

export const getCategories = () => {
  return categoriesData.categories
}

export const getCategory = (id: number) => {
  return categoriesData.categories.find((category) => category.id === id)
}
