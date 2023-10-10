import { create } from 'zustand';
import Vuelos from './constanst';
import Accommodation from './constanst';

export const useAccommodation = create((set) => ({
    city: "",
    setCity: (t: string) => set((state: Accommodation) => ({ ...state, city: t })),
    type: ["Hoteles", "Hostales", "Apartamentos"],
    setType: (t: string[]) => set((state: Accommodation) => ({ ...state, type: t })),
    count: {
        adult: 1,
        child: 0
    },
    setCount: (obj: { child: number, adult: number }) => set((state: Vuelos) => ({ ...state, count: obj }))
}))