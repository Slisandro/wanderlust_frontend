import { create } from 'zustand';
import Vuelos from './constanst';
import Transport from './constanst';

export const useTransport = create((set) => ({
    city: "",
    setCity: (t: string) => set((state: Transport) => ({ ...state, city: t })),
    type: ["Hoteles", "Hostales", "Apartamentos"],
    setType: (t: string[]) => set((state: Transport) => ({ ...state, type: t })),
    count: {
        adult: 1,
        child: 0
    },
    setCount: (obj: { child: number, adult: number }) => set((state: Vuelos) => ({ ...state, count: obj }))
}))