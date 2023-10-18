'use client'
import { Menu, useMenu } from "@/core/redux";

export default function NavLinkItemComponent({ title, selected }: { title: string, selected: boolean }) {
    const { type, setType }: Menu = useMenu<Menu>(s => s as Menu);

    const handleSelect = () => setType(title);

    return (
        <li
            className={
                type === title ?
                    "font-[600] cursor-pointer pb-[.25rem] px-2 border-b-2 border-b-primary text-lg font-[600] uppercase text-primary" :
                    "font-[600] cursor-pointer pb-[.25rem] px-2 border-b-2 border-b-[#B0B0D9] text-lg font-[600] uppercase text-[#B0B0D9]"
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