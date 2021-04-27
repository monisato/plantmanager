import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://10.0.0.143:3333' ip da chacara
    baseURL: 'http://192.168.100.38:3333'
});

export default api;