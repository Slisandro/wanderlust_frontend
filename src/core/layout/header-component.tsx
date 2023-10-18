import NavComponent from "../components/nav-component";
import NavLinkComponent from "../components/navlink-component";

export default function HeaderComponent () {
    return (
      <div className="bg-white w-screen pb-4 pt-2 px-8 flex flex-col gap-6 rounded-b-[4rem]">
        <NavComponent />
        <NavLinkComponent />
      </div>
    )
}