import React, { Component } from "react";
import axios from "axios"; 



export class Home extends Component{
    state ={
        places:[],
    };

    componentDidMount() {
         axios.get('http://localhost:8080/all/properties')
            .then(res=>{
                console.log(res.data);
                const array= res.data;
                const length = array.length;
                console.log(length);
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
    render(){
    return(
        
        <div className="wrapper">
            <div class="container">
            {this.state.places.map((places, index) => (  
                <div class="row" data-index={index}>
                    <div class="col-md">
                        <div class="card">
                            <img src={places.image} alt="realestate" />
                            <div class="card-body">
                            <h5 class="card-title">Name: {places.name}</h5>
                                <h5 class="card-title">Location: {places.location}</h5>
                                <h5 class="card-title">Beds: {places.beds}</h5>
                                <h5 class="card-title">Baths: {places.baths}</h5>
                                <h5 class="card-title">Garages: {places.garages}</h5>
                                <a href="/project1" class="btn btn-primary">view More</a>
                            </div>
                        </div>
                    </div>
                </div>
                  ))}  
            </div>
        </div>

    )
}

}
