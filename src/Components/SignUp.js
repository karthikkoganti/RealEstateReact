import React, { Component } from "react";
import axios from "axios"; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class SignUp extends Component {
    state = {
        username: '',
        packages: '',
        password:'',
        phone:'',
        email:'',

      };
    handleSubmit = event => {
    event.preventDefault();
        const registerr = {
            username: this.state.username,
            packages: this.state.packages,
            password: this.state.password,
            phone: this.state.phone,
            email: this.state.email,   
        }
        axios.post('http://localhost:8080/auth/user/register', registerr)
        .then(res=>{
          console.log(res);
            console.log(res.data);
            console.log(res.data.status);
            if(res.data.status === 200){
              toast.success('User details stored successfully')
             
                window.location = "/login"
            }

            else{
              
            }
             
          })
      }
      handleChange = event =>{
        this.setState({ username: event.target.value});
      }
      handleChangee = event =>{
        this.setState({ packages: event.target.value});
      }
      handleChangeee = event =>{
        this.setState({ password: event.target.value});
      }
      handleChangeeee = event =>{
        this.setState({ phone: event.target.value});
      }
      handleChangeeeee = event =>{
        this.setState({ email: event.target.value});
      }
      
     
    render() {
        return (
            <form onSubmit = { this.handleSubmit }>

            <h3><u>Please Enter Your Details: </u></h3>

            <div className="form-group">
                <label> <strong> Name:</strong></label>
                <input type="text" className="form-control" placeholder="Enter Your Name" name = "name" onChange= {this.handleChange} autofill="none" required />
            </div>
        
        
            <div className="form-group">
                <label><strong>Password:</strong></label>
                <input type="password" className="form-control" placeholder="Enter Your Password" autofill="none" name = "password" onChange= {this.handleChangeee} required/>
            </div>
        
        
            <div className="form-group">
                <label><strong>Packages:</strong></label>
                <select name="packages" id="packages" class="form-control" placeholder="Select" autofill="none" name = "packages" onChange= {this.handleChangee} required>
                                <option value="0">Select </option>
                                <option value="g">Gold</option>
                                <option value="p">Platinum</option>
                                <option value="d">Diamond</option>
                               
                            </select>
            </div>
        
        
       

        
        <div className="form-group">
        <label><strong>Phone Number:</strong></label>
                <input type="number" className="form-control" placeholder="Enter Phone" autofill="none" name = "phone" onChange= {this.handleChangeeee} required/>

        </div>
        
         <div className="form-group">
        <label><strong>Email Address:</strong></label>
                <input type="email" className="form-control" placeholder="Enter Email" autofill="none" name = "email" onChange= {this.handleChangeeeee} required/>
        
        </div>

        <br/>
            <button type="submit" className="btn btn-dark btn-lg btn-block">Continue</button>
            
        </form>
        );
    }
}