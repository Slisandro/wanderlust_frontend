export default function Input(
    { Icon, placeholder, styleInput, styleContainer, disabled }:
        { Icon?: any, placeholder: string, styleInput: string, styleContainer?: string, disabled: boolean }) {

    if (Icon) {
        return (
            <div className={styleContainer}>
                {Icon}
                <input
                    disabled={disabled}
                    placeholder={placeholder}
                    className={styleInput}
                    style={{ opacity: disabled ? ".5" : "1" }}
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
        />
    )
}