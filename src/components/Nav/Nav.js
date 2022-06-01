import React, {useState} from "react"
import "./Nav.css"
import NavButton from "../NavButton/NavButton";
import GreetingText from "../GreetingText/GreetingText";

function Nav({setGreetingFinished}) {

    const [isListExpanded, setIsListExpanded] = useState(false)

    const toggleMenu = () => {
        setIsListExpanded(oldState => !oldState)
    }

    return (
        <nav id={'navbar'}>
            <div id={'navbar-base'}>
                <GreetingText setGreetingFinished={setGreetingFinished}/>
                <NavButton onClick={toggleMenu}/>
            </div>
            <ul id={isListExpanded ? 'nav-list' : 'nav-list-hidden'}>
                <li><a href={'#home-container'} id={'home'} className={'nav-link'} onClick={toggleMenu}> About </a></li>
                <li><a href={'#projects-container'} id={'projects'} className={'nav-link'} onClick={toggleMenu}> Projects </a></li>
                <li><a href={'#contact-container'} id={'contact'} className={'nav-link'} onClick={toggleMenu}> Contact </a></li>

            </ul>
        </nav>
    )
}

export default Nav;