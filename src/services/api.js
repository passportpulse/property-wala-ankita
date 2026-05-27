import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchProperties = () => API.get('/properties');
export const fetchPropertyById = (id) => API.get(`/properties/${id}`);

export default API;
