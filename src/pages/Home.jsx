import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { fetchPopular, searchMovies } from '../api';


export default function Home({ watchlist, addToWatchlist, removeFromWatchlist }){
const [query, setQuery] = useState('');
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1);


const loadPopular = async () => {
setLoading(true);
const res = await fetchPopular(page);
setMovies(res.results);
setLoading(false);
};


useEffect(()=>{ loadPopular(); }, []);


const onSearch = async () => {
if (!query) return loadPopular();
setLoading(true);
const res = await searchMovies(query);
setMovies(res.results);
setLoading(false);
};


return (
<div>
<SearchBar value={query} onChange={setQuery} onSearch={onSearch} loading={loading} />
{loading ? <Loading /> : (
<MovieGrid movies={movies}>
{(m) => (
<MovieCard
movie={m}
onAdd={addToWatchlist}
onRemove={removeFromWatchlist}
inWatchlist={!!watchlist.find(x=>x.id===m.id)}
/>
)}
</MovieGrid>
)}
</div>
);
}