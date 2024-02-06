import React from 'react'
import Navbar from './Layout/Navbar'

const Projects = () => {
  return (
    <div>
      <div id="background">
      </div>
      <Navbar />
      <div className="container mt-4">
        <div className="row" >
          <div className="col bg-light mt-4 pt-4">
            <p id='title' className='text-center'>MY PROJECTS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
