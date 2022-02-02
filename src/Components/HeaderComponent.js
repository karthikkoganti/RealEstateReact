import React, { Component } from "react";
import { Link } from "react-router-dom";



const HeaderComponent = () =>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-white bg-warning static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://cdn-icons-png.flaticon.com/512/1029/1029023.png" alt="..." height="36" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"><Link to="/">Home</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"><Link to="emi">Emi calculator</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to ="about">About Us</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to ="contact">Contact Us</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to ="prop">Add Properties</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to ="SignUp">Register</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><Link to ="login">Login</Link></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    
    )

}

export default HeaderComponent;