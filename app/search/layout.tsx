export default function Layout({ children }: any) {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold">Поиск</h1>
      {children}
    </section>
  )
}
