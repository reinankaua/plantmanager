import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.110:19000'
});

export default api;