import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const NavBar = (props) => {

    


    return (
        <>
        {/* when on home page */}
            <div>
                <div className="navbar-home d-flex row rounded w-25 p-5">
                    <a className="navbar-link nav-item nav-link m-2 px-2 rounded" href="#aboutme_section">About</a>
                    <a className="navbar-link nav-item nav-link m-2 px-2 rounded" href="#projects_section">Projects</a>
                    <a className="navbar-link nav-item nav-link m-2 px-2 rounded" href="#work_exp_section">Experience</a>
                    <a className="navbar-link nav-item nav-link m-2 px-2 rounded" href="#">Contact</a>
                </div>
            </div>
        </>
    )
}

export default NavBar;




