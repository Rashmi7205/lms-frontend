import axios from "axios";

const BASE_URL = 'http://localhost:5010/api/v1';

const axiosInstance = axios.create(); ///Creating Axios instance

/// Setting the default configurations
axiosInstance.defaults.baseURL = BASE_URL;
axios.defaults.withCredentials=true;

export default axiosInstance;
