import NavComponent from "../components/nav-component";
import NavLinkComponent from "../components/navlink-component";

export default function HeaderComponent () {
    return (
      <div className="bg-white w-screen p-8 flex flex-col gap-8 rounded-b-[4rem] shadow-default">
        <NavComponent />
        <NavLinkComponent />
      </div>
    )
}