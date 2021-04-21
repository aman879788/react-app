 import React from 'react';
 import Navbar from "./Navbar.jsx";
 import {Link} from "react-router-dom";


 const About=()=>{
     
    return(
        <>
        <Navbar></Navbar>
        <div className="content">
          <div className="left_content pl-5">
             <h2>Welcome To About Page <span>Aman Singhania</span></h2>
             <p>We are a team of talented developer making</p>
             <Link to="/contact"><button>Contact Here</button></Link>
          </div>
          <div className="right_content pr-5">
            <img src="https://image.shutterstock.com/image-vector/developers-use-software-on-multiple-260nw-1531752233.jpg" alt="image"></img>
          </div>
        </div>
        </>
    )
 }

 export default About;