import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import AboutMe from './AboutMe';
import NavBar from './NavBar';
import Projects from './Projects';
import Footer from './Footer'
import WorkExperience from './WorkExperience'
import Intro from './Intro';
import NavBarScroll from './NavBarScroll'


const HomePage = () => {

    const [isVisible, setVisible] = useState(false);

    return (
        <>
            <div className="home-page container-fluid row d-flex align-items-center">
                <NavBarScroll isVisible={isVisible} />
                <Intro setVisible={setVisible} />
                <AboutMe />
                <Projects />
                <WorkExperience />                
                <Footer/>
            </div>

        </>
    )
}

export default HomePage;