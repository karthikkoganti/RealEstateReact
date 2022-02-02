import axios from "axios";

const FORUM_BASE_URL = "http://localhost:8080"

class PropertyService {

    postProperty(property){
        return axios.post(`${FORUM_BASE_URL}/all/prop`, property)
    }
    
    postProp(property){
        return axios.post(`${FORUM_BASE_URL}/all/prop`, property) 
    }


}

export default PropertyService;