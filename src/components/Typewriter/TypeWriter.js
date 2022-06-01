import React, {useEffect, useState} from "react"
import "highlight.js/styles/stackoverflow-dark.css";


export default function Typewriter({children, className, newLineCallBack, callBack, config = {}}) {

    let [useCurrentText, setCurrentText] = useState("")
    let [useBlinker, setBlinker] = useState(true)

    let [useConf, setConf] = useState({
        skipTabs: true,
        autoFill: 99,
        speed: 30,
        initWait: 0,
        useBlinker: true,
        blinkerTime: 500,
        blinker: "|",
        repeat: false,
        hideBlinkerOnFinish: false,
        ...config
    })

    useEffect(() => {
        setCurrentText("")
    }, [children])

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
    }, [useConf.useBlinker])

    useEffect(() => {
        let timeOut
        let characterIndex = 0
        let wordIndex = 0

        let words = children.split(/(\s+)/).filter(char => char.length)
        let textToBeAdded = ""


        function displayNext() {

            const isNoMoreWords = words.length - 1 < wordIndex
            if (isNoMoreWords) {
                handleFunctionFinish()
            } else {
                textToBeAdded = whatToPrint(textToBeAdded)

                const doesWordContainsNewLine = textToBeAdded.split("").filter(x => x === "\n").length
                if (newLineCallBack && doesWordContainsNewLine) {
                    newLineCallBack()
                }

                setCurrentText(oldText => oldText + textToBeAdded)

                timeOut = setTimeout(displayNext, useConf.speed)
            }
        }


        function whatToPrint(textToBeAdded) {
            const shouldWordBeAutofilled = characterIndex >= useConf.autoFill
            const isSkipTabsEnabled = useConf.skipTabs

            const isWordMadeOfWhiteChars = !words[wordIndex].replace(/\s/g, '').length
            if (shouldWordBeAutofilled) {
                function removeAlreadyPrintedCharsFromWord() {
                    return words[wordIndex].split("").splice(characterIndex).join("")
                }

                textToBeAdded = removeAlreadyPrintedCharsFromWord()
                nextWord()
            } else if (isSkipTabsEnabled && isWordMadeOfWhiteChars) {
                textToBeAdded = words[wordIndex]
                nextWord()
            } else {
                textToBeAdded = words[wordIndex][characterIndex]
                const isThisCharacterLast = words[wordIndex].length - 1 === characterIndex
                isThisCharacterLast ? nextWord() : nextCharacter()
            }

            function nextWord() {
                wordIndex++
                characterIndex = 0
            }

            function nextCharacter() {
                characterIndex++
            }

            return textToBeAdded
        }


        function handleFunctionFinish() {

            const shouldComponentStartOver = useConf.repeat
            if (shouldComponentStartOver) {
                restart()
            } else {
                const hideBlinker = useConf.hideBlinkerOnFinish
                if (hideBlinker) setConf((conf) => ({...conf, useBlinker: false}))
                clearInterval(timeOut)
            }

            if (callBack) {
                callBack()
            }

            function restart() {
                wordIndex = 0
                characterIndex = 0
                timeOut = setTimeout(displayNext, useConf.speed)
            }
        }

        timeOut = setTimeout(displayNext, useConf.speed)

        return (() => {
            return clearInterval(timeOut)
        })

    }, [children, newLineCallBack,useConf.autoFill, useConf.hideBlinkerOnFinish, useConf.repeat, useConf.skipTabs, useConf.speed])

    return (
        <pre className={className} >
            {useCurrentText + (useBlinker && useConf.useBlinker ? useConf.blinker : "")}
        </pre>
    )
}