import Project from "../../components/Project/Project";
import React from "react";

export default function NotCompleted() {
    return (
        <Project description={"Coming soon"}
                 title={"Not completed"}
                 buttons={{demo: {isDisabled: true}, readmore: {isDisabled: true}, github: {isDisabled: true}}
                 }

        />
    )
}