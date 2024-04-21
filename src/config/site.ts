export const APP_ROUTES = {
  "3D": "/3d",
  ABOUT: "/about",
  CONTACTS: "/contacts",
  PRODUCT: "/product",
  SEARCH: "/search",
  WORKS: "/works",
  MAIN: "/",
}

export const S3_URL =
  "https://ethtnhfnfqyxjtrfskah.supabase.co/storage/v1/object/public/tkcelcius"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Celcius",
  description: "Мир торгового холодильного оборудования",
  phone: "+79680008301",
  email: "tccelsius@mail.ru",
  address: "Московская обл., Балашиха, Леоновское шоссе вл2 (ТК Фермерский)",
  mainNav: [
    // {
    //   title: "Главная",
    //   href: APP_ROUTES.MAIN,
    //   disabled: false,
    // },
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
