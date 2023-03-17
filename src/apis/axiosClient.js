import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
  },
});

axiosClient.interceptors.request.use(
  function(config) {
      // Do something before request is sent
      const token = localStorage.getItem('token');
      if (token) {
          config.headers.Authorization = `Bearer ${token}`;
          config.headers.AUTH_TOKEN = `${token}`;
      }
      return config;
  },
  function(error) {
      // Do something with request error
      return Promise.reject(error);
  })


export default axiosClient;