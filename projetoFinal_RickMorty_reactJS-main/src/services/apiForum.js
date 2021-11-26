import axios from "axios";



const api = axios.create({
    baseURL: 'https://forum-rickmorty-api.herokuapp.com'
    
})


export default api;