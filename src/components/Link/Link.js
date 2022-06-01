import React from "react"
import './Link.css'

export default function Link({children, link, isDisabled = false}) {

    return (
        isDisabled ? <span className={'button disabled-button'}>{children}</span> :
            <a className={'button'} href={link}>{children}</a>
    )
}