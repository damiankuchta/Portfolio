import Typewriter from "../../components/Typewriter/TypeWriter";
import "./IDE.css"
import {useState, useEffect} from "react";
import codeToPrint from "../../components/IDE/codeToPrint";
import useDocumentDimensions from "../../customHooks/useDocumentDimensions";
import Highlight from 'react-highlight'

const codeToPrintSplitedByNewLines = codeToPrint.split("\n")

function IDE({iseGreetingFinished}) {

    let [lineToPrint, setLineToPrint] = useState(0)
    let [displayLinesCount, setDisplayLineCount] = useState(0)
    let [isTooManyLines, setIsTooManyLines] = useState(false)
    let [lineComponents, setLineComponents] = useState([])
    let [maxLinesCount, setMaxLinesCount] = useState(200)

    const {height, width} = useDocumentDimensions()

    //make sures that IDE is always following code at the bottom
    useEffect(() => {
        let coding = document.getElementsByClassName("coding-animation")[0]
        coding.scrollTop = 9999999
    }, [lineComponents])

    //calculate max amount of lines
    useEffect(() => {
        setMaxLinesCount((height / 12) - 5)
    }, [height])

    useEffect(() => {
        setLineComponents(lastCodeLines => {

            lastCodeLines = [...lastCodeLines,
                <Highlight className={'language-js'}>{codeToPrintSplitedByNewLines[lineToPrint - 1] + "\n"}</Highlight>]

            if (isTooManyLines) {
                lastCodeLines.shift()
            }

            return lastCodeLines
        })
    }, [lineToPrint, isTooManyLines])

    // Should component start removing unnecessary lines?
    useEffect(() => {
        if ((!isTooManyLines) && (displayLinesCount > maxLinesCount)) {
            setIsTooManyLines(true)
        } else if (isTooManyLines && displayLinesCount < maxLinesCount) {
            setIsTooManyLines(false)
        }
    }, [maxLinesCount, displayLinesCount, isTooManyLines])

    const handleTypeWriterCallBack = () => {
        const needsRestart = lineToPrint >= codeToPrintSplitedByNewLines.length - 1
        if (needsRestart) {
            setLineToPrint(0)
        } else {
            setLineToPrint(old => old + 1)
        }
        setDisplayLineCount(old => old + 1)
    }

    return (
        <div id={"ide"} style={{height: height}}>
            <div className={'coding-animation'}>
                {lineComponents.map(line => {
                    return line
                })}


                {iseGreetingFinished && <Typewriter callBack={handleTypeWriterCallBack}
                                                    config={{speed: 1, repeat: true, autofill: 3}}
                                                    className={'code-typewriter'}>

                    {codeToPrintSplitedByNewLines[lineToPrint]}
                </Typewriter>}
                }

            </div>

        </div>
    )
}

export default IDE;