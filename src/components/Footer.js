import { useState } from 'react'


const Footer = () => {

    return (
        <>
           <footer className="footer text-center">
                <div className="d-flex justify-content-center col">
                    <h5><a className="mx-5 text-light text-decoration-none" href="https://github.com/agrimes23">Github</a></h5>
                    <h5><a className="mx-5 text-light text-decoration-none" href="https://www.linkedin.com/in/alex-grimes-dev/">Linked-In</a></h5>
                    <h5><a  className="mx-5 text-light text-decoration-none" href="">Contact</a></h5>
                </div>
           </footer>
        </>
    )
}

export default Footer;