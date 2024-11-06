import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/libros/';

export const getLibros = () => axios.get(API_URL);

export const createLibro = (data) => axios.post(API_URL, data);

export const updateLibro = (id, data) => axios.put(`${API_URL}${id}/`, data);

export const deleteLibro = (id) => axios.delete(`${API_URL}${id}/`);
