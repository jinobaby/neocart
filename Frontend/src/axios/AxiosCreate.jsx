import axios from 'axios';

var Baseurl = import.meta.env.VITE_BASE_URL;

export const basicRequest = axios.create({
    baseURL: Baseurl
})