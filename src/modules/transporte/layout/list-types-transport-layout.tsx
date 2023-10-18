import React from 'react'
import TypeTransport from '../constants/type-transport-constant';
import CardTransportComponent from '../components/card-transport-component';

function ListTypesTransportLayout() {
    return (
        <div className="w-full flex items-center justify-around px-12 mt-12 h-[max-content]">
            {
                TypeTransport.map((transport) => {
                    return (
                        <CardTransportComponent
                            key={transport.title}
                            title={transport.title}
                            description={transport.description}
                            styleContainer={"relative flex flex-col items-center justify-start w-[max-content] h-[300px] gap-12"}
                            styleCard={`flex items-center justify-center shadow-default h-[250px] w-[250px] bg-no-repeat rounded-[2rem] bg-auto bg-center z-[2] ${transport.urlImage} opacity-.8`}
                            styleTitle={"text-white font-black text-2xl uppercase"}
                            styleDescription={"text-paragraph text-center font-[600] text-md max-w-[250px] h-[150px]"}
                        />
                    )
                })
            }
        </div>
    )
}

export default ListTypesTransportLayout;