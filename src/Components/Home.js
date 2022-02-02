import React, { Component } from "react";
import axios from "axios"; 
import { Link } from "react-router-dom";
import '../Styles/Home.css';



export class Home extends Component{
    constructor(props){
        super(props)

        
    this.state ={
        places:[],
    }
    this.deleteEmployee=this.deleteEmployee.bind(this);
    
}

    componentDidMount() {
         axios.get('http://localhost:8080/all/properties')
            .then(res=>{
                console.log(res.data);
                const array= res.data;
                const length = array.length;
                // console.log(res.data);
             if(length == 0){
              console.log('No properties Found')   
            }
            else{
                const places = res.data;
                this.setState({ places });
                console.log("This is in else Statement:" + this.state.places)
            }

              })
              
      }
      deleteEmployee(id){
        axios.delete(`http://localhost:8080/all/${id}`)
        .then(res=>{
            console.log(res.data);
            window.location = '/';
        })

      }
    render(){
    return(
        
       
            <div class="container" >
            <div class="row"  >
            {this.state.places.map((places, index) => (  
               
                    <div class="col-md-4" data-index={index}>
                        <div class="card" style={{margin:"10px"}}>
                            <img src={places.image} alt="realestate" height="250px" width="350px"  />
                            <div class="card-body" >
                                
                           <Link to= {`/rating/${places.id}`}> <h5 class="card-title">Name: {places.name}</h5></Link>

                                <h5 class="card-title">Location: {places.location}</h5>
                                <h5 class="card-title">Beds: {places.beds}</h5>
                                <h5 class="card-title">Baths: {places.baths}</h5>
                                <h5 class="card-title">Garages: {places.garages}</h5>
                                <button  onClick={ () => this.deleteEmployee(places.id)} className="btn btn-danger">Delete </button>
                                {/* <a href="/project1" class="btn btn-primary">view More</a> */}
                            </div>
                        </div>
                    </div>
               
                  ))} 
                </div> <br></br>
            </div>
            
       

    )
}

}
