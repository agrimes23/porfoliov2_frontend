import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import NavBar from './NavBar';

const Intro = (props) => {

    
  
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        const entry = entries[0]
        props.setVisible(entry.isIntersecting)
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <>
            <div ref={domRef} className="style-border">
                <div className="intro-styling"></div>
                <div id="intro_section" className="main-intro">
                    <h1 className="main-title">Alex Grimes</h1>
                    <h2 className="description-title">Frontend Developer | Web Developer</h2>
                </div>
                <div>
                    <NavBar />
                    
                </div>
            </div>
        </>
    )
}

export default Intro;