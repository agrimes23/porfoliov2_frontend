import useState, { useDebugValue } from 'react'
import AboutMe from './AboutMe';
import NavBar from './NavBar';
import Projects from './Projects';
import Footer from './Footer'
import WorkExperience from './WorkExperience'
import Intro from './Intro';


const HomePage = () => {

    return (
        <>
            <div className="home-page container-fluid row d-flex align-items-center">
                <Intro />
                <AboutMe />
                <Projects />
                <WorkExperience />                
                <Footer/>
            </div>

        </>
    )
}

export default HomePage;