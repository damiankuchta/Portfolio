import React from "react"
import './Button.css'

export default function Button({children, link, isDisabled = false}) {

    return (
        isDisabled ? <span className={'button disabled-button'}>{children}</span> :
            <a className={'button'} href={link}>{children}</a>
    )
}