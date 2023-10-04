const TYPES_FLIGHT = [
    { label: "Ida", selected: true },
    { label: "Vuelta", selected: false },
    { label: "Ida y Vuelta", selected: false }
];

export default function TypeFlightsComponent() {
    return (
        <div className="flex items-center gap-8">
            {TYPES_FLIGHT.map(i => (
                <button
                    key={i.label}
                    className={i.selected ? "border-[3px] border-primary text-[18px] bg-primary uppercase rounded-2xl px-2 text-white" : "border-[3px] border-primary text-[18px] uppercase rounded-2xl px-2 text-primary"}
                >
                    {i.label}
                </button>
            ))}
        </div>
    )
}