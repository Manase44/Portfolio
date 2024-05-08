import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Navbar from './Layout/Navbar'
import RESUME from './Myresume.pdf'

const Resume = () => {
  const [school, setSchool] = useState([
    {id:'sc1', institution:"Murang'a University of Technology", course:"Bachelor of Science in Software Engineering", duration:"2021 - 2025"},
    {id:'sc2', institution:"Gede High School", course:"Kenya Certificate of Secondary Education", duration:"2017 - 2020"},
    {id:'sc3', institution:"Galana Ranch Primary School", course:"Kenya Certificate of Primary Education", duration:"2012 - 2016"}
  ])

  const [certificates, setCertificate] = useState([
    {id:'cert1', title:"Designing User Interface and Experience", from:"IBM", image:"/certs/UI-UX.png"},
    {id:'cert2', title:"Basics of Operating Systems", from:"Cisco Skills for All", image:"/certs/Operating_Systems_Basics.png"},
    {id:'cert3', title:"Introduction to Data Science", from:"Cisco Skills for All", image:"/certs/Introduction_to_Data_Science.png"},
    {id:'cert4', title:"Introduction to JavaScript", from:"Wild Learner", image:"/certs/certificate_1684759100718.jpg"}
  ])

  const [skills, setSkill] = useState([
    {name:'Node.js', percentage:80, id:'sk1', tech:'backend'},
    {name:'React', percentage:52, id:'sk2', tech:'frontend'},
    {name:'Express.js', percentage:95, id:'sk3', tech:'backend'},
    {name:'HTML', percentage:98, id:'sk4', tech:'frontend'},
    {name:'CSS', percentage:98, id:'sk5', tech:'frontend'},
    {name:'Microsoft Suite', percentage:99.5, id:'sk6', tech:'general'},
    {name:'MongoDB', percentage:30, id:'sk7', tech:'database'},
  ])

  const [jobs, setJob] = useState([
    {title:'Security Officer', company:'Special Macro Security', id:'j1'}
  ])

  const [filter, setFilter] = useState('all')

  const valueEl = useRef(null);

  useEffect(() => {
    skills.forEach(skill => {
      let progress = document.getElementById(`progress-${skill.id}`);
      
      let startValue = 0;
      let endValue = skill.percentage;
      let speed = 50;

      let timer = setInterval(() => {
        startValue++;
        valueEl.textContent = `${startValue}%`;
        progress.style.background = `conic-gradient(var(--satin-sheen-gold) ${startValue * 3.6}deg, var(--satin-gold) ${startValue * 3.6}deg)`;
  
        if (startValue === endValue) {
          clearInterval(timer);
        }
      }, speed);
    });
  }, [skills]); 
  
  let skillsAfterFilter;
  if (filter === 'all') {
    skillsAfterFilter = skills;
  } else {
    skillsAfterFilter = skills.filter(skill => skill.tech === filter);
  }


  return (
    <div>
      <div id="background">
      </div>
      <Navbar />
      <div className="container" id='cnt'>
        <div className="row" >
          <div className="col pt-3" id='contentColumn'>
            <p id='title' className='h5 text-center'>RESUME</p>
            <div className="row justify-content-between">
              <div className="col-lg-5  ms-3">
                <p id="subtitle">Education <i className="fa-solid fa-graduation-cap"></i></p>
              
                {school.map(sch => (
                  <div key={sch.id} className='mb-2 p-2 ' id='school'>
                    <p id='schcourse'>{sch.course}</p>
                    <p id='schname'>{sch.institution}</p>
                    <span className='text-muted'>{sch.duration}</span>
                  </div>
                ))}
              
              </div>
              <div className="col-lg-5 ms-3 ms-lg-0">
                <p id="subtitle">Experience <i className="fa-solid fa-briefcase"></i></p>

                {jobs.map(job => (
                  <div key={job.id} className='p-2' id="job">
                    <p>{job.title}</p>
                    <p>{job.company}</p>
                  </div>
                ))}
              </div>
            </div>


            <div className="row ms-3 my-2">
              
                <p id="subtitle">Skills <i className="fa-solid fa-user-gear"></i></p>

                <div className="row">
                  <div className="col-12">
                    <ul id="skillFilter">
                      <li className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</li>
                      <li className={filter === 'frontend' ? 'active' : ''} onClick={() => setFilter('frontend')}>Front end</li>
                      <li className={filter === 'backend' ? 'active' : ''} onClick={() => setFilter('backend')}>Back end</li>
                      <li className={filter === 'database' ? 'active' : ''} onClick={() => setFilter('database')}>Database</li>
                    </ul>
                  </div>
                </div>

                <div className="row d-flex justify-content-center">
                {skillsAfterFilter.map(sk => (
                  <div key={sk.id} className='col col-lg-2 m-3' id='skill'>
                    <span>{sk.name}</span>
                    <div id={`progress-${sk.id}`} className='progress'>
                      <div ref={valueEl} id='value'> {sk.percentage}%</div>
                    </div>
                  </div>
                ))}
                </div>
             
            </div>



            <div className="row ms-3">
                <p id="subtitle">Certificates <i className="fa-solid fa-certificate"></i></p>
                <div className="d-flex overflow-auto">
                  {certificates.map(cert => (
                    <div className="col-lg-3">
                      <div className="card mx-2 mb-4"  key={cert.id} id='certificate'>
                        <img src={cert.image} className='card-img-top' height={200} alt='Certificate display'/>
                        <div>
                        <div className='card-body'>
                          <p className='card-title'>{cert.title}</p>
                          <p className='card-subtitle text-muted'>{cert.from}</p>
                        </div>
                      </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
            
            <div className="row mt-2 mb-4 d-flex justify-content-center" id="download">
              <a href={RESUME} target='_blank' className='btn'>Checkout my CV</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
