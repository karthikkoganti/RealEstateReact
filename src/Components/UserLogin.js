import React, {Component} from "react";
import axios from "axios"; 
import { Link } from "react-router-dom";
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
                window.location = "/Home"
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
                    <input type="text" className="form-control" placeholder="Enter Your Usename" name = "username" onChange= {this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name = "password" onChange= {this.handleChangee} />
                </div>

                {/* <button type="submit" className="btn btn-dark btn-lg btn-block"><Link to="/Home">Login</Link></button> */}
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                {/* <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p> */}
            </form>
            </div>

        )
    }
  }