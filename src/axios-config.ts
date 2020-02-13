import axios from 'axios';
import {BACKEND_DOMAIN} from "./constants";

export default axios.create (
    {
        baseURL: BACKEND_DOMAIN,
        headers: {
            'Content-Type':'application/json',
            'X-ListenAPI-Key': 'd96f41d6bacd46bcbe2e0a51f5bce35a'
        }
    }
);

export const defaultAxios = axios.create (
    {
        baseURL: BACKEND_DOMAIN,
        headers: {
            'Content-Type':'application/json'
        }
    }
);