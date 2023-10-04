' use client'

import { Vuelos, useVuelos } from "@/store";

const TYPES_FLIGHT = [
    { label: "Ida", selected: true },
    { label: "Vuelta", selected: false },
    { label: "Ida y Vuelta", selected: false }
];

export default function TypeFlightsComponent() {
    const { type, setType } = useVuelos(s => s as Vuelos);

    const handleType = (e: any) => setType(e.target.id);

    return (
        <div className="flex items-center gap-8">
            {TYPES_FLIGHT.map(i => (
                <button
                    id={i.label}
                    key={i.label}
                    onClick={handleType}
                    className={type === i.label ? "border-[3px] border-primary text-[18px] bg-primary uppercase rounded-2xl px-2 text-white" : "border-[3px] border-primary text-[18px] uppercase rounded-2xl px-2 text-primary"}
                >
                    {i.label}
                </button>
            ))}
        </div>
    )
}