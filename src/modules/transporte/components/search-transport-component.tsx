import React from 'react'
import { useTransport } from '../redux'
import InputComponent from '@/core/components/input-component'
import Accommodation from '../redux/constanst';

function SearchTransportComponent() {
    const { city, setCity } = useTransport(s => s as Accommodation);
    const handleCity = (e: any) => setCity(e.target.value)
    return (
        <div className="w-full my-8 flex items-center gap-8">
            <InputComponent
                Icon={
                    <svg className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-4 text-default" width="15" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2C13.0837 2.00344 10.2878 3.16347 8.22562 5.22563C6.16347 7.28778 5.00344 10.0837 5 13C4.9965 15.3832 5.77498 17.7018 7.216 19.6C7.216 19.6 7.516 19.995 7.565 20.052L16 30L24.439 20.047C24.483 19.994 24.784 19.6 24.784 19.6L24.785 19.597C26.2253 17.6996 27.0034 15.3821 27 13C26.9966 10.0837 25.8365 7.28778 23.7744 5.22563C21.7122 3.16347 18.9163 2.00344 16 2ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2196 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8863 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C19.9987 14.0605 19.5768 15.0771 18.827 15.827C18.0771 16.5768 17.0605 16.9987 16 17Z" fill="currentColor" />
                    </svg>
                }
                placeholder={"Buscar ciudad"}
                disabled={false}
                styleContainer={"relative flex items-center w-[150px]"}
                styleInput={"border-2 border-default rounded-[50px] text-default text-large font-[600] py-2 pl-12 w-full outline-none"}
                onChange={handleCity}
            />
            {
                city && (
                    <button className="text-large font-[600] uppercase rounded-lg bg-primary p-2 rounded-lg text-white font-semibold">
                        <svg width="15" height="15" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.65 35.25L22.2625 23.175C21.2 23.9417 19.9781 24.5486 18.5969 24.9958C17.2156 25.4431 15.7458 25.6667 14.1875 25.6667C10.3271 25.6667 7.06025 24.4604 4.387 22.048C1.71375 19.6356 0.376417 16.689 0.375 13.2083C0.375 9.72639 1.71233 6.77983 4.387 4.36867C7.06167 1.9575 10.3285 0.751278 14.1875 0.75C18.0479 0.75 21.3148 1.95622 23.988 4.36867C26.6613 6.78111 27.9986 9.72767 28 13.2083C28 14.6139 27.7521 15.9396 27.2562 17.1854C26.7604 18.4312 26.0875 19.5333 25.2375 20.4917L38.625 32.5667L35.65 35.25ZM14.1875 21.8333C16.8438 21.8333 19.1019 20.9945 20.962 19.3167C22.8221 17.639 23.7514 15.6029 23.75 13.2083C23.75 10.8125 22.82 8.77572 20.9599 7.098C19.0998 5.42028 16.8423 4.58206 14.1875 4.58333C11.5312 4.58333 9.27308 5.42219 7.413 7.09992C5.55292 8.77764 4.62358 10.8138 4.625 13.2083C4.625 15.6042 5.55504 17.6409 7.41513 19.3187C9.27521 20.9964 11.5327 21.8346 14.1875 21.8333Z" fill="white" />
                        </svg>
                    </button>
                )
            }
        </div>
    )
}

export default SearchTransportComponent