import useState, { useDebugValue } from 'react'

const NavBar = () => {

    return (
        <>
        {/* when on home page */}
            <div>
                <div class="navbar-home d-flex row rounded w-25 p-5">
                    <a class="navbar-link nav-item nav-link m-2 px-2 rounded" href="#aboutme_section">About</a>
                    <a class="navbar-link nav-item nav-link m-2 px-2 rounded" href="#">Experience</a>
                    <a class="navbar-link nav-item nav-link m-2 px-2 rounded" href="#projects_section">Work</a>
                    <a class="navbar-link nav-item nav-link m-2 px-2 rounded" href="#">Contact</a>
                </div>
            </div>

            {/* when scrolling away from home page */}
            <div className="navbar-scroll">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-5 d-flex ">
                <div className="col-md-6">
                    <a class="navbar-brand" href="#intro_section">AG</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse col-md-6 d-flex justify-content-end px-5" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="#aboutme_section">About</a>
                        <a class="nav-item nav-link" href="#">Experience</a>
                        <a class="nav-item nav-link" href="#projects_section">Work</a>
                        <a class="nav-item nav-link" href="#">Contact</a>
                    </div>
                </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar;




