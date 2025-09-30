import React from 'react';
import { motion } from 'framer-motion';

const IMG = (path) =>
  path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

export default function MovieCard({ movie, onAdd, onRemove, inWatchlist }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 rounded-xl overflow-hidden shadow-md flex flex-col h-full"
    >
      {/* Poster Image */}
      <img
        src={IMG(movie.poster_path)}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />

      {/* Content */}
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="text-white font-semibold text-lg line-clamp-2">
          {movie.title}
        </h3>
        <div className="text-sm text-white/70 mb-3">
          {movie.release_date ? movie.release_date.split('-')[0] : '—'}
        </div>

        {/* Buttons - always aligned at bottom */}
        <div className="mt-auto flex gap-2 flex-col justify-center">
          {inWatchlist ? (
            <button
              onClick={() => onRemove(movie.id)}
              className="flex-1 px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => onAdd(movie)}
              className="flex-1 px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition"
            >
              Add to Watchlist
            </button>
          )}
          <a
            href={`https://www.themoviedb.org/movie/${movie.id}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium text-center transition"
          >
            Details
          </a>
        </div>
      </div>
    </motion.div>
  );
}
