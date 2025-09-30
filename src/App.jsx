import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import WatchlistPage from './pages/WatchlistPage';
import useLocalStorage from './hooks/useLocalStorage';
import { motion } from 'framer-motion';


export default function App(){
const [watchlist, setWatchlist] = useLocalStorage('my_watchlist', []);


const addToWatchlist = (movie) => {
setWatchlist(prev => {
if (prev.find(m=>m.id===movie.id)) return prev;
return [movie, ...prev];
});
};
const removeFromWatchlist = (id) => {
setWatchlist(prev => prev.filter(m => m.id !== id));
};


return (
<BrowserRouter>
<div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-pink-900 p-6 mb-0">
<div className="max-w-6xl mx-auto">
<Header watchCount={watchlist.length} />


<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
<Routes>
<Route path="/" element={<Home watchlist={watchlist} addToWatchlist={addToWatchlist} removeFromWatchlist={removeFromWatchlist} />} />
<Route path="/watchlist" element={<WatchlistPage watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />} />
</Routes>
</motion.main>
</div>
  <p  className="mt-5 mb-0 text-xs text-white/50 text-center">
    © MovieDB Info | For Demo Use Only
  </p>
</div>

</BrowserRouter>
);
}