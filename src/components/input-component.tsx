import React, { SVGProps } from "react";

export default function Input(
    { Icon, placeholder, styleInput, styleContainer } :
    { Icon?: any, placeholder: string, styleInput: string, styleContainer?: string }) {

    if (Icon) {
        return (
            <div className={styleContainer}>
                {Icon}
                <input
                    placeholder={placeholder}
                    className={styleInput}
                />
            </div>
        )
    }

    return (
        <input
            placeholder={placeholder}
            className={styleInput}
        />
    )
}