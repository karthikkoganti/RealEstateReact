import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import {UserLogin} from './Components/UserLogin'
import { SignUp } from './Components/SignUp';
import { Home } from './Components/Home';
import HeaderComponent from './Components/HeaderComponent';




function App() {
  return (
    
    
      <Router>
        
        <HeaderComponent />
       
        <div className="container" >
       
            
           
         
         

         <div className="outer">
         
         <div className="inner">
         

          
           
              <Routes >
              <Route path = "/" exact element={<UserLogin/>} ></Route>
              <Route path = "/SignUp" exact element={<SignUp/>}></Route>
              <Route path = "/Home" exact element={<Home/>}></Route>
              
              
              </Routes>
              </div>
              </div>
              </div>
                  
            
          
        
      </Router>
   
  );
}

export default App;
