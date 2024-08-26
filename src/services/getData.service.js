import axios from "axios";

const getAllData = ()=>{
    const request = axios.get('http://localhost:3001/topics')
    
    return request.then((response) => response.data);
}

export default{
    getAllData
}