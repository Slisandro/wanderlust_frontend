import SearchFlightComponent from './search-flights-component';
import TypeFlightsComponent from './select-type-flight-component';

function SubMenuFlightComponent() {
  return (
    <div
      className="relative bg-white px-12 py-8 pt-6 flex flex-col gap-6 rounded-[3rem] z-10 w-full mx-auto"
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