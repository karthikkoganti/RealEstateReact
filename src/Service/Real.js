import React from "react";
import axios from "axios";

const FORUM_BASE_URL = "http://localhost:8080"
class Real {

    getProperties(){
        return axios.get(`${FORUM_BASE_URL}/all/properties`)
    }

    getAllProperties() {
        return axios.get(`${FORUM_BASE_URL}/all/properties`)
    }
    
}

export default Real;