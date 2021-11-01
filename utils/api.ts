import axios from 'axios';

export const API_V2 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_V2,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
});
export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
});
