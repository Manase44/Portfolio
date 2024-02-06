import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <div>
     <nav className="navbar pb-0 sticky-top navbar-expand-lg" id='navbar'>
        <div className="container">
            <Link className="navbar-brand" to="/"> 
                <img src="/logo.png" width={100} className='img-fluid' alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <i className="fa-solid fa-bars fa-xl"></i>
                </span>
            </button>
            <div className="collapse px-3 navbar-collapse" id="menu">
                <ul className="navbar-nav justify-content-end w-100">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/" aria-current="page">Home</Link>
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
            </div>
        </div>
        <div className='row my-1 bar'></div>
    </nav>
   </div>
  )
}

export default Navbar
