import React from 'react';
import { motion } from 'framer-motion';


const IMG = (path) => path ? `https://image.tmdb.org/t/p/w500${path}` : 'https://via.placeholder.com/300x450?text=No+Image';


export default function MovieCard({ movie, onAdd, onRemove, inWatchlist }) {
return (
<motion.div whileHover={{ scale: 1.03 }} className="bg-white/5 rounded-lg overflow-hidden shadow-md">
<img src={IMG(movie.poster_path)} alt={movie.title} className="w-full h-64 object-cover" />
<div className="p-3">
<h3 className="text-white font-semibold line-clamp-2">{movie.title}</h3>
<div className="text-sm text-white/70">{movie.release_date ? movie.release_date.split('-')[0] : '—'}</div>
<div className="mt-3 flex gap-2">
{inWatchlist ? (
<button onClick={() => onRemove(movie.id)} className="px-3 py-1 rounded bg-red-500 text-white">Remove</button>
) : (
<button onClick={() => onAdd(movie)} className="px-3 py-1 rounded bg-green-500 text-white">Add to Watchlist</button>
)}
<a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-white/10 text-white">Details</a>
</div>
</div>
</motion.div>
);
}