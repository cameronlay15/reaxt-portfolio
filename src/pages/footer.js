import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import './footer.css';

export default function Footer() {
  return (

<div>
<Navbar expand="lg" bg="dark" fixed="bottom">

      <div class="text-light icon">

        <a href="https://github.com/cameronlay15" target="new-gh" style={{ marginRight: '.25rem' }}><i class="fab fa-github-square"></i></a>
        <a href="https://linkedin.com/in/cameronlay" target="new-li" style={{ marginLeft: '.25rem' }}><i class="fab fa-linkedin"></i></a>

      </div>

 </Navbar>
</div>

  )
}