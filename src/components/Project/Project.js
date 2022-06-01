import React, {useMemo} from "react"

import "./Project.css"


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
                <ProjectButton name={'Github'} config={buttonsConfig.github}/>
                <ProjectButton name={'Demo'} config={buttonsConfig.demo}/>
            </div>
        </div>

    )
}

function ProjectButton({name, config}) {
    if (config.isDisabled) {
            return <span className={'button disabled-button'}>{name}</span>
        }
        return <a className={'button'} href={config.link}>{name}</a>
}


