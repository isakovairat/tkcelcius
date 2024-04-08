// import { ProductEntity, Query } from "../../types"

// const query = `products {
// 		data {
// 			attributes {
// 				name
// 				slug
// 				price
// 				isAvailable
// 				images {
// 					data {
// 						attributes {
// 							alternativeText
// 							url
// 						}
// 					}
// 				}
// 				category {
// 					data {
// 						attributes {
// 							slug
// 						}
// 					}
// 				}
// 				brand {
// 					data {
// 						attributes {
// 							slug
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}`

// export const getProducts = async () => {
//   try {
//     const data = await fetch(`${process.env.API_URL}/graphql`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + process.env.API_TOKEN,
//       },
//       cache: "no-store",
//       body: JSON.stringify({
//         query: `{${query}}`,
//       }),
//     })

//     const productsResponse = await data.json()
//     const products: Query["products"] = productsResponse.data.products

//     return products?.data.map(productResolver) || []
//   } catch (e) {
//     console.error(e)

//     return []
//   }
// }

// const productResolver = (product: ProductEntity) => {
//   return {
//     ...product,
//     attributes: {
//       ...product.attributes,
//       images: {
//         ...product.attributes?.images,
//         data: product.attributes?.images?.data.map((image) => ({
//           ...image,
//           attributes: {
//             ...image.attributes,
//             url: `${process.env.API_URL}${image.attributes?.url}`,
//           },
//         })),
//       },
//     },
//   }
// }

import productsData from "../../public/data/products.json"

export const getProducts = () => {
  return productsData.products
}

export const getProduct = (id: string) => {
  return productsData.products.find((product) => product.id === id)
}
