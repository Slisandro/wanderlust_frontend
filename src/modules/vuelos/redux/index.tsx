import { create } from 'zustand';
import Vuelos from './constanst';

export const useVuelos = create((set) => ({
    type: 'Ida',
    setType: (t: string) => set((state: Vuelos) => {
        if (t === "Ida") {
            return {
                ...state,
                type: t,
                from: false,
                to: true
            }
        }

        if (t === "Vuelta") {
            return {
                ...state,
                type: t,
                from: false,
                to: true
            }
        }

        return {
            ...state,
            type: t,
            from: false,
            to: false
        }
    }),
    from: false,
    to: true,
    count: {
        adult: 1,
        child: 0
    },
    setCount: (obj: { child: number, adult: number }) => set((state: Vuelos) => ({ ...state, count: obj }))
}))