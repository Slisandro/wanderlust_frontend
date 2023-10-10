'use client'
import { Menu, useMenu } from "@/core/redux";
import SubmenuAccommodationLayout from "@/modules/alojamiento/layout/submenu-accommodation-layout";
import AirplaneChipComponent from "@/modules/vuelos/components/airplane-chip-component";
import SubMenuFlightComponent from "@/modules/vuelos/components/submenu-flights-component";

export default function MenuModulesComponent() {
    const { type } = useMenu<Menu>(s => s as Menu);

    if (type === "Vuelos") return (
        <div className="relative w-5/6">
            <AirplaneChipComponent />
            <SubMenuFlightComponent />
        </div>
    );

    if (type === "Alojamiento") return <SubmenuAccommodationLayout />;


    if (type === "Transporte") return <p className="mx-auto">Transporte</p>;
    if (type === "Turismo") return <p className="mx-auto">Turismo</p>;

    return <p className="mx-auto">Loading...</p>;
}