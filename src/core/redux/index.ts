import { create } from 'zustand';

export interface Menu {
    type: 'Vuelos' | 'Alojamiento' | 'Transporte' | 'Turismo',
    setType: (t: string) => void
}

export const useMenu = create((set) => ({
    type: "Vuelos",
    setType: (t: string) => set((state: Menu) => ({ type: t }))
}));