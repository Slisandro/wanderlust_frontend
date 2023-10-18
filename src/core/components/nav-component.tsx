import Image from "next/image";

export default function NavComponent () {
    return (
        <div className='flex items-center justify-between'>
          <Image
            src="/assets/isotipo_wanderlust.png"
            alt="Wanderlust logo"
            width={180}
            height={50}
            priority
          />
          <button className="border-2 border-primary rounded-[50px] px-4 py-2 text-primary font-[600] hover:bg-primary hover:text-white">
            Ingresar
          </button>
        </div>
    )
}