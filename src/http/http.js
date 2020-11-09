import axios from 'axios'

const request=axios.create({
    baseURL: 'https://system.yoonada.com/api',
    timeout:5000
})
request.interceptors.request.use(config=>{
    const token = sessionStorage.getItem('token');
    token?config.headers.token=token:null;
    return config;
})
export default request;
