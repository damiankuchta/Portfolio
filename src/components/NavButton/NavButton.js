import React from "react"
import "./NavButton.css"


export default function NavButton({id, onClick}) {
    return (
        <button className={'nav-button'} id={id} onClick={onClick}>
            <div className={'nav-button-line'}></div>
            <div className={'nav-button-line'}></div>
            <div className={'nav-button-line'}></div>
        </button>
    )
}