import React from 'react'
import TypeAccommodation from '../constants/type-accommodation-constant';
import CardAccommodationComponent from '../components/card-accommodation-component';

function ListTypesAccommodationLayout() {
    return (
        <div className="w-full flex items-start justify-around px-6 mt-10 h-[max-content]">
            {
                TypeAccommodation.map((accommodation) => {
                    return (
                        <CardAccommodationComponent
                            key={accommodation.title}
                            title={accommodation.title}
                            description={accommodation.description}
                            styleContainer={"relative flex flex-col items-center justify-start w-[25%] h-full gap-6"}
                            styleCard={`flex items-center justify-center shadow-default w-[85%] mx-auto h-[30vh] bg-no-repeat rounded-[2rem] bg-cover z-[2] ${accommodation.urlImage} opacity-.8`}
                            styleTitle={"text-white font-black text-2xl uppercase"}
                            styleDescription={"text-paragraph text-center font-[600] text-sm w-[100%]"}
                        />
                    )
                })
            }
        </div>
    )
}

export default ListTypesAccommodationLayout