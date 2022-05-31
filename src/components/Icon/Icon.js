import React from "react"

export default function Icon({className, src, alt, href}) {
    return (
        <a href={href}><img className={className} src={src} alt={alt}/></a>

    )
}