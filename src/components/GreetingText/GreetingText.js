import React, {Fragment, useState} from "react";
import Typewriter from "../Typewriter/TypeWriter";
import "./GreetingLines.css"

function GreetingText({setGreetingFinished, id}) {

    let [useIsTitleDone, setIsTitleDone] = useState(false)

    const handleTitleCallBack = () => {
        setIsTitleDone(() => {
            return true
        })
    }

    const handleGreetingFinished = () => {
        setGreetingFinished(true)
    }

    return (
        <div className={'hello-world'} id={id}>
            <Typewriter config={{speed: 30, initWait: 0, useBlinker: false}}
                        callBack={handleTitleCallBack}
                        className={'greeting-lines'}>
                {`Damian Kuchta `}
            </Typewriter>

            {useIsTitleDone && <Typewriter config={{speed: 30, initWait: 0, useBlinker: false}}
                                           className={'greeting-lines-small'}
                                           callBack={handleGreetingFinished}>
                {`Aspiring web developer`}
            </Typewriter>}
        </div>
    )
}

export default GreetingText;