import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { siteConfig } from "@/src/config/site"

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <section className="container items-center pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold">Контакты</h1>
      <div className="my-4 flex gap-6">
        <Link href={`tel:${siteConfig.phone}`}>
          <Button>Позвонить нам</Button>
        </Link>
        <Link href={`mailto:${siteConfig.email}`}>
          <Button>Написать нам</Button>
        </Link>
      </div>
      <p>Московская обл., Балашиха, Леоновское шоссе вл2 (ТК Фермерский)</p>
      <div className="my-6 h-[600px] w-full">
        <iframe
          src="https://yandex.ru/map-widget/v1/?z=12&amp;ol=biz&amp;oid=186921048508"
          width="100%"
          height="600"
        ></iframe>
      </div>
    </section>
  )
}
