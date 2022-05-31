import React, {useState} from "react"

import "./Project.css"

export default function Project({title, description, buttons, icon}) {
    //
    let [useButtons, setButtons] = useState({
        github: {isDisabled: false, link: "", ...buttons.github},
        demo: {isDisabled: false, link: "", ...buttons.demo},
    })

    return (

        <div className={'project-container'}>
            <span className={'project-title'}>{title} {icon}</span>
            <span className={'project-description'}>{description}</span>
            <div className={'project-buttons'}>
                <ProjectButton name={'Github'} config={useButtons.github}/>
                <ProjectButton name={'Demo'} config={useButtons.demo}/>
            </div>
        </div>

    )
}

function ProjectButton({name, config}) {
    if (config.isDisabled) {
            return <span className={'button disabled-button'}>name</span>
        }
        return <a className={'button'} href={config.link}>Github</a>
}


