import { Box, KeyRound, Truck, Wallet, Wrench } from "lucide-react"

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <h1 className="text-3xl font-extrabold">О нас</h1>
        <p className="text-lg text-muted-foreground">
          Наша компания уже более 10&nbsp;лет на&nbsp;рынке торгового
          оборудования. Филиалы представлены в&nbsp;трех городах России: Москве,
          Санкт-Петербурге и&nbsp;Самаре, главный из&nbsp;которых находится
          в&nbsp;Московской области, г. Балашиха.
          <br />
          <br />
          Мы&nbsp;официальные дистрибьютеры Российских производителей
          &laquo;Ангара&raquo; г. Красноярск, &laquo;Frostor group&raquo;
          Московская область, а&nbsp;так&nbsp;же являемся крупнейшими
          импортерами торгового оборудования из&nbsp;Китая.
        </p>
        <div className="grid lg:grid-cols-2 lg:gap-6">
          <div className="mx-auto max-w-screen-xl py-8">
            <div className="mx-auto place-self-center">
              <div className="relative mb-4 overflow-hidden rounded-lg bg-cover bg-no-repeat">
                <img
                  src="/images/sr.jpg"
                  className="h-[400px] rounded-lg object-cover transition duration-300 ease-in-out hover:scale-105"
                  alt=""
                />
              </div>
              <p className="max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                Выставочный зал г. Балашиха, Леоновское шоссе вл2
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl py-8">
            <div className="mr-auto place-self-center">
              <div className="relative mb-4 overflow-hidden rounded-lg bg-cover bg-no-repeat">
                <img
                  src="/images/angar.jpeg"
                  className="h-[400px] rounded-lg object-cover transition duration-300 ease-in-out hover:scale-105"
                  alt=""
                />
              </div>
              <p className="max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                Складское хранение - более 1000 м3
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="py-4 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl md:px-8">
              <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  Преимущества работы с нами
                </h2>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
                <div className="flex gap-4 md:gap-6">
                  <div className=" flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#466391] text-white shadow-lg transition-all hover:bg-[#b18ca2] md:size-14 md:rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      Оптовые продажи
                    </h3>
                    <p className="mb-2 text-gray-500">
                      Поставляем оборудование для крупнейших Российских сетей
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className=" flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#466391] text-white shadow-lg transition-all hover:bg-[#b18ca2] md:size-14 md:rounded-xl">
                    <Wallet />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      Розничные продажи
                    </h3>
                    <p className="mb-2 text-gray-500">
                      Три торговых шоурума работают для вас
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className=" flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#466391] text-white shadow-lg transition-all hover:bg-[#b18ca2] md:size-14 md:rounded-xl">
                    <KeyRound />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      Открытие под ключ
                    </h3>
                    <p className="mb-2 text-gray-500">
                      Оснащаем торговые точки всем необходимым оборудованием
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#466391] text-white shadow-lg transition-all hover:bg-[#b18ca2] md:size-14 md:rounded-xl">
                    <Wrench />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      Сервисное обслуживание
                    </h3>
                    <p className="mb-2 text-gray-500">
                      Поддерживаем наших клиентов 24/7
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className=" flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#466391] text-white shadow-lg transition-all hover:bg-[#b18ca2] md:size-14 md:rounded-xl">
                    <Box />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      3D Моделирование
                    </h3>
                    <p className="mb-2 text-gray-500">
                      Осуществляем с помощью профессионального инструмента
                      Sketch Up
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#466391] text-white shadow-lg transition-all hover:bg-[#b18ca2] md:size-14 md:rounded-xl">
                    <Truck className="" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      Логистика по всему миру
                    </h3>
                    <p className="mb-2 text-gray-500">
                      Помогаем с доставкой в любую точку мира
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
