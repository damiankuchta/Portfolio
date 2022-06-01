import React from "react"

import "./Project.css"
import Link from "../Link/Link";


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
                <Link isDisabled={buttonsConfig.github.isDisabled} link={buttonsConfig.github.link}>Github</Link>
                <Link isDisabled={buttonsConfig.demo.isDisabled} link={buttonsConfig.demo.link}>Demo</Link>
            </div>
        </div>

    )
}



