import React from 'react'
import {SocialIcon} from "react-social-icons";
import "./SocialMedia.css"

export default function SocialMedia() {
    return (

        <div id={'social-media'}>
            <SocialIcon url={"https://www.linkedin.com/in/damian-kuchta-74a6b8164/"}/>
            <SocialIcon url={"https://mail.google.com/mail/?view=cm&source=mailto&to=damkuch@gmail.com"}/>
            <SocialIcon url={"https://wa.me/+353897051412"}/>
            <SocialIcon url={"https://github.com/damiankuchta"}/>
        </div>


    )
}