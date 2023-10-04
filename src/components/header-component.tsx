import NavComponent from "./nav-component";
import NavLinkComponent from "./navlink-component";

export default function HeaderComponent () {
    return (
      <div className="bg-white w-screen p-8 flex flex-col gap-12 rounded-b-[4rem]">
        <NavComponent />
        <NavLinkComponent />
      </div>
    )
}