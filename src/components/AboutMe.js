import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'


const AboutMe = () => {

    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        const entry = entries[0]
        setVisible(entry.isIntersecting)
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <>
            <div className={ isVisible ? "fadeInTop" : "" }>
                <div id="aboutme_section" className="aboutme-page d-flex align-items-center row m-auto w-75">
                    <div ref={domRef} className="aboutme-section rounded">
                        <div>
                            <h2>About Me</h2>
                        </div>
                        <div>
                            <h5>Web-Developer with a focus on front-end development. My time living in Japan in a multicultural setting has taught me the value of teamwork and cooperation to get a project done. As well as being a dependable member of a team, I am very focused and organized which motivates me to take on ambitious projects. My attention to detail from my accounting work has aided me in problem solving.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;