import NavLinkItemComponent from "./navlink-item-component"

const ITEMS = [
    { title: "Vuelos", selected: true },
    { title: "Alojamiento", selected: false },
    { title: "Transporte", selected: false },
    { title: "Turismo", selected: false }
]

export default function NavLinkComponent() {
    return (
        <ul className="flex items-center justify-between w-2/3 mx-auto">
            {ITEMS.map(i => <NavLinkItemComponent key={i.title} title={i.title} selected={i.selected} />)}
        </ul>
    )
}