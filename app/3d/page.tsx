/* eslint-disable @next/next/no-img-element */
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
                className="w-full h-auto rounded-lg mb-4"
                src="/images/3d/DDD1.png"
                alt=""
              />
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl py-4">
            <div className="mr-auto place-self-center">
              <img
                className="w-full h-auto rounded-lg mb-4"
                src="/images/3d/DDD2.png"
                alt=""
              />
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl py-4">
            <div className="mr-auto place-self-center">
              <img
                className="w-full h-auto rounded-lg mb-4"
                src="/images/3d/DDD3.png"
                alt=""
              />
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl py-4">
            <div className="mr-auto place-self-center">
              <img
                className="w-full h-auto rounded-lg mb-4"
                src="/images/3d/DDD4.png"
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
                className="w-full h-auto rounded-lg mb-4"
                src="/images/3d/DDD5.png"
                alt=""
              />
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl py-4">
            <div className="mr-auto place-self-center">
              <img
                className="w-full h-auto rounded-lg mb-4"
                src="/images/3d/DDD6.png"
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
                className="w-full h-auto rounded-lg mb-4"
                src="/images/3d/DDD7.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
