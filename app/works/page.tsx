/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next"
import { siteConfig } from "@/src/config/site"

export const metadata: Metadata = {
  title: {
    default: "Наши работы",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [`${siteConfig.url}/images/banner.jpg`],
  },
}
export default function Page() {
  return (
    <section className="container items-center pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold">Наши работы</h1>
      <div className="grid lg:grid-cols-2 lg:gap-6">
        <div className="max-w-screen-xl py-8">
          <div className="mx-auto place-self-center">
            <img
              className="mb-4 h-auto w-full rounded-lg"
              src="/images/work1.jpeg"
              alt=""
            />
            <p className="max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
              Рыбная лавка &laquo;Дары моря&raquo; Балашиха, Проспект Героев, 2.
              <br />
              Оборудование: кубические витрины Ангара
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl py-8">
          <div className="mr-auto place-self-center">
            <img
              className="mb-4 h-auto w-full rounded-lg"
              src="/images/work4.jpeg"
              alt=""
            />
            <p className="max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
              Магазин &laquo;МАСОТЕКА&raquo; Кронштадтский бульвар, 7&nbsp;ТЦ
              Корона.
              <br />
              Оборудование: витрины кубические Ангара
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-screen-xl py-8">
          <div className="mr-auto place-self-center">
            <img
              className="mb-4 h-auto w-full rounded-lg"
              src="/images/work2.jpeg"
              alt=""
            />
            <p className="max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
              Магазин мясной продукции &laquo;Беркат&raquo; 1-я Квесисская
              улица, 18&nbsp;(Бутырский рынок).
              <br />
              Оборудование: Cryspi Gamma-2
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-screen-xl py-8">
          <div className="mr-auto place-self-center ">
            <img
              className="mb-4 h-auto w-full rounded-lg"
              src="/images/work3.jpeg"
              alt=""
            />
            <p className="max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
              Магазин мясных полуфабрикатов, сыра и&nbsp;молока
              &laquo;KROLL&raquo; Смоленский бульвар, 17&nbsp;ст1.
              <br />
              Оборудование: Cryspi Gamma-2
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
