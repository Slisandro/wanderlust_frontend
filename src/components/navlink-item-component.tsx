'use client'
import { Menu, useMenu } from "@/store";

export default function NavLinkItemComponent({ title, selected }: { title: string, selected: boolean }) {
    const { type, setType }: Menu = useMenu<Menu>(s => s as Menu);

    const handleSelect = () => setType(title);

    return (
        <li
            className={
                type === title ?
                    "font-bold cursor-pointer pb-2 px-2 border-b-[6px] border-b-primary text-[20px] font-[600] uppercase text-primary" :
                    "font-bold cursor-pointer pb-2 px-2 border-b-[6px] border-b-[#B0B0D9] text-[20px] font-[600] uppercase text-[#B0B0D9]"
            }
        >
            <button
                id={title}
                className="w-full bg-transparent border-none"
                onClick={handleSelect}
            >
                {title}
            </button>
        </li>
    )
}