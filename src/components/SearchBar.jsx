import React from 'react';
import { motion } from 'framer-motion';


export default function SearchBar({ value, onChange, onSearch, loading }) {
return (
<motion.form onSubmit={(e)=>{e.preventDefault(); onSearch();}} initial={{opacity:0}} animate={{opacity:1}} className="mb-4">
<div className="flex gap-3 max-w-xl">
<input value={value} onChange={e=>onChange(e.target.value)} placeholder="Search movies by title..." className="flex-1 p-3 rounded-xl bg-white/10 placeholder-white/60 text-white outline-none" />
<button disabled={loading} className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">{loading ? 'Searching...' : 'Search'}</button>
</div>
</motion.form>
);
}