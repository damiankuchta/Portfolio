import React, {useCallback, useState} from "react";
import Typewriter from "../Typewriter/TypeWriter";
import "./GreetingLines.css"

function GreetingText({setGreetingFinished, id}) {

    let [useIsTitleDone, setIsTitleDone] = useState(false)

    let handleTitleCallBack = useCallback(() => {
        setIsTitleDone(true)
    },[setIsTitleDone])

    let handleGreetingFinished = useCallback(() => {
        if(setGreetingFinished) {
            setGreetingFinished(true)
        }
    },[setGreetingFinished])



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