import useState, { useDebugValue } from 'react'
import NavBar from './NavBar';

const Intro = () => {

    return (
        <>
                <div className="style-border">
                <div className="intro-styling"></div>
                <div id="intro_section" className="main-intro">
                    <h1 className="main-title">Alex Grimes</h1>
                    <h2 className="description-title">Frontend Developer | Web Developer</h2>
                </div>
                <div>
                    <NavBar/>
                </div>
            </div>
        </>
    )
}

export default Intro;