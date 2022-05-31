import Project from "../../components/Project/Project";
import React from "react";
import {BsFillBriefcaseFill} from 'react-icons/bs'

export default function Portfolio() {
    return (
        <Project description={"description description description description description description"}
                 title={"Portfolio "}
                 icon={<BsFillBriefcaseFill/>}
                 buttons={{demo: {isDisabled: true}, github: {link: "https://github.com/damiankuchta/Portfolio"}}}
        />)
}
