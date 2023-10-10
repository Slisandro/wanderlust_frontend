import React from 'react'
import TypeAccommodation from '../constants/type-accommodation-constant';
import CardAccommodationComponent from '../components/card-accommodation-component';

function ListTypesAccommodationLayout() {
    return (
        <div className="w-full flex items-center justify-around px-12 mt-12 h-[max-content]">
            {
                TypeAccommodation.map((accommodation) => {
                    return (
                        <CardAccommodationComponent
                            key={accommodation.title}
                            title={accommodation.title}
                            description={accommodation.description}
                            styleContainer={"relative flex flex-col items-center justify-start w-[max-content] h-[300px] gap-12"}
                            styleCard={`flex items-center justify-center shadow-default h-[250px] w-[250px] bg-no-repeat rounded-[2rem] bg-cover z-[2] ${accommodation.urlImage} opacity-.8`}
                            styleTitle={"text-white font-black text-2xl uppercase"}
                            styleDescription={"text-paragraph text-center font-[600] text-md max-w-[250px] h-[150px]"}
                        />
                    )
                })
            }
        </div>
    )
}

export default ListTypesAccommodationLayout