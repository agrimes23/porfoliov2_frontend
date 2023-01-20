import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

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
            <div className={ isVisible ? "fadeInTop": ""}>
              
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
                  <div className="p-2">
                        <div className={ active === "Experience" ? "show-tab row" : "hide-tab"}>
                          <div className="d-flex col py-5">
                            <div className="p-3">
                              <h5 className="work-dates">10-2022 - Current</h5>
                            </div>
                            <div className="p-3">
                              <h4>Software Engineer Fellow</h4>
                              <h5><em>General Assembly</em></h5>
                            </div>
                          </div>
                          <hr/>
                          <div className="d-flex col pt-4">
                            <div className="p-3">
                              <h5 className="work-dates">10-2019 – 06-2022</h5>
                            </div>
                            <div className="p-3">
                              <h4>Accounting Specialist</h4>
                              <h5><em>UACJ North America, Inc., Chicago, IL</em></h5>
                              <ul>
                                <li>Communicated with banks to renew and initiate new loans, and disburse funds to group companies across the U.S.</li>
                                <li>Responsible for Accounts Payable, including entering bills, initiating ACH and check payments, verifying and processing employee reimbursement and expense reports.</li>
                                <li>Responsible for Accounts Receivable, including issuing invoices to group companies, receiving and entering payments, and following up with group companies on late payments.</li>
                              </ul>
                            </div>
                          </div>
                          <hr/>
                          <div className="d-flex col pt-4">
                            <div className="p-3">
                              <h5 className="work-dates">07-2017 – 07-2019</h5>
                            </div>
                            <div className="p-3">
                              <h4>Japan Exchange & Teaching Program (JET) Assistant Language Teacher</h4>
                              <h5><em>Fukui Prefectural Board of Education, Japan</em></h5>
                              <ul>
                                <li>Improved English proficiency of junior high school students by providing instruction as a native speaker and developed activities for language lessons.</li>
                                <li>Overcame language and cultural barriers to quickly become an effective and productive member of the teaching staff.</li>
                                <li>Exhibited flexibility and adaptability when coordinating plans with other English teachers.</li>
                              </ul>
                            </div>
                          </div>
                          <hr/>
                          <div className="d-flex col pt-4">
                            <div className="p-3">
                              <h5 className="work-dates">07-2016 – 07-2017</h5>
                            </div>
                            <div className="p-3">
                              <h4>English Teacher</h4>
                              <h5><em>VIPKID, Online Classroom </em></h5>
                              <ul>
                                <li>Instructed one-on-one classes to Chinese students ages 5-12.</li>
                                <li>Indicated areas of improvement and wrote unit assessments and feedback for parents.</li>
                                <li>Used data from previous classes to change the plan and learning environment to fit student's needs.</li>
                              </ul>
                            </div>
                          </div>
                          <hr/>
                          <div className="d-flex col pt-4">
                            <div className="p-3">
                              <h5 className="work-dates">07-2016 – 07-2017</h5>
                            </div>
                            <div className="p-3">
                              <h4>Accountant, Internship </h4>
                              <h5><em>Magnolia Health Systems, Indianapolis, IN</em></h5>
                              <ul>
                                <li>Uploaded Accounts Receivable from Matrix software to Hi-Tech accounting software.</li>
                                <li>Set up training guide and taught experienced accounting staff how to perform Accounts Receivable uploads.</li>
                                <li>Helped Accounts Payable department by entering invoices, cutting checks, and filing.</li>
                                <li>Assisted Controller and Senior Accounting Manager with various account analysis and projects.</li>
                                <li>Calculated and entered monthly recurring journal entries.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className={ active === "School" ? "show-tab row" : "hide-tab"}>
                          <div className="py-5">
                            <div className="p-3">
                              <h5>Software Engineering</h5>
                              <h6><em>General Assembly</em></h6>
                              <h6>10-2022 - 01-2023</h6>
                            </div>
                            <hr/>
                            <div className="p-3">
                              <h5>Bachelor of Arts: Linguistics & Spanish</h5>
                              <h6><em>Purdue University - West Lafayette</em></h6>
                              <h6>08-2011 - 05-2015</h6>
                            </div>
                          </div>
                        </div>

                        <div className={ active === "Certificates" ? "show-tab row" : "hide-tab"}>
                          <div className="d-flex row text-center pt-4">
                            <div className="p-3">
                              <h5>N4 of Japanese Language Proficiency Test (JLPT)</h5>
                              <h6 className="">07-2018</h6>
                            </div>
                            <hr />
                            <div className="p-3">
                              <h5>N3 of Japanese Language Proficiency Test (JLPT)</h5>
                              <h6 className="">07-2019</h6>
                            </div>
                            <hr />
                            <div className="p-3">
                              <h5>TEFL Certificate - 170 hours</h5>
                              <h6 className="">06-2016</h6>
                            </div>
                            <hr />
                            <div className="p-3">
                              <h5>JET Kizuna Ambassador Award</h5>
                              <h6 className="">01-2018</h6>
                            </div>
                          </div>
                          </div>
                      </div>
                                        
                </div>
            </div>
        </>
    )
}

export default WorkExperience;