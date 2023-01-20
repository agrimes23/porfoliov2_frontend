import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const WorkExperience = () => {

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
            <div className={ isVisible ? "fadeInTop": ""}>
                <div id="work_experience_section" ref={domRef} className="work-ex-page d-flex align-items-center row m-auto w-75">
                        <h2>Experience</h2>
                </div>
            </div>
        </>
    )
}

export default WorkExperience;