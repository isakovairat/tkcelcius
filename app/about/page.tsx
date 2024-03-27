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
          <div className="max-w-screen-xl py-8">
            <div className="mx-auto place-self-center">
              <img
                className="w-full h-auto rounded-lg mb-4"
                src="/images/about/sr.jpg"
                alt=""
              />
              <p className="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                Выставочный зал г. Балашиха, Леоновское шоссе вл2
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl py-8">
            <div className="mr-auto place-self-center">
              <img
                className="w-full h-auto rounded-lg mb-4"
                src="/images/about/angar.jpeg"
                alt=""
              />
              <p className="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
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
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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
                      24/7
                    </h3>
                    <p className="mb-2 text-gray-500">
                      Мы работаем круглосуточно! Отгрузка в течение 30 минут
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      3D
                    </h3>
                    <p className="mb-2 text-gray-500">
                      Нарисуем 3D проект вашего помещения в профессиональном
                      приложении SketchUp. Для наших клиентов данная услуга
                      бесплатная.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      Гарантия
                    </h3>
                    <p className="mb-2 text-gray-500">
                      На все новое оборудование распространяется гарантийное
                      обслуживание 1 год. По истечению срока гарантии оказываем
                      послегарантийное обслуживание
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      Доставка
                    </h3>
                    <p className="mb-2 text-gray-500">
                      Мы помогаем клиентам осуществить доставку в любую точку
                      России
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      Ассортимент
                    </h3>
                    <p className="mb-2 text-gray-500">
                      Наш ассортимент постоянно пополняется, вы можете выбрать
                      из существующего оборудования, либо сделать индивидуальный
                      заказ.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">
                      Контроль качества
                    </h3>
                    <p className="mb-2 text-gray-500">
                      Все оборудование проходит полную проверку и техническое
                      обслуживание
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
