const query = `products {
		data {
			attributes {
				name
				slug
				price
				isAvailable
				images {
					data {
						attributes {
							alternativeText
							url
						}
					}
				}
				category {
					data {
						attributes {
							slug
						}
					}
				}
				brand {
					data {
						attributes {
							slug
						}
					}
				}
			}
		}
	}`

export const getProducts = async () => {
  try {
    const data = await fetch(`${process.env.API_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.API_TOKEN,
      },
      cache: "no-store",
      body: JSON.stringify({
        query: `{${query}}`,
      }),
    })

    const products = await data.json()

    return products.data.products.data
  } catch (e) {
    console.error(e)

    return []
  }
}
