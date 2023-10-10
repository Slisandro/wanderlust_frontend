import HeaderComponent from "@/core/layout/header-component";
import LocationComponent from "@/core/components/location-component";
import MenuModulesComponent from "@/core/components/menu-modules-component";
import { Menu, useMenu } from "../redux";

export default function HomePage() {
    const { type } = useMenu(s => s as Menu)
    return (
        <>
            <HeaderComponent />
            <MenuModulesComponent />
            {type === "Vuelos" && <LocationComponent label="La gran Barrera de Coral, Australia" />}
        </>
    )
}