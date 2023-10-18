export default function InputComponent(
    { Icon, placeholder, styleInput, styleContainer, disabled, onChange }:
        { onChange?: (e: any) => void; Icon?: any, placeholder: string, styleInput: string, styleContainer?: string, disabled: boolean }) {

    if (Icon) {
        return (
            <div className={styleContainer}>
                {Icon}
                <input
                    disabled={disabled}
                    placeholder={placeholder}
                    className={styleInput}
                    style={{ opacity: disabled ? ".5" : "1" }}
                    onChange={onChange}
                />
            </div>
        )
    }

    return (
        <input
            disabled={disabled}
            placeholder={placeholder}
            className={styleInput}
            style={{ opacity: disabled ? ".5" : "1" }}
            onChange={onChange}
        />
    )
}