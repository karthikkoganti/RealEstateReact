import React, { Component } from "react";
import axios from "axios"; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export class Search extends Component  {   
    state = {
        location: '',
        Specialist:'',
        persons: [],
      };
      componentDidMount() {
        if(sessionStorage.getItem('patientID') == null)
        {
          window.location ="/"
        }
        else{
          
        }
      }
      handleSubmit = event => {
        event.preventDefault();
            const patient = {
              location: this.state.location,
              Specialist: this.state.Specialist,
              
            }
            const url= 'http://localhost:8181/doctors/'+ this.state.Specialist +'/' + this.state.location;
            console.log(url);
            axios.get('http://localhost:8181/doctors/'+ this.state.Specialist +'/' + this.state.location )
            .then(res=>{
                console.log(res.data);
                const array= res.data;
                const length = array.length;
                console.log(length);
             if(length == 0){
              toast.error('No Doctors found in above selection')   
            }
            else{
                const persons = res.data;
                this.setState({ persons });
                console.log("This is in else Statement:" + this.state.persons)
            }
              })
          }
handleChange = event =>{
  this.setState({ location: event.target.value});
}
handleChangee = event =>{
  this.setState({ Specialist: event.target.value});
}

handleClick = value => () => {
  console.log(value);
  sessionStorage.setItem('doctorid', value);
  window.location="/booking";

};
render() { 
return(
    <div>
    <form onSubmit = { this.handleSubmit }>

            <h3>Please Select Location and Specialist In</h3>
         
<div class="row">
    <div class="col">
            <div className="form-group">
                <label>Location</label>
                <select className="form-control" name = "location" onChange= {this.handleChange}>
                   <option value="location">Choose Your Location</option>
                   <option value="hyderabad">Hyderbad</option>
                  <option value="kurnool">Kurnool</option>
                   
                   </select>
            </div>
        </div>
        <div class="col">
            <div className="form-group">
                <label>Specialist</label>
                <select className="form-control" name = "Specialist" onChange= {this.handleChangee}>
                   <option value = "specialist">Choose Specialist</option>                     <option value="neurologist">Neuroligist</option>
                     <option value="Cardiologist">Cardiologist</option>
                     <option value="ENT">ENT</option>
                   <option value="GeneralSurgery">GeneralSurgery</option>
                   </select>
            </div>
            </div>
        </div>
       
        
                   <input type="submit" className="btn btn-dark btn-lg btn-block" value="Continue"/>
            
        </form>

        <br/>
        <table className="table table-bordered">  
            <tr>  
                <th>ID</th>  
                <th>Name</th>  
                <th>Mobile</th> 
                <th>Action</th>  
            </tr>  
    
            {this.state.persons.map((persons, index) => (  
              <tr data-index={index}>  
                <td>{persons.id}</td>  
                <td>{persons.firstName + persons.lastName }</td>  
                <td>{persons.mobileNumber}</td>  

                <td><button onClick={this.handleClick(persons.id)}  class="btn btn-primary">Book an Appointment</button></td>  
              </tr>  
            ))}  
    
        </table>     
     

        </div>
          );
      }
  }