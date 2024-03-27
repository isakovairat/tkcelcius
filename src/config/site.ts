export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ТК Цельсий",
  description: "Мир торгового холодильного оборудования",
  phone: "+79680008301",
  email: "tccelsius@mail.ru",
  mainNav: [
    {
      title: "Главная",
      href: "/",
      disabled: false,
    },
    {
      title: "О нас",
      href: "/about",
      disabled: false,
    },
    {
      title: "Наши работы",
      href: "/works",
      disabled: false,
    },
    {
      title: "3D моделирование",
      href: "/3d",
      disabled: false,
    },
    {
      title: "Контакты",
      href: "/contacts",
      disabled: false,
    },
  ],
}
