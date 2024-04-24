import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const axiosGetUsers = () => 
{
   return axios.get(BASE_URL + "/users")
}

const axiosPostUser = (body) => 
{
    return axios.post(BASE_URL + "/user", body)
}