import useState, { useDebugValue } from 'react'
import AboutMe from './AboutMe';
import NavBar from './NavBar';
import Projects from './Projects';
import WorkExperience from './WorkExperience'

const HomePage = () => {

    return (
        <>
            <div className="home-page container-fluid row d-flex align-items-center">
                <div className="style-border">
                <div className="intro-styling"></div>
                <div id="intro_section" className="main-intro">
                    <h1 className="main-title">Alex Grimes</h1>
                    <h2 className="description-title">Frontend Developer | Web Developer</h2>
                </div>
                <div>
                    <NavBar/>
                </div>
                <AboutMe />
                <WorkExperience />
                <Projects />
            </div>
            </div>
        </>
    )
}

export default HomePage;