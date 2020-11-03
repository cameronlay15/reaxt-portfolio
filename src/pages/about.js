import React from 'react'
import Image from 'react-bootstrap/Image'

export default function About() {
  return (

 <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="mt-5">About Me</h1>

          <Image src="/img/dh.jpg" rounded className="float-left" style={{padding: 5, alignSelf: 'flex-start'}} />

            <div class="single-post-content-wrapper"> 

              <p>
                
My name is Cameron Lay, and I am currently a student in the Georgia Tech Full Stack Web Development bootcamp.
              </p>
              <p>
              I also have my MBA from the University of Oklahoma. And I recieved my Bachelors degree from Florida State University. I aspire to work in consulting specifically on projects involving tech.
              </p>
              <p>
              My background is in sales, marketing, and management. I have worked in the tech, retail, and automotive industries. I have also done consulting practicums for the State of Oklahoma specifically in the Bio-Tech Space. I am taking this course to improve my tech skills.
              </p>

            </div>
        </div>
      </div>
    </div>
  </section>

  )
}