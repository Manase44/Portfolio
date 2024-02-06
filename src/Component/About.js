import React from 'react'
import Navbar from './Layout/Navbar'
import { useState } from 'react'

const About = () => {

    const [hobbies, setHobbies] = useState([
      {name:'Coding',icon:''},
      {name:'Intellectual pursuit',icon:''}, 
      {name:'Cycling', icon:'bx bx-cycling bx-sm me-1'},
      {name:'Devotional quest', icon:''}
    ])


  return (
    <div>
      <div id="background"></div>
      <Navbar />
      <div className="container mt-4" id='sd'>
        <div className="row" >
          <div className="col bg-light mt-4 pt-4">
            <p id='title' className='text-center'>ABOUT ME</p>

            <div className="row justify-content-center align-items-center">
              <div className="col-4 d-md-none mb-2">
                <img src="/Me2-removebg-preview.png" className='img-fluid' alt="" />
              </div>
              <div className="col-md-7">
                <p className="aboutSummary">
                  Hello! I am a Software engineering student. My current area
                  of expertise is full-stack web development, where I create
                  scalable and high-performing web applications using
                  JavaScript frameworks like Node.js, Express.js, and React in
                  conjunction with MongoDB database. I also have a vast
                  experience working with Microsoft Office packages. I am
                  very passionate about writing quality tested and
                  maintainable code.
                </p>
              </div>
              <div className="col-4 d-none d-md-block">
                <img src="/Me2-removebg-preview.png" className='img-fluid' alt="" />
              </div>
            </div>

            <div className='row' id="personalInformation">
              <div className="col">
                <p id='subtitle'> Personal Info</p>
                <p><i class="fa fa-thumb-tack" aria-hidden="true"></i> Date of birth</p>
                <p>Full Name</p>
                <p>Gender</p>
                <p>Age</p>

              </div>
            </div>

            <div id="hobbies">
              <p id='subtitle'>Hobbies</p>
              <div className="row justify-content-center justify-content-sm-around my-2">
                {hobbies.map( hob => (
                  <div className="col-10 col-sm-5 col-md-3 col-xl-2 m-1" id='hob'>
                    <p><i className={hob.icon}></i> {hob.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
