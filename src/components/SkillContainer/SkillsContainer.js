import Skills from "../Skills/Skills";
import {backendIcons, frontendIcons} from "../../pages/Home/skillList";
import CV from "../../static/DamianCV.pdf";
import Cover from "../../static/Damian Kuchta Cover letter.pdf";

export default function SkillsContainer({id}) {

    const handleCvButtonClick = () => {
        window.location.href = CV
    }

    const handleCoverButtonClick = () => {
        window.location.href = Cover
    }

    return (
        <div className={'skills-container'} id={id}>
            <div className={'skills'}>

                <Skills icons={frontendIcons} name={'FRONTEND'}/>
                <Skills icons={backendIcons} name={'BACKEND'}/>
            </div>
            <div className={'skills-buttons'}>

                <button className={'button download-button'} onClick={handleCvButtonClick}>CV</button>
                <button className={'button download-button'} onClick={handleCoverButtonClick}>Cover Letter
                </button>
            </div>
        </div>

    )
}