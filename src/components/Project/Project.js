import React from "react"

import "./Project.css"
import Button from "../Button/Button";


export default function Project({title, description, buttons, icon}) {

    const buttonsConfig = {
        github: {isDisabled: false, link: "", ...buttons.github},
        demo: {isDisabled: false, link: "", ...buttons.demo},
    }

    return (

        <div className={'project-container'}>
            <span className={'project-title'}>{title} {icon}</span>
            <span className={'project-description'}>{description}</span>
            <div className={'project-buttons'}>
                <Button isDisabled={buttonsConfig.github.isDisabled} link={buttonsConfig.github.link}>Github</Button>
                <Button isDisabled={buttonsConfig.demo.isDisabled} link={buttonsConfig.demo.link}>Demo</Button>
            </div>
        </div>

    )
}



