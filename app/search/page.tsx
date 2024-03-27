"use client"

import { Icons } from "@/src/components/icons"
import { Input } from "@/src/components/ui/input"
import { useForm } from "react-hook-form"

export default function Page() {
  const { register, handleSubmit } = useForm()

  const onSubmit = ({ search }: any) => {
    console.log("search", search)
  }

  return (
    <form role="search" method="get" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative my-8">
        <Icons.search className="absolute inset-y-0 my-auto ml-2 size-5" />
        <Input
          {...register("search", { required: false })}
          placeholder="Поиск"
          type="search"
          className="pl-10 pr-4 md:w-[400px]"
        />
        <span className="sr-only">Search</span>
      </div>
    </form>
  )
}
