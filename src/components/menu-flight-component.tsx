'use client'
import { Vuelos, useVuelos } from "@/store";
import { useState } from 'react';
import Input from "./input-component";
import TypeFlightsComponent from "./type-flights-component";

export default function MenuFlightComponent() {
    const { from, to } = useVuelos<Vuelos>(s => s as Vuelos);

    return (
        <div
            className="relative bg-white px-12 pt-8 pb-12 flex flex-col gap-8 rounded-[3rem] z-10 w-full mx-auto"
            style={{ zIndex: 10 }}
        >
            <TypeFlightsComponent />
            <div className="w-full flex items-center justify-between">
                <div className="flex gap-2">
                    <Input
                        Icon={
                            <svg className="absolute left-4" width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 0C8.08369 0.00344047 5.28779 1.16347 3.22564 3.22563C1.16348 5.28778 0.00345217 8.08367 1.17029e-05 11C-0.00348119 13.3832 0.774992 15.7018 2.21601 17.6C2.21601 17.6 2.51601 17.995 2.56501 18.052L11 28L19.439 18.047C19.483 17.994 19.784 17.6 19.784 17.6L19.785 17.597C21.2253 15.6996 22.0034 13.3821 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22563C16.7122 1.16347 13.9163 0.00344047 11 0ZM11 15C10.2089 15 9.43553 14.7654 8.77773 14.3259C8.11993 13.8864 7.60724 13.2616 7.30449 12.5307C7.00174 11.7998 6.92253 10.9956 7.07687 10.2196C7.23121 9.44372 7.61217 8.73098 8.17158 8.17157C8.73099 7.61216 9.44373 7.2312 10.2197 7.07686C10.9956 6.92252 11.7998 7.00173 12.5307 7.30448C13.2616 7.60723 13.8864 8.11992 14.3259 8.77772C14.7654 9.43552 15 10.2089 15 11C14.9987 12.0605 14.5768 13.0771 13.827 13.827C13.0771 14.5768 12.0605 14.9987 11 15Z" fill="#B0B0D9" />
                            </svg>
                        }
                        placeholder={"Desde"}
                        disabled={from}
                        styleContainer={"relative flex items-center gap-6"}
                        styleInput={"text-[20px] font-[600] uppercase p-6 pl-[4rem] bg-[#EBEBFF] w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-l-lg"}
                    />
                    <Input
                        Icon={
                            <svg className="absolute left-4" width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 0C8.08369 0.00344047 5.28779 1.16347 3.22564 3.22563C1.16348 5.28778 0.00345217 8.08367 1.17029e-05 11C-0.00348119 13.3832 0.774992 15.7018 2.21601 17.6C2.21601 17.6 2.51601 17.995 2.56501 18.052L11 28L19.439 18.047C19.483 17.994 19.784 17.6 19.784 17.6L19.785 17.597C21.2253 15.6996 22.0034 13.3821 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22563C16.7122 1.16347 13.9163 0.00344047 11 0ZM11 15C10.2089 15 9.43553 14.7654 8.77773 14.3259C8.11993 13.8864 7.60724 13.2616 7.30449 12.5307C7.00174 11.7998 6.92253 10.9956 7.07687 10.2196C7.23121 9.44372 7.61217 8.73098 8.17158 8.17157C8.73099 7.61216 9.44373 7.2312 10.2197 7.07686C10.9956 6.92252 11.7998 7.00173 12.5307 7.30448C13.2616 7.60723 13.8864 8.11992 14.3259 8.77772C14.7654 9.43552 15 10.2089 15 11C14.9987 12.0605 14.5768 13.0771 13.827 13.827C13.0771 14.5768 12.0605 14.9987 11 15Z" fill="#B0B0D9" />
                            </svg>
                        }
                        placeholder={"Hasta"}
                        disabled={to}
                        styleContainer={"relative flex items-center gap-6"}
                        styleInput={"text-[20px] font-[600] uppercase p-6 pl-[4rem] bg-[#EBEBFF] w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-r-lg"}
                    />
                </div>
                <div className="flex gap-2">
                    <Input
                        placeholder={"Ida"}
                        disabled={from}
                        styleInput={"text-[20px] font-[600] uppercase p-6 bg-[#EBEBFF] w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-l-lg"}
                    />
                    <Input
                        placeholder={"Vuelta"}
                        disabled={to}
                        styleInput={"text-[20px] font-[600] uppercase p-6 bg-[#EBEBFF] w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-r-lg"}
                    />
                </div>
                <Dropdown />
                <button className="text-[20px] font-[600] uppercase rounded-lg bg-primary px-6 py-4 rounded-lg text-white font-semibold">
                    <svg width="25" height="25" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.65 35.25L22.2625 23.175C21.2 23.9417 19.9781 24.5486 18.5969 24.9958C17.2156 25.4431 15.7458 25.6667 14.1875 25.6667C10.3271 25.6667 7.06025 24.4604 4.387 22.048C1.71375 19.6356 0.376417 16.689 0.375 13.2083C0.375 9.72639 1.71233 6.77983 4.387 4.36867C7.06167 1.9575 10.3285 0.751278 14.1875 0.75C18.0479 0.75 21.3148 1.95622 23.988 4.36867C26.6613 6.78111 27.9986 9.72767 28 13.2083C28 14.6139 27.7521 15.9396 27.2562 17.1854C26.7604 18.4312 26.0875 19.5333 25.2375 20.4917L38.625 32.5667L35.65 35.25ZM14.1875 21.8333C16.8438 21.8333 19.1019 20.9945 20.962 19.3167C22.8221 17.639 23.7514 15.6029 23.75 13.2083C23.75 10.8125 22.82 8.77572 20.9599 7.098C19.0998 5.42028 16.8423 4.58206 14.1875 4.58333C11.5312 4.58333 9.27308 5.42219 7.413 7.09992C5.55292 8.77764 4.62358 10.8138 4.625 13.2083C4.625 15.6042 5.55504 17.6409 7.41513 19.3187C9.27521 20.9964 11.5327 21.8346 14.1875 21.8333Z" fill="white" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const { count, setCount } = useVuelos(s => s as Vuelos);
    const handleClick = () => setOpen(!open);
    const handleAddAdult = () => setCount({ ...count, adult: count.adult + 1 });
    const handleSubAdult = () => setCount({ ...count, adult: count.adult - 1 });
    const handleAddChild = () => setCount({ ...count, child: count.child + 1 });
    const handleSubChild = () => setCount({ ...count, child: count.child - 1 });

    return (
        (
            <div className="relative inline-block text-left">
                <button
                    type="button"
                    onClick={handleClick}
                    className="text-[20px] font-[600] uppercase p-[1.25rem] bg-[#EBEBFF] w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-lg flex items-center justify-between"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                >
                    Pasajes
                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd" />
                    </svg>
                </button>
                {open && (
                    <div
                        className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-4 py-2"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}
                    >
                        <div className="px-4 py-2 flex items-center justify-between gap-6" role="none">
                            <div className="flex items-center justify-between gap-4">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.86084 10C11.3461 10 13.3608 7.98528 13.3608 5.5C13.3608 3.01472 11.3461 1 8.86084 1C6.37556 1 4.36084 3.01472 4.36084 5.5C4.36084 7.98528 6.37556 10 8.86084 10Z" stroke="#706CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.361 11.8H13.6778C14.3358 11.8002 14.971 12.0407 15.4642 12.4762C15.9574 12.9117 16.2746 13.5124 16.3562 14.1652L16.7081 16.9768C16.7397 17.2301 16.7172 17.4873 16.6418 17.7311C16.5665 17.975 16.4402 18.2001 16.2713 18.3915C16.1023 18.5828 15.8946 18.736 15.6619 18.8409C15.4292 18.9459 15.1768 19.0001 14.9216 19H2.80039C2.54514 19.0001 2.29279 18.9459 2.06009 18.8409C1.8274 18.736 1.61968 18.5828 1.45073 18.3915C1.28178 18.2001 1.15545 17.975 1.08014 17.7311C1.00482 17.4873 0.98224 17.2301 1.01389 16.9768L1.36489 14.1652C1.44652 13.512 1.76397 12.9112 2.25754 12.4756C2.75112 12.04 3.38681 11.7998 4.04509 11.8H4.36099" stroke="#706CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-[18px] text-[#706CFF] font-[500]">Adultos</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={handleSubAdult}
                                    className="px-4 text-[20px] text-[#706CFF] font-[600] border-2 rounded-full border-[#706cff] flex items-center justify-center"
                                >
                                    -
                                </button>
                                <span className="text-[18px] text-[#706CFF] font-[600]">{count.adult}</span>
                                <button
                                    onClick={handleAddAdult}
                                    className="px-4 text-[20px] text-[#706CFF] font-[600] border-2 rounded-full border-[#706cff] flex items-center justify-center"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="px-4 py-2 flex items-center justify-between gap-6" role="none">
                            <div className="flex items-center justify-between gap-4">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#706CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.3999 7.34513V7.25513" stroke="#706CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.6001 7.34513V7.25513" stroke="#706CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.9999 15.4C10.9547 15.4 11.8704 15.0208 12.5455 14.3456C13.2206 13.6705 13.5999 12.7548 13.5999 11.8H6.3999C6.3999 12.7548 6.77919 13.6705 7.45432 14.3456C8.12945 15.0208 9.04512 15.4 9.9999 15.4Z" stroke="#706CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-[18px] text-[#706CFF] font-[500]">Niños</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={handleSubChild}
                                    className="px-4 text-[20px] text-[#706CFF] font-[600] border-2 rounded-full border-[#706cff] flex items-center justify-center"
                                >
                                    -
                                </button>
                                <span className="text-[18px] text-[#706CFF] font-[600]">{count.child}</span>
                                <button
                                    onClick={handleAddChild}
                                    className="px-4 text-[20px] text-[#706CFF] font-[600] border-2 rounded-full border-[#706cff] flex items-center justify-center"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    )
}