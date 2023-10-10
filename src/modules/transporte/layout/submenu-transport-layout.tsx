import React from 'react'
import SearchTransportComponent from '../components/search-transport-component'
import ListTypesTransportLayout from './list-types-transport-layout'

function SubmenuTransportLayout() {
    return (
        <div className="relative w-full px-6 flex flex-col items-center justify-around">
            <SearchTransportComponent />
            <ListTypesTransportLayout />
        </div>
    )
}

export default SubmenuTransportLayout;