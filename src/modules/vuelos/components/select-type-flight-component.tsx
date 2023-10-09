' use client'
import { useVuelos } from "../redux";
import Vuelos from "../redux/constanst";

export default function TypeFlightsComponent() {
    const { type, setType } = useVuelos(s => s as Vuelos);
    // @ts-expect-error
    const handleType = (e: React.MouseEvent<HTMLButtonElement>) => setType(e.target.id);
    return (
        <div className="flex items-center gap-8">
            <button
                id={"Ida"}
                key={0}
                onClick={handleType}
                className={type === "Ida" ? "border-[2px] font-[600] border-primary text-xl bg-primary rounded-2xl px-4 py-2 text-white" : "border-[2px] font-[600] border-primary text-xl rounded-2xl px-4 py-2 text-primary"}
            >
                Ida
            </button>
            <button
                id={"Ida y Vuelta"}
                key={1}
                onClick={handleType}
                className={type === "Ida y Vuelta" ? "border-[2px] font-[600] border-primary text-xl bg-primary rounded-2xl px-4 py-2 text-white" : "border-[2px] font-[600] border-primary text-xl rounded-2xl px-4 py-2 text-primary"}
            >
                Ida y Vuelta
            </button>
        </div>
    )
}