import React from 'react'
import { useState } from 'react'
import Navbar from './Layout/Navbar'

const Resume = () => {
  const [school, setSchool] = useState([
    {id:'sc1', institution:"Murang'a University of Technology", course:"Bachelor of Science in Software Engineering", duration:"2021 - 2025"},
    {id:'sc2', institution:"Gede High School", course:"Kenya Certificate of Secondary Education", duration:"2017 - 2020"},
    {id:'sc3', institution:"Galana Ranch Primary School", course:"Kenya Certificate of Primary Education", duration:"2012 - 2016"}
  ])

  const [certificates, setCertificate] = useState([
    {id:'cert1', title:"Basics of Operating Systems", from:"Cisco Skills for All", image:""},
    {id:'cert2', title:"Introduction to Data Science", from:"Cisco Skills for All", image:"/certs/Introduction_to_Data_Science.png"},
    {id:'cert3', title:"Introduction to JavaScript", from:"Wild Learner", image:"/certs/certificate_1684759100718.jpg"}
  ])

  const [skills, setSkill] = useState([
    {name:'Node.js', percentage:80, id:'sk1'},
    {name:'React', percentage:50, id:'sk2'},
    {name:'Express.js', percentage:95, id:'sk3'},
    {name:'HTML', percentage:98, id:'sk4'},
    {name:'CSS', percentage:98, id:'sk5'},
    {name:'Microsoft Suite', percentage:99.5, id:'sk6'},
    {name:'MongoDB', percentage:30, id:'sk7'},
  ])

  const [jobs, setJob] = useState([
    {title:'Security Officer', company:'Special Macro Security'}
  ])


  return (
    <div>
      <div id="background">
      </div>
      <Navbar />
      <div className="container mt-4">
        <div className="row" >
          <div className="col bg-light mt-4 pt-4">
            <p id='title' className='text-center'>RESUME</p>
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <p id="subtitle">Education <i class="fa-solid fa-graduation-cap"></i></p>
              
                {school.map(sch => (
                  <div className='mb-4 p-2 ' id='school'>
                    <p>{sch.institution}</p>
                    <p>{sch.course}</p>
                    <span>{sch.duration}</span>
                  </div>
                ))}
              
              </div>
              <div className="col-lg-5">
                <p id="subtitle">Experience <i class="fa-solid fa-briefcase"></i></p>

                {jobs.map(job => (
                  <div id="job">
                    <p>{job.title}</p>
                    <p>{job.company}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p id="subtitle">Skills <i class="fa-solid fa-user-gear"></i></p>
                <div className="d-flex" id='Yscroll'>
                  {skills.map(sk => (
                    <div className='mx-2'>
                      <span>{sk.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p id="subtitle">Certificates <i class="fa-solid fa-certificate"></i></p>
                <div className="d-flex" id='Yscroll'>
                  {certificates.map(cert => (
                    <div className='ms-4 mb-4 p-2 ' id='certificate'>
                      <div>
                        <img src={cert.image} className='img-fluid' />
                      </div>
                      <p>{cert.title}</p>
                      <p>{cert.from}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
