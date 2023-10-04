export default function SelectComponent(
    { placeholder, styleSelect, styleOption, options }:
        { placeholder: string, styleSelect: string, styleOption?: string, options: string[] }
) {
    return (
        <select
            placeholder={placeholder}
            className={styleSelect}
        >
            {options.map(o => <option key={o} className={styleOption}>{o}</option>)}
        </select>
    )
}