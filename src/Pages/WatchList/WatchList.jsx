import React, { useEffect, useState, use } from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';

const WatchList = () => {
    const { user } = use(AuthContext);
    const allMovies = useLoaderData();
    const [wishlistID, setWishlistID] = useState([]);
    const [wishedMovies, setWishedMovies] = useState([]);

    // 🧩 Fetch wishlist IDs for the logged-in user
    useEffect(() => {
        if (!user?.email) return;

        fetch('http://localhost:3000/watchList')
            .then(res => res.json())
            .then(data => {
                const userWishlist = data
                    .filter(movie => movie.requestEmail === user.email)
                    .map(movie => movie.movieId);
                setWishlistID(userWishlist);
            })
            .catch(err => console.error('Error fetching wishlist:', err));
    }, [user?.email]);

    // 🎬 Get movies that match those wishlist IDs
    useEffect(() => {
        if (wishlistID.length > 0 && allMovies.length > 0) {
            const matchedMovies = allMovies.filter(movie =>
                wishlistID.includes(movie._id)
            );
            setWishedMovies(matchedMovies);
        } else {
            setWishedMovies([]);
        }
    }, [wishlistID, allMovies]);

    return (
        <div>
            <Navbar />
            <div className='mt-20 min-h-117 max-w-[1652px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-5 mb-30'>
                {wishedMovies.map(movie => (
                    <div 
                key={movie._id}
                className="flex flex-col justify-between bg-black text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                >
                <img
                    className="w-full h-64 object-cover"
                    src={movie.posterUrl}
                    alt={`${movie.title} Poster`}
                />
                <div className="flex flex-col flex-grow p-4">
                    <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-bold tracking-wide">{movie.title}</h2>
                    <span className="text-lg font-semibold text-red-500">{movie.rating}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">
                    {movie.releaseYear} • {movie.genre} • {movie.duration} mins
                    </p>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                    {movie.plotSummary}
                    </p>

                    <p className="text-gray-400 text-sm mb-4">
                    Directed by{" "}
                    <span className="font-semibold text-white">{movie.director}</span>
                    </p>
                    <div className="mt-auto">
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 cursor-pointer">
                        Play
                    </button>
                    </div>
                </div>
                </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default WatchList;
