import React, { Component } from "react";
import axios from "axios"; 
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
           
            console.log(res.data);
            // console.log(res.data.patientId)
            // sessionStorage.setItem('patientID', res.data.patientId);
             window.location="/search";
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

            <h3>Please Enter Your Details</h3>
<div class="row">
    <div class="col">
            <div className="form-group">
                <label> Name</label>
                <input type="text" className="form-control" placeholder="Enter Your Name" name = "name" onChange= {this.handleChange} autofill="none" required />
            </div>
        </div>
        
        </div>
        <div class="row">
    <div class="col">
            <div className="form-group">
                <label>password</label>
                <input type="text" className="form-control" placeholder="Enter Your Password" autofill="none" name = "age" onChange= {this.handleChangeee} required/>
            </div>
        </div>
        
        </div>
        <div class="row">
    <div class="col">
            <div className="form-group">
                <label>Packages</label>
                <select name="packages" id="packages" class="form-control" placeholder="Select" autofill="none" name = "packages" onChange= {this.handleChangee} required>
                                <option value="0">Select </option>
                                <option value="g">Gold</option>
                                <option value="p">Platinum</option>
                                <option value="d">Diamond</option>
                               
                            </select>
            </div>
        </div>
        </div>
        
       

        <div class="row">
        <div class="col">
        <label>Phone Number</label>
                <input type="number" className="form-control" placeholder="Enter Phone" autofill="none" name = "phone" onChange= {this.handleChangeeee} required/>

        </div>
        <div class="row">
        <div class="col">

        <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Enter Email" autofill="none" name = "email" onChange= {this.handleChangeeeee} required/>
        </div>
        </div>

        </div><br/>
            <input type="submit" onClick = {this.handleSubmit} className="btn btn-dark btn-lg btn-block" value="Continue"/>
            
        </form>
        );
    }
}