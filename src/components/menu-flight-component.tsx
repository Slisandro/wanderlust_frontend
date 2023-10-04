import Input from "./input-component";
import SelectComponent from "./select-component";
import TypeFlightsComponent from "./type-flights-component";

export default function MenuFlightComponent() {
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
                        styleContainer={"relative flex items-center gap-6"}
                        styleInput={"text-[20px] font-[600] uppercase p-6 pl-[4rem] w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-r-lg"}
                    />
                </div>
                <div className="flex gap-2">
                    <Input
                        placeholder={"Ida"}
                        styleInput={"text-[20px] font-[600] uppercase p-6 bg-[#EBEBFF] w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-l-lg"}
                    />
                    <Input
                        placeholder={"Vuelta"}
                        styleInput={"text-[20px] font-[600] uppercase p-6 w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-r-lg"}
                    />
                </div>
                <SelectComponent
                    placeholder="Pasajeros"
                    styleSelect={"text-[20px] font-[600] uppercase p-[1.75rem] w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-lg"}
                    styleOption={""}
                    options={["1 adulto", "2 adultos", "3 adultos"]}
                />
                <button className="text-[20px] font-[600] uppercase rounded-lg bg-primary px-6 py-4 rounded-lg text-white font-semibold">Q</button>
            </div>
        </div>
    )
}