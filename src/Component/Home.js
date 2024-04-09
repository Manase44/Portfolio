import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"


const Home = () => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    const toggleNavMenu = () => {
        setIsNavMenuOpen(!isNavMenuOpen);
    };
  return (
    <div className='container-fluid vh-100'>
        <Analytics />
        <div className="row w-auto h-100">
            <div id="overall" className='col h-100 p-0'>
                <div id="layer1"></div>
                <div id="layer2"></div>
                <div className="row" id="contentDiv">
                    <div className="col-md-6 col-lg-5">
                        <img src="/FullPic.png" className='img-fluid' id="MyPhoto" />
                    </div>
                    <div id='textDiv' className="col-md-5 col-lg-7 text-center text-md-start">
                        <div id="name">
                            <h1>Manase Gunga</h1>
                            <h2>I am a Software Developer</h2>
                        </div>
                        <ul className='nav' id='homeMenu'>
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
                        <i className="fa-solid fa-bars fa-xl" id="toggler" onClick={toggleNavMenu}></i>
                        <ul className={`nav ${isNavMenuOpen ? 'open' : ''}`} id="navMenu">
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
                        <div id="links" className="ms-3 mt-3">
                            <a href="https://github.com/Manase44"  title='Github' className='me-2' rel="noreferrer"
                             target="_blank">
                                <i className='bx bxl-github'></i>
                            </a>
                            <a href="https://www.instagram.com/fikopersempre/" title='Instagram' className='me-2' rel="noreferrer" target="_blank">
                                <i className='bx bxl-instagram-alt'></i>
                            </a>
                            <a href=" https://wa.me/+254740548093" className='me-2' title='WhatsApp' rel="noreferrer" target="_blank">
                                <i className='bx bxl-whatsapp-square'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/manase-gunga-37a3612ab/" title='LinkedIn' className='me-2' rel="noreferrer" target="_blank">
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
