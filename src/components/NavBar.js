import useState, { useDebugValue } from 'react'

const NavBar = () => {

    return (
        <>
        {/* when on home page */}
            <div>
                <div className="navbar-home d-flex row rounded w-25 p-5">
                    <a className="navbar-link nav-item nav-link m-2 px-2 rounded" href="#aboutme_section">About</a>
                    <a className="navbar-link nav-item nav-link m-2 px-2 rounded" href="#work_exp_section">Experience</a>
                    <a className="navbar-link nav-item nav-link m-2 px-2 rounded" href="#projects_section">Work</a>
                    <a className="navbar-link nav-item nav-link m-2 px-2 rounded" href="#">Contact</a>
                </div>
            </div>

            {/* when scrolling away from home page */}
            <div className="navbar-scroll">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-5 d-flex ">
                <div className="col-md-6">
                    <a className="navbar-brand" href="#intro_section">AG</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse col-md-6 d-flex justify-content-end px-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#aboutme_section">About</a>
                        <a className="nav-item nav-link" href="#work_exp_section">Experience</a>
                        <a className="nav-item nav-link" href="#projects_section">Work</a>
                        <a className="nav-item nav-link" href="#">Contact</a>
                    </div>
                </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar;




