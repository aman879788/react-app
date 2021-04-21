import React from 'react';

import Navbar from "./Navbar.jsx";
import "./index.css";

const Home=()=>{
return(
  <>
  
  <Navbar></Navbar>
  <div className="content">
    <div className="left_content pl-5">
       <h2>Grow Your Business With <span>Aman Singhania</span></h2>
       <p>We are a team of talented developer making</p>
       <button>Get Started</button>
    </div>
    <div className="right_content pr-5">
      <img src="https://image.shutterstock.com/image-vector/game-development-company-people-work-600w-496214167.jpg" alt="image"></img>
    </div>
  </div>
  
  </>
)
}

export default Home;