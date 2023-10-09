import SearchFlightComponent from './search-flights-component';
import TypeFlightsComponent from './select-type-flight-component';
import SwitchTypeFlightComponent from './switch-type-flight-component';

function SubMenuFlightComponent() {
  return (
    <div
      className="relative bg-white px-12 pt-8 pb-12 flex flex-col gap-8 rounded-[3rem] z-10 w-full mx-auto"
      style={{ zIndex: 10 }}
    >
      {/* switch type flights */}
      <TypeFlightsComponent />
      {/* search flights */}
      <SearchFlightComponent />
    </div>
  )
}

export default SubMenuFlightComponent;