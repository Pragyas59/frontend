import React from 'react';
import './Navbar.css'; 
import logo from '../Assets/Logo.png'

function Navbar() {
  return (
 <section className='navbar_section align-items-center'>
   <div className="container">
   <nav className="navbar navbar-expand-lg navbar-light">
 
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav custome_nav mb-2 mb-lg-0 align-items-center justify-content-between">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Projects</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Expertise</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">People</a>
        </li>
        
        <li className="nav-item ms-4">
          <a className="nav-link active" aria-current="page" href="#"><img src={logo} alt="logo" className='img-fluid' /></a>
        </li>
       
      
      </ul>
      <form className="d-flex ms-auto">
    <ul className='navbar-nav'>
    <li className="nav-item">
          <a className="nav-link" href="#">CAREER</a>
        </li>
      <li className="nav-item">
          <a className="nav-link" href="#">AU</a>
        </li>
    </ul>
              </form>
    </div>
 
</nav>
   
    <div className='why_choose'>
      <p>Home / Why work with us</p>
      <h1>Headline #1</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

    </div>
   </div>
 
 </section>
   
  );
}

export default Navbar;