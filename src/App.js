import "./app.css"
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import React, {Fragment, useState} from "react";
import IDE from "./components/IDE/IDE";
import Nav from "./components/Nav/Nav";
import Contact from "./pages/Contact/Contact";

function App() {

    const [iseGreetingFinished, setGreetingFinished] = useState(false)

    return (
        <Fragment>
            <Nav setGreetingFinished={setGreetingFinished}/>
            <div id={'main-container'}>

                <IDE iseGreetingFinished={iseGreetingFinished}/>
                <Home/>
                <Projects/>
            </div>
            <Contact/>
        </Fragment>
    )
}

export default App;