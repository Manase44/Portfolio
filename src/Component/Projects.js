import React from 'react'
import Navbar from './Layout/Navbar'

const Projects = () => {

  return (
    <div>
      <div id="background">
      </div>
      <Navbar />
      <div className="container" id='cnt'>
        <div className="row" >
          <div className="col pt-3" id='contentColumn'>
            <p id='title' className='h5 text-center'>MY PROJECTS</p>

            <div class="row w-auto justify-content-center px-3 mb-3">
              <div class="col-lg-6 me-lg-3 mb-3" id='projectDiv'>
                  <div id="imgDiv">
                    <img src="/project/Online_Bursary_Application.png" width={550} height={300}/>
                  </div>
                  <div>
                    <p class="h4 mt-2">ONLINE BURSARY APPLICATION</p>
                    <p>Introducing our revolutionary web-based application that redefines the bursary application experience, seamlessly transitioning from tedious and time-consuming procedures to a streamlined process with just a few clicks.</p>
                    <div class="d-flex justify-content-around" id='projectButtons'>
                      <a href="#" class="btn">View </a>
                      <a href="#" class="btn">Github</a>
                    </div>
                  </div>
              </div>
              <div class="col-lg-5" id='projectDiv'>
                  <div id="imgDiv">
                    <img src="/project/rock_paper_scissors_game.png" width={550} height={300}/>
                  </div>
                  <div>
                    <p class="h4 mt-2">ROCK, PAPER, SCISSORS GAME</p>
                    <p>Play the Rock, Paper, Scissor game online</p>
                    <div class="d-flex justify-content-around" id='projectButtons'>
                      <a href="https://rock-paper-scissors-smoky-tau.vercel.app/" target='_balnk' class="btn">View </a>
                      <a href="#" class="btn">Github</a>
                    </div>
                  </div>
              </div>
              <div class="col-lg-5" id='projectDiv'>
                  <div id="imgDiv">
                    <img src="/project/Grade_Revealer.png" width={550} height={300}/>
                  </div>
                  <div>
                    <p class="h4 mt-2">GRADE REVEALER</p>
                    <p>A simple website for calculating grade. One is required to enter the marks and grade revealer calculates the marks for them</p>
                    <div class="d-flex justify-content-around" id='projectButtons'>
                      <a href="#" class="btn">View </a>
                      <a href="#" class="btn">Github</a>
                    </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
