import Skills from "../Skills/Skills";
import {backendIcons, frontendIcons} from "../../pages/Home/skillList";
import CV from "../../static/DamianCV.pdf";
import Cover from "../../static/Damian Kuchta Cover letter.pdf";
import Button from "../Button/Button";

export default function SkillsContainer({id}) {

    return (
        <div className={'skills-container'} id={id}>
            <div className={'skills'}>

                <Skills icons={frontendIcons} name={'FRONTEND'}/>
                <Skills icons={backendIcons} name={'BACKEND'}/>
            </div>
            <div className={'skills-buttons'}>

                <Button link={CV}>CV</Button>
                <Button link={Cover}>Cover Letter
                </Button>
            </div>
        </div>

    )
}