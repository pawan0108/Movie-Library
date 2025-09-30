
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function Header({ watchCount }) {


    const loc = useLocation();
    return (
        <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} id='header' className="flex items-center justify-between mb-6">

                <Link to="/" className="flex items-center gap-3" >
                <div className="bg-white/10 p-2 rounded-lg shadow-md">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white"><path d="M4 6h16v12H4z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                    <h1 className="text-white text-2xl font-bold">Movie Library</h1>
                    <div className="text-white/70 text-sm">Browse & manage your watchlist</div>
                </div>
            </Link>


            <nav id='home-and-watchlist' className="flex items-center gap-4">
                <Link to="/" className={`px-3 py-2 rounded-md ${loc.pathname === '/' ? 'bg-white/10' : ''} text-white`}>Home</Link>
                <Link to="/watchlist" id='watchlist' className={`px-3 py-2 rounded-md ${loc.pathname === '/watchlist' ? 'bg-white/10' : ''} text-white flex items-center gap-2`}>Watchlist
                    <span className="bg-white/10 px-2 py-1 rounded text-sm">{watchCount}</span>
                </Link>
            </nav>

        </motion.header>
    );
}