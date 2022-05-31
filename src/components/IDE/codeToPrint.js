let codeToPrint = `


import React, {Fragment} from "react"
import {useEffect, useState, useRef} from "react";
import Highlight from 'react-highlight'
import "highlight.js/styles/stackoverflow-dark.css";


export default function Typewriter({children, className, isCode, newLineCallBack, callBack, config = {}}) {

    let [useCurrentText, setCurrentText] = useState("")
    let [useBlinker, setBlinker] = useState(true)
    let divRef = useRef(null)

    let [useConf, setConf] = useState({
        skipTabs: true,
        disableAutoFillExceptions: false,
        autoFill: 3,
        speed: 30,
        initWait: 0,
        useBlinker: true,
        blinkerTime: 500,
        blinker: "|",
        keepToBottom: false,
        ...config
    })

    useEffect(() => {
        let blinkerInterval
        if (useConf.useBlinker) {
            blinkerInterval = setInterval(() => {
                setBlinker(oldBlinker => {
                    return !oldBlinker
                })
            }, useConf.blinkerTime)
        }
        return (() => {
            return clearInterval(blinkerInterval)
        })
    }, [])

    useEffect(() => {
        let timeOut
        let characterIndex = 0
        let wordIndex = 0

        let words = children.split(/(\\s+)/).filter(char => char.length)
        let autoFillException = false
        let textToBeAdded

        function displayNext() {

            if ((!autoFillException && !useConf.disableAutoFillExceptions) &&
                characterIndex >= useConf.autoFill &&
                words[wordIndex].length >= useConf.autoFill) {

                textToBeAdded = words[wordIndex].split("").splice(characterIndex).join("")
                characterIndex = 0
                wordIndex++

            } else if(useConf.skipTabs && !words[wordIndex].replace(/\\s/g, '').length) {
                textToBeAdded = words[wordIndex]
                wordIndex++
                characterIndex = 0
            } else {

                textToBeAdded = words[wordIndex][characterIndex]
                if (words[wordIndex].length - 1 === characterIndex) {
                    wordIndex++
                    characterIndex = 0
                } else {
                    characterIndex++
                }
            }

            let newLines = textToBeAdded.split("").filter(x => x==="\\n")
            if(newLineCallBack) {
                for (const x of newLines) {
                    newLineCallBack()
                }

            }

            setCurrentText((oldText) => {
                return oldText + textToBeAdded
            })

            if (words.length - 1 < wordIndex) {
                clearInterval(timeOut)
                if(callBack) {
                    callBack()
                }

            }
            timeOut = setTimeout(displayNext, useConf.speed)
        }

        timeOut = setTimeout(displayNext, useConf.initWait)

        return (() => {
            return clearInterval(timeOut)
        })

    }, [])


    return (
        <Fragment>
            {isCode ?
                <Highlight className={'language-js ' + className} ref={divRef}>
                    {useCurrentText + (useBlinker && useConf.useBlinker ? useConf.blinker : "")}
                </Highlight> :
                <span className={className} ref={divRef}>
                    <pre>
                    {useCurrentText + (useBlinker && useConf.useBlinker ? useConf.blinker : "")}
                    </pre>
                </span>
            }

        </Fragment>


    )
}`

export default codeToPrint