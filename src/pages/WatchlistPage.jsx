import React from 'react';
import MovieGrid from '../components/MovieGrid';
import MovieCard from '../components/MovieCard';


export default function WatchlistPage({ watchlist, removeFromWatchlist }){
return (
<div>
<h2 className="text-white text-xl font-semibold mb-4">Your Watchlist</h2>
{watchlist.length === 0 ? (
<div className="text-white/70">Your watchlist is empty. Add movies from home.</div>
) : (
<MovieGrid movies={watchlist}>{(m)=>(<MovieCard movie={m} onRemove={removeFromWatchlist} inWatchlist />)}</MovieGrid>
)}
</div>
);
}