import React from 'react'
import InputComponent from '../../../core/components/input-component';
import Vuelos from '../redux/constanst';
import { useVuelos } from '../redux';
import CountDropdownPeopleComponent from './count-people-dropdown-component';

function SearchFlightComponent() {
    const { from, to } = useVuelos<Vuelos>(s => s as Vuelos);

    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex gap-[10px]">
                <InputComponent
                    Icon={
                        <svg className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-4" width="15" height="20" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0C8.08369 0.00344047 5.28779 1.16347 3.22564 3.22563C1.16348 5.28778 0.00345217 8.08367 1.17029e-05 11C-0.00348119 13.3832 0.774992 15.7018 2.21601 17.6C2.21601 17.6 2.51601 17.995 2.56501 18.052L11 28L19.439 18.047C19.483 17.994 19.784 17.6 19.784 17.6L19.785 17.597C21.2253 15.6996 22.0034 13.3821 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22563C16.7122 1.16347 13.9163 0.00344047 11 0ZM11 15C10.2089 15 9.43553 14.7654 8.77773 14.3259C8.11993 13.8864 7.60724 13.2616 7.30449 12.5307C7.00174 11.7998 6.92253 10.9956 7.07687 10.2196C7.23121 9.44372 7.61217 8.73098 8.17158 8.17157C8.73099 7.61216 9.44373 7.2312 10.2197 7.07686C10.9956 6.92252 11.7998 7.00173 12.5307 7.30448C13.2616 7.60723 13.8864 8.11992 14.3259 8.77772C14.7654 9.43552 15 10.2089 15 11C14.9987 12.0605 14.5768 13.0771 13.827 13.827C13.0771 14.5768 12.0605 14.9987 11 15Z" fill="#B0B0D9" />
                        </svg>
                    }
                    placeholder={"Desde"}
                    disabled={from}
                    styleContainer={"relative text-gray-400 focus-within:text-gray-600 flex items-center w-[150px]"}
                    styleInput={"text-md font-[600] bg-[#EBEBFF] shadow-default text-[#B0B0D9] rounded-l-lg py-4 pl-10 w-full outline-none"}
                />
                <InputComponent
                    Icon={
                        <svg className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-4" width="15" height="20" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0C8.08369 0.00344047 5.28779 1.16347 3.22564 3.22563C1.16348 5.28778 0.00345217 8.08367 1.17029e-05 11C-0.00348119 13.3832 0.774992 15.7018 2.21601 17.6C2.21601 17.6 2.51601 17.995 2.56501 18.052L11 28L19.439 18.047C19.483 17.994 19.784 17.6 19.784 17.6L19.785 17.597C21.2253 15.6996 22.0034 13.3821 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22563C16.7122 1.16347 13.9163 0.00344047 11 0ZM11 15C10.2089 15 9.43553 14.7654 8.77773 14.3259C8.11993 13.8864 7.60724 13.2616 7.30449 12.5307C7.00174 11.7998 6.92253 10.9956 7.07687 10.2196C7.23121 9.44372 7.61217 8.73098 8.17158 8.17157C8.73099 7.61216 9.44373 7.2312 10.2197 7.07686C10.9956 6.92252 11.7998 7.00173 12.5307 7.30448C13.2616 7.60723 13.8864 8.11992 14.3259 8.77772C14.7654 9.43552 15 10.2089 15 11C14.9987 12.0605 14.5768 13.0771 13.827 13.827C13.0771 14.5768 12.0605 14.9987 11 15Z" fill="#B0B0D9" />
                        </svg>
                    }
                    placeholder={"Hasta"}
                    disabled={to}
                    styleContainer={"relative text-gray-400 focus-within:text-gray-600 flex items-center w-[150px]"}
                    styleInput={"text-md bg-[#EBEBFF] font-[600] shadow-default text-[#B0B0D9] rounded-r-lg py-[1rem] pl-10 w-full outline-none"}
                />
            </div>
            <div className="flex gap-[10px]">
                <InputComponent
                    placeholder={"Ida"}
                    disabled={from}
                    styleInput={"text-large font-[600] bg-[#EBEBFF] shadow-default text-[#B0B0D9] rounded-l-lg py-4 pl-6 w-[150px] outline-none"}
                />
                <InputComponent
                    placeholder={"Vuelta"}
                    disabled={to}
                    styleInput={"text-large font-[600] bg-[#EBEBFF] shadow-default text-[#B0B0D9] rounded-r-lg py-4 pl-6 w-[150px] outline-none"}
                />
            </div>
            <CountDropdownPeopleComponent />
            <button className="text-large font-[600] rounded-lg bg-primary p-4 rounded-lg text-white font-semibold shadow-default">
                <svg width="18" height="18" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.65 35.25L22.2625 23.175C21.2 23.9417 19.9781 24.5486 18.5969 24.9958C17.2156 25.4431 15.7458 25.6667 14.1875 25.6667C10.3271 25.6667 7.06025 24.4604 4.387 22.048C1.71375 19.6356 0.376417 16.689 0.375 13.2083C0.375 9.72639 1.71233 6.77983 4.387 4.36867C7.06167 1.9575 10.3285 0.751278 14.1875 0.75C18.0479 0.75 21.3148 1.95622 23.988 4.36867C26.6613 6.78111 27.9986 9.72767 28 13.2083C28 14.6139 27.7521 15.9396 27.2562 17.1854C26.7604 18.4312 26.0875 19.5333 25.2375 20.4917L38.625 32.5667L35.65 35.25ZM14.1875 21.8333C16.8438 21.8333 19.1019 20.9945 20.962 19.3167C22.8221 17.639 23.7514 15.6029 23.75 13.2083C23.75 10.8125 22.82 8.77572 20.9599 7.098C19.0998 5.42028 16.8423 4.58206 14.1875 4.58333C11.5312 4.58333 9.27308 5.42219 7.413 7.09992C5.55292 8.77764 4.62358 10.8138 4.625 13.2083C4.625 15.6042 5.55504 17.6409 7.41513 19.3187C9.27521 20.9964 11.5327 21.8346 14.1875 21.8333Z" fill="white" />
                </svg>
            </button>
        </div>
    )
}

export default SearchFlightComponent;