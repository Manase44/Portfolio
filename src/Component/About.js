import React from 'react'
import Navbar from './Layout/Navbar'
import { useState } from 'react'

const About = () => {

    const [hobbies, setHobbies] = useState([
      {name:'Coding',icon:'fa-solid fa-laptop-code me-1 fa-lg'},
      {name:'Intellectual pursuit',icon:'fa-solid fa-brain me-1 fa-lg'}, 
      {name:'Cycling', icon:'fa-solid fa-person-biking me-1 fa-lg'},
      {name:'Devotional quest', icon:'fa-solid fa-book-bible me-1 fa-lg'}
    ])

    const [details, setDetails] = useState([
      {name:'Manase Gunga Karisa', age:new Date().getFullYear() - 2003, gender:'Male' }
    ])

  return (
    <div>
      <div id="background"></div>
      <Navbar />
      <div className="container" id='cnt'>
        <div className="row" >
          <div className="col pt-3" id='contentColumn'>
            <p id='title' className='h5 text-center'>ABOUT ME</p>

            <div className="row px-2 px-md-0 justify-content-around align-items-center">
              <div className="col-6 d-md-none mb-2">
                <img src="/Me2-removebg-preview.png" className='img-fluid' alt="" />
              </div>
              <div className="col-md-7">
                <p className="aboutSummary">
                  I am a Software engineering student. Skilled in JavaScript frameworks like Node.js, Express.js, and React; adept at building performant web apps using MongoDB. Constantly expanding expertise across front and back-end languages to engineer intuitive solutions. I also have a vast
                  experience working with Microsoft Office packages. Passionate about developing applications that streamline systems and connect communities. Eager to leverage my abilities to turn tomorrow's innovations into everyday solutions.
                </p>
              </div>
              <div className="col-4 d-none d-md-block">
                <img src="/Me2-removebg-preview.png" className='img-fluid' alt="" />
              </div>
            </div>

            <div className='row px-2' id="personalInformation">
              <div className="col">
                <p id='subtitle'> Personal Info <i class="fa-solid fa-circle-info"></i></p>
                {details.map(det =>(
                  <div>
                    <p><span>Full Name</span> : {det.name}</p>
                    <p><span>Age</span> : {det.age}</p>
                    <p><span>Gender</span> : {det.gender}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="hobbies">
              <p className='ms-2' id='subtitle'>Hobbies <i class="fa-solid fa-puzzle-piece"></i></p>
              <div className="row justify-content-center justify-content-sm-around my-2">
                {hobbies.map( hob => (
                  <div className="col-10 col-sm-5 col-md-3 col-xl-2 m-2 pt-3" id='hob'>
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
