import HeaderComponent from "@/core/layout/header-component";
import LocationComponent from "@/core/components/location-component";
import MenuModulesComponent from "@/core/components/menu-modules-component";

export default function HomePage() {
    return (
        <>
            <HeaderComponent />
            <MenuModulesComponent />
            <LocationComponent label="La gran Barrera de Coral, Australia" />
        </>
    )
}