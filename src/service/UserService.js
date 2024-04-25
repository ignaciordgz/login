import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const axiosGetUsers = () => 
{
   return axios.get(BASE_URL + "/users")
}

export const axiosPostUser = (body) => 
{
    return axios.post(BASE_URL + "/user", body)
}