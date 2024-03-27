export const getBrands = async () => {
  try {
    const data = await fetch(`${process.env.API_URL}/api/brands`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.API_TOKEN,
      },
      cache: "no-store",
    })
    const brands = await data.json()

    return [
      {
        id: 0,
        attributes: {
          name: "Все бренды",
          slug: "all",
        },
      },
      ...brands.data,
    ]
  } catch (err) {
    console.error(err)

    return []
  }
}
