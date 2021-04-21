import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

 const Navbar=()=>{
    return(
        <>
        
       <nav className="navbar navbar-expand-lg navbar-light bg-light pl-5 ">
  <a className="navbar-brand" href="#">Aman Singhania</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/service">Services<span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About<span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/contact">Contact<span class="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>
</nav>

        </>
    )
 }

 export default Navbar;