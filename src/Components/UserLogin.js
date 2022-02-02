import React, {Component} from "react";
import axios from "axios"; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
export class UserLogin extends Component{
    state = {
        username: '',
        password:'',
      };
      handleSubmit = event => {
        event.preventDefault();
        const user = {
          username: this.state.username,
          password: this.state.password,
        }
        console.log(user);
        axios.post('http://localhost:8080/auth/user/login', user)
        .then(res=>{
            console.log(res);
            console.log(res.data);
            console.log(res.data.status);
            if(res.data.status === 200){
              toast.success('User logged in successfully')
              sessionStorage.setItem('islogin',user.username );
                window.location = "/prop"
            }
            if(res.data.status === 404){
              toast.error("Password Mismatch")
          
            }
            if(res.data.status === 404){
              toast.error("User name not registered")
              // window.location.href='/login';
            }

            else{

            }
            
          })
      }
      handleChange = event =>{
        this.setState({ username: event.target.value});
      }
      handleChangee = event =>{
        this.setState({ password: event.target.value});
      }
    render(){
        return (
            <div class="login-box">
                <div class="row">
                
                </div>
                <h3>Login</h3>
                   <form onSubmit = { this.handleSubmit }>
                              
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter Your Usename" name = "username" onChange= {this.handleChange}  required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" name = "password" onChange= {this.handleChangee}  required/>
                </div>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block"  >Login</button>
                 <p className="forgot-password text-right">
                    Not yet registred <a href="/SignUp">Sign Up?</a>
                </p> 
            </form>
            </div>

        )
    }
  }