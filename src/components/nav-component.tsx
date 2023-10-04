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
          <button className="border-[4px] border-primary rounded-[50px] px-4 py-2 text-primary font-[600] text-[20px]">Ingresar</button>
        </div>
    )
}