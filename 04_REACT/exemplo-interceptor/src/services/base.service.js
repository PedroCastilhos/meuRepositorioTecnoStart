import axios from "axios";

const api = axios.create({
  baseURL: 'https://tecno-start-api.herokuapp.com/v1/api',
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('TOKEN') || ''
  config.headers['Authorization'] = token
  return config
})

export default api