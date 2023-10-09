import NAVLINKS from "../constants/nav-links-constants";
import NavLinkItemComponent from "./navlink-item-component";

export default function NavLinkComponent() {
    return (
        <ul className="flex items-center justify-between w-2/3 mx-auto">
            {NAVLINKS.map(i => <NavLinkItemComponent key={i.title} title={i.title} selected={i.selected} />)}
        </ul>
    )
}