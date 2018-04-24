import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://littletodo-eaf75.firebaseio.com/"
    
})

export default axiosInstance;