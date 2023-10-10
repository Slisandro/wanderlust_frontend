export default interface Transport {
    city: string,
    setCity: (t: string) => void,
    type: string[],
    setType: (t: string[]) => void,
    count: {
        adult: number,
        child: number
    },
    setCount: (o: { child: number, adult: number }) => void
}