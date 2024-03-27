export const getCategories = async () => {
  try {
    const data = await fetch(`${process.env.API_URL}/api/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.API_TOKEN,
      },
      cache: "no-store",
    })

    const categories = await data.json()

    return [
      {
        id: 0,
        attributes: {
          name: "Все",
          slug: "all",
        },
      },
      ...categories.data,
    ]
  } catch (e) {
    console.error(e)

    return []
  }
}
