import React, { Component } from "react";



const HeaderComponent = () =>{
    return(
        <nav class="navbar navbar-expand-lg  " style={{alignContent:'end'}}>
            <div class="container-fluid">
              <a class="navbar-brand" href="/"><img src="https://t4.ftcdn.net/jpg/02/69/65/89/360_F_269658906_uxks6QywGJU2cIqPGP1C2nxDCzAHKf44.jpg" style={{width:'80px'}} alt="logo"/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="/questions/1">Home</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="/answers">About Us</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="/answers">Contact Us</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="/answers">Add Properties</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="#">Login/SignUp</a>
                  </li>
                 </ul>
                
              </div>
            </div>
          </nav>
    )

}

export default HeaderComponent;