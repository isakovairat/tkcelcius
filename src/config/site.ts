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
  name: "ТК Цельсий",
  description: "Мир торгового холодильного оборудования",
  phone: "+79680008301",
  email: "tccelsius@mail.ru",
  address: "Московская обл., Балашиха, Леоновское шоссе вл2 (ТК Фермерский)",
  mainNav: [
    {
      title: "Главная",
      href: APP_ROUTES.MAIN,
      disabled: false,
    },
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

export const YANDEX_METRIKA =
  '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(91276036, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true,ecommerce:"dataLayer"});'
