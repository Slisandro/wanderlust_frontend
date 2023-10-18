import React from 'react'
import SearchAccommodationComponent from '../components/search-accommodation-component'
import ListTypesAccommodationLayout from './list-types-accommodation-layout'

function SubmenuAccommodationLayout() {
    return (
        <div className="relative w-full px-6 flex flex-col items-center justify-around">
            <SearchAccommodationComponent />
            <ListTypesAccommodationLayout />
        </div>
    )
}

export default SubmenuAccommodationLayout