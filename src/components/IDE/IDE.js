import Typewriter from "../../components/Typewriter/TypeWriter";
import "./IDE.css"
import {useState, useEffect, useMemo} from "react";
import codeToPrint from "../../components/IDE/codeToPrint";
import useDocumentDimensions from "../../customHooks/useDocumentDimensions";
import Highlight from 'react-highlight'

const codeToPrintSplitedByNewLines = codeToPrint.split("\n")

function IDE({iseGreetingFinished}) {

    let [currentLine, setCurrentLine] = useState(0)
    let [ideLines, setIdeLines] = useState(0)
    let [codeLines, setCodeLines] = useState([])
    let [maxLines, setMaxLines] = useState(200)

    const {height, width} = useDocumentDimensions()

    //make sures that IDE is always following code at the bottom
    useEffect(() => {
        let coding = document.getElementsByClassName("coding-animation")[0]
        coding.scrollTop = 9999999
    }, [currentLine])

    //calculate max amount of lines
    useEffect(() => {
        setMaxLines((height / 12)-5)
    }, [height])

    useEffect(() => {
        setCodeLines(lastCodeLines => {

            lastCodeLines = [...lastCodeLines,
                <Highlight className={'language-js'}>{codeToPrintSplitedByNewLines[currentLine - 1] + "\n"}</Highlight>]

            if (ideLines > maxLines) {
                lastCodeLines.shift()
            }

            return lastCodeLines
        })
    }, [currentLine])

    const handleTypeWriterCallBack = () => {
        const needsRestart = currentLine >= codeToPrintSplitedByNewLines.length - 1
        if (needsRestart) {
            setCurrentLine(0)
        } else {
            setCurrentLine(old => old + 1)
        }
        setIdeLines(old => old + 1)
    }

    return (
        <div id={"ide"} style={{height: height}}>
            <div className={'coding-animation'}>
                {codeLines.map(line => {
                    return line
                })}


                {iseGreetingFinished && <Typewriter callBack={handleTypeWriterCallBack}
                                                    config={{speed: 1, repeat: true, autofill: 3}}
                                                    className={'code-typewriter'}>

                    {codeToPrintSplitedByNewLines[currentLine]}
                </Typewriter>}
                }

            </div>

        </div>
    )
}

export default IDE;