import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import WorkExpContent from './WorkExpContent';

const WorkExperience = () => {

    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    const tabHeaders = ["Experience", "School", "Certificates"]
    const [active, setActive] = useState(tabHeaders[0])
    const Button = styled.button`
    /* Same as above */
  `;
  
  const ButtonToggle = styled(Button)`
    opacity: 0.6;
    background-color: lightgrey;
    border-bottom: 1px black solid;
    ${({ active }) =>
      active &&
      `
      opacity: 1;
      border-top: 1px black solid;
      border-left: 1px black solid;
      border-right: 1px black solid;
      border-bottom: 0px;
      background-color:  rgb(20, 187, 179);
    `}
  `;
    const ButtonGroup = styled.div`
    display: flex;
    `;

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
            <div className={ isVisible ? "fadeInTop mb-5": "mb-5"}>
              
                <div id="work_exp_section" ref={domRef} className="work-ex-page d-flex align-items-center row m-auto w-75 p-5 rounded">
                <h1 className="py-4">Work Experience</h1>
                  <div className="tab-row d-flex col">
                    {tabHeaders.map((tab, key) => (
                          <ButtonToggle 
                          className="btn rounded-0 flex-fill"
                          key={key}
                          active={active === tab}
                          onClick={() => setActive(tab)}
                          >
                          {/* will need to make onClick an actual function with an if statement */}
                          {tab}
                          </ButtonToggle>
                      ))}
                      
                  </div>
                  <div className="d-block m-0">
                        <WorkExpContent active={active}/>
                      </div>
                  </div>
            </div>
        </>
    )
}

export default WorkExperience;