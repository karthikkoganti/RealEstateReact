import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import {UserLogin} from './Components/UserLogin'
import { SignUp } from './Components/SignUp';
import { Home } from './Components/Home';
import HeaderComponent from './Components/HeaderComponent';
import { Rating } from './Components/Rating';

import Addpos from './Components/Addpos';

import ContactUsss from './Components/ContactUsss';
import Calculator from './Components/EmiCalculator';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';




function App() {
  return (
    
    
      <Router>
        
        <HeaderComponent />
       
        <div className="container" >
       
            
           
         
         

         <div className="outer">
         
         <div className="inner">
         

          
           
              <Routes >
              <Route path = "/" exact element={<Home/>}></Route>
              <Route path = "/login" exact element={<UserLogin/>} ></Route>
              <Route path = "/SignUp" exact element={<SignUp/>}></Route>
              
              <Route path = "/rating/:id" exact element={<Rating/>}></Route>
              
              <Route path="/prop" element = { < Addpos/>}></Route>
              
              <Route path="/about" element={<AboutUs/>}></Route>
              <Route path="/contact" element={<ContactUsss/>}></Route>
              <Route path="/emi" element={<Calculator/>}></Route>
              <Route path="/footer" element={<Footer/>}></Route>
              
              </Routes>
              </div>
              
              
              
              </div>
              
              </div>
                  

                  
            
          
        
      </Router>

      
   
  );
}

export default App;
