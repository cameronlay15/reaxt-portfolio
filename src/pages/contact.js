import React from 'react'
import './contact.css';

export default function Contact() {
  return (

<section>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <h1 className="mt-5">Contact Me</h1>
        <p>
          I can be found at:
          
        </p><p>Email: <a href="mailto://cameronlay@gmail.com" style={{color: "#343a40"}}>cameronlay15@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/cameronlay/" style={{color: "#343a40"}}>https://www.linkedin.com/in/cameronlay/</a></p>
        <p>GitHub: <a href="https://github.com/cameronlay15" style={{color: "#343a40"}}>https://github.com/cameronlay15</a></p>
        <p>And, a link to my <a href="https://cameronlay15.github.io/portfolio-2/assets/resume.png" target="resume_" style={{color: "#343a40"}}>resume</a></p>
        <div className="mb-5" />        
      </div>
    </div>
  </div>
</section>

  )
}