import {URLS} from '../../constants/urls';
import api from '../api';

export const GetPokemons = (offset=0) =>{
    return api.get(`?limit=20&offset=${offset}`);
}

export const GetDetailsPokemons = (name) =>{
    console.log(name);
    return api.get(`/${name}`);
}