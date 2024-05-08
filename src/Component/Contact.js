// import React from 'react'
// import Navbar from './Layout/Navbar'
// import { useState } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [stateMessage, setStateMessage] = useState(null);
//   const sendEmail = (e) => {
//     e.persist();
//     e.preventDefault();
//     setIsSubmitting(true);
//     emailjs
//       .sendForm(
//         process.env.REACT_APP_SERVICE_ID,
//         process.env.REACT_APP_TEMPLATE_ID,
//         e.target,
//         process.env.REACT_APP_PUBLIC_KEY
//       )
//       .then(
//         (result) => {
//           setStateMessage('The message has successfully been sent!');
//           setIsSubmitting(false);
//           setTimeout(() => {
//             setStateMessage(null);
//           }, 10000); 
//         },
//         (error) => {
//           setStateMessage('Something went wrong, please try again later');
//           setIsSubmitting(false);
//           setTimeout(() => {
//             setStateMessage(null);
//           }, 10000);
//         }
//       );
//     e.target.reset();
//   };

//   return (
//     <div>
//       <div id="background">
//       </div>
//       <Navbar />
//       <div className="container" id='cnt'>
//         <div className="row" >
//           <div className="col pt-3" id='contentColumn'>
//             <p id='title' className='h5 text-center'>CONTACT</p>
//             <div className="row">
//               <div className="col-md-7">
//                 <p id="subtitle">Send a Message <i class="fa-solid fa-envelope"></i></p>
//                 {stateMessage && <p id='pop'>{stateMessage}</p>}
//                 <form onSubmit={sendEmail} action="#" method='#' className='form p-3'>
//                   <div className="form-floating my-2">
//                     <input type="text" className="form-control" name='fname' id="fname" placeholder='First Name' required/>
//                     <label htmlFor="fname">First Name</label>
//                   </div>
//                   <div className="form-floating my-2">
//                     <input type="text" className="form-control" name='lname' id="lname" placeholder='Last Name' required/>
//                     <label htmlFor="lname">Last Name</label>
//                   </div>
//                   <div className="form-floating my-2">
//                     <input type="email" className="form-control" name='email' id="email" placeholder='Your Email' required/>
//                     <label htmlFor="email">Email Address</label>
//                   </div>
//                   <div className="input-group my-2">
//                     <span className='input-group-text'>Subject</span>
//                     <select class="form-select" aria-label="Subject" name='subject' required>
//                       <option value="Hire Me">Hire Me</option>
//                       <option value="Other">Collaboration</option>
//                       <option value="Make Inquiries">Make Inquiries</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                   <div class="form-floating my-2">
//                     <textarea class="form-control" placeholder="Write your message" name='message' id="message" required></textarea>
//                     <label for="message">Write Your Message</label>
//                   </div>
//                   <div className="text-center">
//                     <button type="submit" class="btn" id='sendbtn' disabled={isSubmitting}>Send</button>
//                   </div>
//                 </form>
//               </div>

//               <div className="col-md-4" id='socialinks'>
//                 <p id="subtitle">Social Links <i class="fa-solid fa-link"></i></p>
//                 <div id="links" className="ms-3 mt-3">
//                   <a href="https://github.com/Manase44"  title='Github' className='me-2' rel="noreferrer"
//                     target="_blank">
//                       <i className='bx bxl-github'></i>
//                   </a>
//                   <a href="https://www.instagram.com/fikopersempre/" title='Instagram' className='me-2' rel="noreferrer" target="_blank">
//                       <i className='bx bxl-instagram-alt'></i>
//                   </a>
//                   <a href=" https://wa.me/+254740548093" className='me-2' title='WhatsApp' rel="noreferrer" target="_blank">
//                     <i className='bx bxl-whatsapp-square'></i>
//                   </a>
//                   <a href="https://www.linkedin.com/in/manase-gunga-37a3612ab/" title='LinkedIn' className='me-2' rel="noreferrer" target="_blank">
//                     <i className='bx bxl-linkedin-square'></i>
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact
