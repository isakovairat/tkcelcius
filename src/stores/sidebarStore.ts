import { create } from "zustand"

export const useSidebarStore = create((set) => ({
  drawer: false,
  toggleDrawer: () => set((state: any) => ({ drawer: !state.drawer })),
}))
