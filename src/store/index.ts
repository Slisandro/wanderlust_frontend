import { create } from 'zustand';

export interface Menu {
    type: 'Vuelos' | 'Alojamiento' | 'Transporte' | 'Turismo',
    setType: (t: string) => void
}

export interface Vuelos {
    type: 'Ida' | 'Vuelta' | 'Ida y Vuelta',
    setType: (t: string) => void,
    from: boolean,
    to: boolean,
    count: {
        adult: number,
        child: number
    },
    setCount: (o: { child: number, adult: number }) => void
}

interface Alojamiento { }

interface Transporte { }

interface Turismo { }

export const useMenu = create((set) => ({
    type: "Vuelos",
    setType: (t: string) => set((state: Menu) => ({ type: t }))
}));

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