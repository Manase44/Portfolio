import React from 'react'
import Navbar from './Layout/Navbar'

const Contact = () => {
  return (
    <div>
      <div id="background">
      </div>
      <Navbar />
      <div className="container mt-4">
        <div className="row" >
          <div className="col bg-light mt-4 pt-4">
            <p id='title' className='text-center'>CONTACT PAGE</p>
            <div className="row">
              <div className="col-7">
                <p id="subtitle">Send a Message</p>

                <form action="#" method='#' className='form p-3'>
                  <div className="form-floating my-2">
                    <input type="text" className="form-control" name='fname' id="fname" placeholder='First Name' required/>
                    <label htmlFor="fname">First Name</label>
                  </div>
                  <div className="form-floating my-2">
                    <input type="text" className="form-control" name='lname' id="lname" placeholder='Last Name' required/>
                    <label htmlFor="lname">Last Name</label>
                  </div>
                  <div className="form-floating my-2">
                    <input type="email" className="form-control" name='email' id="email" placeholder='Your Email' required/>
                    <label htmlFor="email">Email Address</label>
                  </div>
                  <div className="input-group my-2">
                    <span className='input-group-text'>Subject</span>
                    <select class="form-select" aria-label="Subject" required>
                      <option value="Hire Me">Hire Me</option>
                      <option value="Make Inquiries">Make Inquiries</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div class="form-floating my-2">
                    <textarea class="form-control" placeholder="Write your message" id="message" required></textarea>
                    <label for="message">Write Your Message</label>
                  </div>
                  <button type="submit" class="text-center btn btn-primary">Send</button>
                </form>

              </div>
              <div className="col-4">
                <p id="subtitle">Social Links</p>
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
    </div>
  )
}

export default Contact
