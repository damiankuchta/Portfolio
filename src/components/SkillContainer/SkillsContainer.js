import Skills from "../Skills/Skills";
import {backendIcons, frontendIcons} from "../../pages/Home/skillList";
import CV from "../../static/DamianCV.pdf";
import Cover from "../../static/Damian Kuchta Cover letter.pdf";

import Link from "../Link/Link";

export default function SkillsContainer({id}) {

    return (
        <div className={'skills-container'} id={id}>
            <div className={'skills'}>

                <Skills icons={frontendIcons} name={'FRONTEND'}/>
                <Skills icons={backendIcons} name={'BACKEND'}/>
            </div>
            <div className={'skills-buttons'}>

                <Link link={CV}>CV</Link>
                <Link link={Cover}>Cover Letter
                </Link>
            </div>
        </div>

    )
}