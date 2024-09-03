export const APP_ROUTES = {
  "3D": "/3d",
  ABOUT: "/about",
  CONTACTS: "/contacts",
  PRODUCT: "/product",
  SEARCH: "/search",
  WORKS: "/works",
  MAIN: "/",
}

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Celsius",
  url: "https://www.tccelsius.ru",
  description: "Мир торгового холодильного оборудования",
  phone: "+79680008301",
  email: "tccelsius@mail.ru",
  address: "Московская обл., Балашиха, Леоновское шоссе вл2 (ТК Фермерский)",
  mainNav: [
    {
      title: "О нас",
      href: APP_ROUTES.ABOUT,
      disabled: false,
    },
    {
      title: "Наши работы",
      href: APP_ROUTES.WORKS,
      disabled: false,
    },
    {
      title: "3D моделирование",
      href: APP_ROUTES["3D"],
      disabled: false,
    },
    {
      title: "Контакты",
      href: APP_ROUTES.CONTACTS,
      disabled: false,
    },
  ],
}
