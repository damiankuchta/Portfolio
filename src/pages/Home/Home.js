import "./Home.css"
import React from "react";

import profilePicture from "../../static/circle.png"
import aboutMe from "./aboutMe";


import 'reactjs-popup/dist/index.css';
import SkillsContainer from "../../components/SkillContainer/SkillsContainer";
import GreetingText from "../../components/GreetingText/GreetingText";


function Home() {


    return (
        <div id={'home-container'}>

            <img src={profilePicture} alt={"profile picture"} id={'profile-picture'}/>
            <div id={'about-me-text'}>
                <GreetingText id={'big-screen-greeting'}/>
                <div>{aboutMe}</div>
                <SkillsContainer id={'skills-big'}/>
            </div>
            <SkillsContainer id={'skills-small'}/>
        </div>
    )
}

export default Home;