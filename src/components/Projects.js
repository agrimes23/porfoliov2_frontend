import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'


const Projects = () => {

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
            <div className={ isVisible ? "fadeInTop" : ""}>
                <div id="projects_section" className="project-page mb-5 pb-4 d-flex align-items-center row m-auto w-75">
                    <div ref={domRef}>
                        <h2>Projects</h2>
                        <h4>alsdf;laskfj;saf</h4>
                    </div>
                    <div>
                        <ul>
                            <li>asdf</li>
                            <li>asdf</li>
                            <li>asdf</li>
                            <li>adsf</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;