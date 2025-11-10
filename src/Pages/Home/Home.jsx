import React from 'react';
import Carousel from '../../components/banner/Carousel';
import { useLoaderData } from 'react-router';

const Home = () => {
    const allMovies=useLoaderData();
    const users=[]
    for(const movie of allMovies){
        if(!users.includes(movie.addedBy)){
            users.push(movie.addedBy);
        }
    }
    console.log(users)
    return (
        <div>
            <div className='mt-10 mb-10'>
                <Carousel key={allMovies._id} allMovies={allMovies}></Carousel>
            </div>
            <section className='flex flex-col md:flex-row justify-between px-20 mb-20'>
                <div className='text-center'>
                    <h1 className='font-bold text-6xl'>{allMovies.length}</h1>
                    <p className='text-3xl'>Total Movies</p>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-6xl'>{users.length}</h1>
                    <p className='text-3xl'>Total Users</p>
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-6xl'>8.5</h1>
                    <p className='text-3xl'>Top Rated Movies</p>
                </div>
            </section>
            <h1 className='font-bold text-4xl mb-5'>Top Rated Movies</h1>
            <section className='grid grid-cols-5 gap-4'>
            {allMovies.sort((a,b)=>b.rating-a.rating).slice(0,5).map(movie => (
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
            </section>


        </div>
    );
};

export default Home;