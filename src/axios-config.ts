import axios from 'axios';
import {BACKEND_DOMAIN} from "./constants";

export default axios.create (
    {
        baseURL: BACKEND_DOMAIN,
        headers: {
            'Content-Type':'application/json',
        }
    }
);