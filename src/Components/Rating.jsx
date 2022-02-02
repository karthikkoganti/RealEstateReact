import React, { Component } from "react";
import axios from "axios"; 
import '../Styles/Rating.css';
import { useParams } from "react-router-dom";
//import '../Styles/Rating.css';


export class Rating extends Component{
  constructor(props) {
    super(props)
  }
    state ={
      
        
        rate:'',
        comment:'',
       
    };
     
   
      handleSubmit = event => {
        
        event.preventDefault();
            const registerr = {
                rate: this.state.rate,
                comment: this.state.comment,
            }
           
            axios.post('http://localhost:8080/all/save/8', registerr)
            .then(res=>{
               
                console.log(res.data);
                
                 
              })
          }
          handleChange = event =>{
            this.setState({ rate: event.target.value });
          }
          handleChangee = event =>{
            this.setState({ comment: event.target.value });
          }
          
    render(){
    return(
        
<div class="login-box">
                <div class="row">
                
                </div>
                <h3>Please Enter the Rating</h3>
                   <form onSubmit = { this.handleSubmit }>
                              
                <div className="form-group">
                    <label>Your Rating</label>
                    <input type="text" className="form-control" placeholder="please enter your rating for the property" id ="rate" name = "rate"  onChange= {this.handleChange}  required/>
                </div>
<br/>
                <div className="form-group">
                    <label>Your Comment</label>
                    <input type="text" className="form-control" placeholder="Please enter your comments" id ="comment" name = "comment" onChange= {this.handleChangee}  required/>
                    

    
                </div>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/">Submit</a></button>
                 
            </form>
            </div>





      
    )
}

}



