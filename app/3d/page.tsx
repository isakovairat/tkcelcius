/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next"
import { siteConfig } from "@/src/config/site"

export const metadata: Metadata = {
  title: {
    default: "3D",
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
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <h1 className="text-3xl font-extrabold">Визуализация</h1>
        <p className="text-lg text-muted-foreground">
          Мы&nbsp;оказываем услуги 3D&nbsp;моделирования и&nbsp;визуализации
          помещения для будущего магазина. Моделирование осуществляется
          с&nbsp;помощью профессионального инструмента SketchUp. Все размеры
          учитываются в соответствии с&nbsp;масштабом, что позволяет клиенту
          увереннее принимать решение по&nbsp;покупке оборудования. Для наших
          клиентов эта услуга бесплатная!
        </p>
        <h2 className="text-2xl font-semibold">Пример проекта</h2>
        <div className="grid lg:grid-cols-2 lg:gap-6">
          <div className="max-w-screen-xl py-4">
            <div className="mx-auto place-self-center">
              <img
                className="mb-4 h-auto w-full rounded-lg"
                src="/images/DDD1.png"
                alt=""
              />
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl py-4">
            <div className="mr-auto place-self-center">
              <img
                className="mb-4 h-auto w-full rounded-lg"
                src="/images/DDD2.png"
                alt=""
              />
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl py-4">
            <div className="mr-auto place-self-center">
              <img
                className="mb-4 h-auto w-full rounded-lg"
                src="/images/DDD3.png"
                alt=""
              />
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl py-4">
            <div className="mr-auto place-self-center">
              <img
                className="mb-4 h-auto w-full rounded-lg"
                src="/images/DDD4.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <p className="text-lg text-muted-foreground">
          Такие проекты позволяют с&nbsp;точностью до&nbsp;миллиметра оценить
          полезную площадь магазина, площадь для работы продавца&nbsp;и,
          конечно&nbsp;же, эргономику всего помещения для комфортного нахождения
          клиентов в&nbsp;вашем будущем магазине. Грамотная расстановка
          холодильного оборудования - залог успеха и&nbsp;процветания вашего
          бизнеса!
        </p>
        <div className="grid lg:grid-cols-2 lg:gap-6">
          <div className="max-w-screen-xl py-4">
            <div className="mx-auto place-self-center">
              <img
                className="mb-4 h-auto w-full rounded-lg"
                src="/images/DDD5.png"
                alt=""
              />
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl py-4">
            <div className="mr-auto place-self-center">
              <img
                className="mb-4 h-auto w-full rounded-lg"
                src="/images/DDD6.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <p className="text-lg text-muted-foreground">
          Благодаря нашему проекту вы можете оценить полезное пространство для
          продавца
        </p>
        <h2 className="text-2xl font-semibold">
          Пример визуализации торгового острова в ТЦ
        </h2>
        <div className="grid lg:grid-cols-2 lg:gap-6">
          <div className="mx-auto max-w-screen-xl py-4">
            <div className="mr-auto place-self-center">
              <img
                className="mb-4 h-auto w-full rounded-lg"
                src="/images/DDD7.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
