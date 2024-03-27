import { create } from "zustand"

export const useCategoriesStore = create((set) => ({
  categories: [],
  categoriesChanged: (newCategories: any) =>
    set((state: any) => ({ categories: [...newCategories] })),
}))
