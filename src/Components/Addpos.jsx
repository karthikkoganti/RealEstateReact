import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropertyService from "../Services/PropertyService";
import axios from "axios"; 

const Addpos = () => {
    const Properties = {
        name : "",
        location : "",
        beds:"",
        baths:"",
        garages:"",
        image:""
    };

    const history = useNavigate();
    const [property, setProperty] = useState(Properties);
    const[submit, setSubmitted] = useState(false);


    const handleInputChange = event => {
        const {name, value} = event.target;
        setProperty({...property,[name]:value});
    }

    const saveProperty = () => {
        var data = {
            name:property.name,
            location:property.location,
            beds:property.beds,
            baths:property.baths,
            garages:property.garages,
            image:property.image

        };

        axios.post('http://localhost:8080/all/prop', data)
        .then(res => {
            setProperty({
                name:res.data.name,
                location:res.data.location,
                beds:res.data.beds,
                baths:res.data.baths,
                garages:res.data.garages,
                image:res.data.image
                
            });
           
            setSubmitted(true);
            console.log(res.data);
            history('/')
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return(
        <div>
            <h4><u>Enter Property Details:</u></h4>
            <br/>
             <div className="form-group">
                    <label htmlFor="title">Name:</label>
                    <input className="form-control" type="text" id="name" value={property.name} onChange={handleInputChange} placeholder="Enter Name" name="name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Location:</label>
                    <input className="form-control"  type="text" id="location" value = {property.location} onChange={handleInputChange} placeholder="Location" name="location" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Beds:</label>
                    <input className="form-control" id="beds" value={property.beds} onChange={handleInputChange} type="number" placeholder="Beds Availability" name="beds" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Baths:</label>
                    <input className="form-control" id="baths" value={property.baths} onChange={handleInputChange} type="number" placeholder="Baths" name="baths" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">garages:</label>
                    <input className="form-control" id="garages" value={property.garages} onChange={handleInputChange} type="number" placeholder="Garages" name="garages" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Image:</label>
                    <input className="form-control" id="image" value={property.image} onChange={handleInputChange} type="text" placeholder="Image " name="image" required/>
                </div>

                 <button onClick={saveProperty} className="btn btn-success"> Submit </button>
        </div>
    )
}

export default Addpos;