import {useEffect, useState} from "react"

function gerMainContainerDimensions() {
    const {clientHeight: height, clientWidth: width} = document.getElementById('main-container')
    return {height, width}
}

export default function useDocumentDimensions() {
    const [documentDimensions, setDocumentDimensions] = useState({width: 0, height: 0});

    useEffect(() => {


        function handleResize() {
            setDocumentDimensions(gerMainContainerDimensions())
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('load', handleResize)
        };
    }, [])

    return documentDimensions
}