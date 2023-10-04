import HeaderComponent from '@/components/header-component';
import LocationComponent from '@/components/location-component';
import SearchBarComponent from '@/components/search-bar-component';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat bg-cover bg-background-1">
      {/* header */}
      <HeaderComponent />
      {/* search bar */}
      <SearchBarComponent />
      {/* location */}
      <LocationComponent label="La gran Barrera de Coral, Australia" />
    </main>
  )
}
