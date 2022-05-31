import React from 'react'
import Icon from "../Icon/Icon";
import "./Skills.css"

export default function Skills({icons, name}) {

    return (
        <div className={'category-container'}>
            <span className={'category-name'}>{name}</span>
            { icons &&
            <div className={'icon-container'}>
                {icons.map((icon) => {
                    return <Icon src={icon.picture} alt={icon.alt} className={'icon'} href={icon.link}/>
                })}
            </div>}
        </div>
    )
}