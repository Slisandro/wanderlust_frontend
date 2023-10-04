import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat bg-cover bg-background-1">
      {/* header */}
      <div className="bg-white w-screen p-8 flex flex-col gap-12 rounded-b-[4rem]">
        {/* nav */}
        <div className='flex items-center justify-between'>
          <Image
            src="/assets/isotipo_wanderlust.png"
            alt="Wanderlust logo"
            width={180}
            height={50}
            priority
          />
          <button className="border-[4px] border-primary rounded-[50px] px-4 py-2 text-primary font-[600] text-[20px]">Ingresar</button>
        </div>
        {/* navlinks */}
        <ul className="flex items-center justify-between w-2/3 mx-auto">
          <li className="font-bold cursor-pointer pb-2 px-2 border-b-[6px] border-b-primary text-[20px] font-[600] uppercase text-primary">Vuelos</li>
          <li className="font-bold cursor-pointer pb-2 px-2 border-b-[6px] border-b-gray-300 text-[20px] font-[600] uppercase text-gray-300">Alojamiento</li>
          <li className="font-bold cursor-pointer pb-2 px-2 border-b-[6px] border-b-gray-300 text-[20px] font-[600] uppercase text-gray-300">Transporte</li>
          <li className="font-bold cursor-pointer pb-2 px-2 border-b-[6px] border-b-gray-300 text-[20px] font-[600] uppercase text-gray-300">Turismo</li>
        </ul>
      </div>
      {/* search bar */}
      <div className="relative w-5/6">
        <div className="absolute top-[-3rem] left-20 bg-[#EBEBFF] h-[5rem] z-0 rounded-xl px-6 pt-4">
          <svg width="25" height="20" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.5474 10.8584L10.452 15.0718L2.82985 8.40268C2.78434 8.36476 2.74307 8.32204 2.70674 8.27528C2.17217 7.55043 2.63581 6.47102 3.57943 6.31964L29.0102 2.24363L16.2111 24.5936C15.7422 25.4141 14.5889 25.4737 14.0903 24.7436C14.0475 24.6772 14.0145 24.605 13.9923 24.5291L12.0664 18.5094"
              stroke="#403CC7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div
          className="relative bg-white px-12 pt-8 pb-12 flex flex-col gap-8 rounded-[3rem] z-10 w-full mx-auto"
          style={{ zIndex: 10 }}
        >
          <div className="flex items-center gap-8">
            <button className="border-[3px] border-primary text-[18px] bg-primary uppercase rounded-2xl px-2 text-white">
              Ida
            </button>
            <button className="border-[3px] border-primary text-[18px] uppercase rounded-2xl px-2 text-primary text-medium">
              Vuelta
            </button>
            <button className="border-[3px] border-primary text-[18px] uppercase rounded-2xl px-2 text-primary text-medium">
              Ida y vuelta
            </button>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex gap-2">
              <div className="relative flex items-center gap-6">
                <svg className="absolute left-4" width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 0C8.08369 0.00344047 5.28779 1.16347 3.22564 3.22563C1.16348 5.28778 0.00345217 8.08367 1.17029e-05 11C-0.00348119 13.3832 0.774992 15.7018 2.21601 17.6C2.21601 17.6 2.51601 17.995 2.56501 18.052L11 28L19.439 18.047C19.483 17.994 19.784 17.6 19.784 17.6L19.785 17.597C21.2253 15.6996 22.0034 13.3821 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22563C16.7122 1.16347 13.9163 0.00344047 11 0ZM11 15C10.2089 15 9.43553 14.7654 8.77773 14.3259C8.11993 13.8864 7.60724 13.2616 7.30449 12.5307C7.00174 11.7998 6.92253 10.9956 7.07687 10.2196C7.23121 9.44372 7.61217 8.73098 8.17158 8.17157C8.73099 7.61216 9.44373 7.2312 10.2197 7.07686C10.9956 6.92252 11.7998 7.00173 12.5307 7.30448C13.2616 7.60723 13.8864 8.11992 14.3259 8.77772C14.7654 9.43552 15 10.2089 15 11C14.9987 12.0605 14.5768 13.0771 13.827 13.827C13.0771 14.5768 12.0605 14.9987 11 15Z" fill="#B0B0D9" />
                </svg>
                <input
                  placeholder="Desde"
                  className="text-[20px] font-[600] uppercase p-6 pl-[4rem] bg-[#EBEBFF] w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-l-lg"
                />
              </div>
              <div className="relative flex items-center gap-6">
                <svg className="absolute left-4" width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 0C8.08369 0.00344047 5.28779 1.16347 3.22564 3.22563C1.16348 5.28778 0.00345217 8.08367 1.17029e-05 11C-0.00348119 13.3832 0.774992 15.7018 2.21601 17.6C2.21601 17.6 2.51601 17.995 2.56501 18.052L11 28L19.439 18.047C19.483 17.994 19.784 17.6 19.784 17.6L19.785 17.597C21.2253 15.6996 22.0034 13.3821 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22563C16.7122 1.16347 13.9163 0.00344047 11 0ZM11 15C10.2089 15 9.43553 14.7654 8.77773 14.3259C8.11993 13.8864 7.60724 13.2616 7.30449 12.5307C7.00174 11.7998 6.92253 10.9956 7.07687 10.2196C7.23121 9.44372 7.61217 8.73098 8.17158 8.17157C8.73099 7.61216 9.44373 7.2312 10.2197 7.07686C10.9956 6.92252 11.7998 7.00173 12.5307 7.30448C13.2616 7.60723 13.8864 8.11992 14.3259 8.77772C14.7654 9.43552 15 10.2089 15 11C14.9987 12.0605 14.5768 13.0771 13.827 13.827C13.0771 14.5768 12.0605 14.9987 11 15Z" fill="#B0B0D9" />
                </svg>
                <input
                  placeholder="Hasta"
                  className="text-[20px] font-[600] uppercase p-6 pl-[4rem] w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-r-lg"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <input
                placeholder="Ida"
                className="text-[20px] font-[600] uppercase p-6 bg-[#EBEBFF] w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-l-lg"
              />
              <input
                placeholder="Vuelta"
                className="text-[20px] font-[600] uppercase p-6 w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-r-lg"
              />
            </div>
            <select
              placeholder="Vuelta"
              className="text-[20px] font-[600] uppercase p-[1.75rem] w-[200px] shadow-default text-[#B0B0D9] font-semibold rounded-lg"
            >
              <option className="" defaultChecked>1 adulto</option>
              <option className="">2 adulto</option>
              <option className="">3 adulto</option>
            </select>
            <button className="text-[20px] font-[600] uppercase rounded-lg bg-primary px-6 py-4 rounded-lg text-white font-semibold">Q</button>
          </div>
        </div>
      </div>

      <p className="px-12 py-8 w-full text-start font-bold text-xl text-secondary flex items-center gap-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C13.0837 2.00344 10.2878 3.16347 8.22562 5.22563C6.16347 7.28778 5.00344 10.0837 5 13C4.9965 15.3832 5.77498 17.7018 7.216 19.6C7.216 19.6 7.516 19.995 7.565 20.052L16 30L24.439 20.047C24.483 19.994 24.784 19.6 24.784 19.6L24.785 19.597C26.2253 17.6996 27.0034 15.3821 27 13C26.9966 10.0837 25.8365 7.28778 23.7744 5.22563C21.7122 3.16347 18.9163 2.00344 16 2ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2196 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8863 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C19.9987 14.0605 19.5768 15.0771 18.827 15.827C18.0771 16.5768 17.0605 16.9987 16 17Z" fill="white" />
        </svg>

        La gran Barrera de Coral, Australia
      </p>
    </main>
  )
}
