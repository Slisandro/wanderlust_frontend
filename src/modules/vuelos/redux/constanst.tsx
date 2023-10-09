export default interface Vuelos {
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