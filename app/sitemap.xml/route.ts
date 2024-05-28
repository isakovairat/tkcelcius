import { getProducts } from "@/src/api/products"

async function getSitemap() {
  const products = await getProducts()
  const map = [
    {
      url: "https://www.tccelsius.ru/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.tccelsius.ru/3d",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.tccelsius.ru/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.tccelsius.ru/contacts",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.tccelsius.ru/works",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...products.map((product) => ({
      url: `https://www.tccelsius.ru/product/${product.id}`,
      lastModified: product.updatedAt,
      changeFrequency: "daily",
      priority: 0.8,
    })),
  ]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${map
      .map(
        (item) => `
            <url>
              <loc>${item.url}</loc>
              <lastmod>${item.lastModified.toISOString()}</lastmod>
              <changefreq>${item.changeFrequency}</changefreq>
              <priority>${item.priority}</priority>
            </url>
          `
      )
      .join("")}
    </urlset>
  `
}

export async function GET() {
  const sitemap = await getSitemap()

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  })
}
