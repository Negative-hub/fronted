import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.3:8000',
  withCredentials: true
})

export default axiosInstance