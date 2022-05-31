import React from 'react'

import "./Projects.css"

import Portfolio from "../../projects/Portfolio/Portfolio";
import NotCompleted from "../../projects/NotCompleted/NotCompoleted";

export default function Projects() {

    return (
        <div id={'projects-container'}>
            <Portfolio/>
            <NotCompleted/>
            <NotCompleted/>
        </div>
    )
}