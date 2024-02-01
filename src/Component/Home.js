import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='container-fluid vh-100'>
        <div className="row w-auto h-100">
            <div id="overall" className='col h-100 p-0'>
                <div id="layer1"></div>
                <div id="layer2"></div>
                <div className="row" id="contentDiv">
                    <div className="col-md-6 col-lg-5">
                        <img src="/FullPic.png" className='img-fluid' alt="MyPhoto" />
                    </div>
                    <div id='textDiv' className="col-md-5 col-lg-7 text-center text-md-start">
                    <div id="name">
                            <h1>Manase Gunga</h1>
                            <h2>I am a Software Developer</h2>
                        </div>
                        <ul className="nav" id="navMenu">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/resume">Resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projets</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/testimonials">Testmonials</Link>
                            </li>
                        </ul>
                        <i className="fa-solid fa-bars fa-xl" id="toggler"></i>
                        <div id="links" className="ms-3 mt-3">
                            <a href="https://github.com/Manase44" className='me-2' rel="noreferrer"
                             target="_blank">
                                <i className='bx bxl-github'></i>
                            </a>
                            <a href="https://www.instagram.com/fikopersempre/" className='me-2' rel="noreferrer" target="_blank">
                                <i className='bx bxl-instagram-alt'></i>
                            </a>
                            <a href=" https://wa.me/+254740548093" className='me-2' rel="noreferrer" target="_blank">
                                <i className='bx bxl-whatsapp-square'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/manase-gunga-37a3612ab/" className='me-2' rel="noreferrer" target="_blank">
                                <i className='bx bxl-linkedin-square'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
