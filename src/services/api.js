import axios from 'axios';
import {API_URL} from '../../enviroment.json'

const api = axios.create({
    baseURL: API_URL,
    headers:{
        'Accept': 'application/json',
    }
});

export default api;