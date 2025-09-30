
import axios from 'axios';
const API_KEY = 'de65e72f529e35ab816b63c917c67ca7'; 
const BASE = 'https://api.themoviedb.org/3';


export async function fetchPopular(page = 1) {
const res = await axios.get(`${BASE}/movie/popular`, { params: { api_key: API_KEY, page } });
return res.data;
}


export async function searchMovies(query, page = 1) {
const res = await axios.get(`${BASE}/search/movie`, { params: { api_key: API_KEY, query, page, include_adult: false } });
return res.data;
}