import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    // hr request k saath cookie send krenge

    withCredentials:true
}); 