import React from 'react'
import AirplaneChipComponent from './home-chip-component'

function CardTransportComponent(
    { styleContainer, styleCard, styleTitle, styleDescription, title, description }
        : { styleContainer: string, styleCard: string, title: string, description: string, styleTitle: string, styleDescription: string }) {
    return (
        <div className={styleContainer}>
            <AirplaneChipComponent />

            <div className={styleCard}>
                <span className={styleTitle}>{title}</span>
            </div>

            <span className={styleDescription}>{description}</span>
        </div>
    )
}

export default CardTransportComponent;