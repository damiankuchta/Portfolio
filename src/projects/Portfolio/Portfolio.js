import Project from "../../components/Project/Project";
import React from "react";
import {BsFillBriefcaseFill} from 'react-icons/bs'

export default function Portfolio() {
    return (
        <Project description={"The very website that you are on right now Readme on Github"}
                 title={"Portfolio "}
                 icon={<BsFillBriefcaseFill/>}
                 buttons={{demo: {isDisabled: true}, github: {link: "https://github.com/damiankuchta/Portfolio"}}}
        />)
}
