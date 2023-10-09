import TypeFlight from "../constants/type-flight-enum"

export default interface OptionSearchFlight {
    type: TypeFlight
    from: string,
    to: string,
    count: {
        adult: number,
        child: number
    }
}