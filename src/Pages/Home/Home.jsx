import React, { useEffect, useState } from 'react';
import Carousel from '../../components/banner/Carousel';
import Genre from '../../components/Genre/Genre';
import About from '../../components/About/About';
import Loading from '../Loading/Loading';

const Home = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const users = [];

    for (const movie of allMovies) {
        if (!users.includes(movie.addedBy)) {
            users.push(movie.addedBy);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3000/movies')
            .then(res => res.json())
            .then(data => {
                setAllMovies(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="mt-10 mb-10">
                <Carousel key={allMovies._id} allMovies={allMovies}></Carousel>
            </div>

            {/* Stats Section */}
            <section className="flex flex-col sm:flex-row flex-wrap justify-between gap-6 md:gap-8 mb-20">
                <div className="flex-1 text-center bg-black py-8 rounded-xl hover:scale-105 transition-transform duration-300">
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">{allMovies.length}</h1>
                    <p className="text-xl sm:text-2xl md:text-3xl">Total Movies</p>
                </div>
                <div className="flex-1 text-center bg-black py-8 rounded-xl hover:scale-105 transition-transform duration-300">
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">{users.length}</h1>
                    <p className="text-xl sm:text-2xl md:text-3xl">Total Users</p>
                </div>
                <div className="flex-1 text-center bg-black py-8 rounded-xl hover:scale-105 transition-transform duration-300">
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">8.5</h1>
                    <p className="text-xl sm:text-2xl md:text-3xl">Top Rated Movies</p>
                </div>
            </section>

            {/* Top Rated Movies */}
            <h1 className="font-bold text-3xl sm:text-4xl mb-5 text-center sm:text-left">Top Rated Movies</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
                {allMovies
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 5)
                    .map(movie => (
                        <div
                            key={movie._id}
                            className="flex flex-col justify-between bg-black text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                className="w-full h-56 sm:h-64 object-cover"
                                src={movie.posterUrl}
                                alt={`${movie.title} Poster`}
                            />
                            <div className="flex flex-col flex-grow p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="text-xl sm:text-2xl font-bold tracking-wide">{movie.title}</h2>
                                    <span className="text-lg font-semibold text-red-500">{movie.rating}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-1">
                                    {movie.releaseYear} • {movie.genre} • {movie.duration} mins
                                </p>
                                <p className="text-gray-300 text-sm mb-3 line-clamp-3">{movie.plotSummary}</p>
                                <p className="text-gray-400 text-sm mb-4">
                                    Directed by <span className="font-semibold text-white">{movie.director}</span>
                                </p>
                                <div className="mt-auto">
                                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 cursor-pointer">
                                        Play
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </section>

            {/* Latest Movies */}
            <h1 className="font-bold text-3xl sm:text-4xl mb-5 text-center sm:text-left">Latest Movies</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {allMovies
                    .sort((a, b) => b.releaseYear - a.releaseYear)
                    .slice(0, 6)
                    .map(movie => (
                        <div
                            key={movie._id}
                            className="flex flex-col justify-between bg-black text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                className="w-full h-56 sm:h-64 object-cover"
                                src={movie.posterUrl}
                                alt={`${movie.title} Poster`}
                            />
                            <div className="flex flex-col flex-grow p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="text-xl sm:text-2xl font-bold tracking-wide">{movie.title}</h2>
                                    <span className="text-lg font-semibold text-red-500">{movie.rating}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-1">
                                    {movie.releaseYear} • {movie.genre} • {movie.duration} mins
                                </p>
                                <p className="text-gray-300 text-sm mb-3 line-clamp-3">{movie.plotSummary}</p>
                                <p className="text-gray-400 text-sm mb-4">
                                    Directed by <span className="font-semibold text-white">{movie.director}</span>
                                </p>
                                <div className="mt-auto">
                                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 cursor-pointer">
                                        Play
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </section>

            {/* Genres */}
            <h1 className="font-bold text-3xl sm:text-4xl mt-20 mb-10 text-center sm:text-left">Genres</h1>
            <section className="mb-20">
                <Genre key={allMovies._id} allMovies={allMovies}></Genre>
            </section>

            <About></About>
        </div>
    );
};

export default Home;