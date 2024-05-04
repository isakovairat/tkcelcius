import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { siteConfig } from "@/src/config/site"

export const metadata: Metadata = {
  title: {
    default: "Контакты",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: ["/images/banner.jpg"],
  },
}

export default function Page() {
  return (
    <section className="container items-center pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold">Контакты</h1>
      <div className="my-4 flex flex-wrap gap-6 md:flex-row">
        <Link href={`tel:${siteConfig.phone}`}>
          <Button className="bg-[#466391] hover:hover:bg-[#466391]">
            Позвонить нам
          </Button>
        </Link>
        <Link href={`mailto:${siteConfig.email}`}>
          <Button className="bg-[#466391] hover:hover:bg-[#466391]">
            Написать нам
          </Button>
        </Link>
        <Link href={"https://wa.me/79680008301?text=Здравствуйте"}>
          <Button className="bg-[#25d366] hover:bg-[#128c7e] focus:bg-[#25d366] active:bg-[#25d366]">
            Написать нам в WhatsApp
          </Button>
        </Link>
      </div>
      <p>Наш адрес: {siteConfig.address}</p>
      <div className="m:h-[600px] mt-6 h-[700px] w-full">
        <iframe
          src="https://yandex.ru/map-widget/v1/?z=12&amp;ol=biz&amp;oid=186921048508"
          width="100%"
          height="600"
        ></iframe>
      </div>
    </section>
  )
}
