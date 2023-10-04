export default function NavLinkItemComponent({ title, selected }: { title: string, selected: boolean }) {
    return (
        <li className={
            selected ?
                "font-bold cursor-pointer pb-2 px-2 border-b-[6px] border-b-primary text-[20px] font-[600] uppercase text-primary" :
                "font-bold cursor-pointer pb-2 px-2 border-b-[6px] border-b-[#B0B0D9] text-[20px] font-[600] uppercase text-[#B0B0D9]"}
        >
            {title}
        </li>
    )
}