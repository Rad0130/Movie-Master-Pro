import React, { Suspense, use, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import Loading from '../Loading/Loading';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

const MyCollections = () => {
    const {user}=use(AuthContext);
    const email=user?.email;
    const [movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(true);
    //get movie by useremail from database
    fetch(`http://localhost:3000/movies?addedBy=${email}`,{
        method:'GET',
        headers:{
            'content-type':'application/json'
        },

    })
    .then(res=>res.json())
    .then(data=>{
        console.log('user collections',data);
        setMovies(data);
        setLoading(false);
    })
    .catch(error=>{
        console.log('error fetching user collections',error);
        setLoading(false);
    })

    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-20 min-h-165 max-w-[1652px] mx-auto'>
                {
                    loading? <Loading></Loading>:<div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
                    {
                        movies.map(movie=>
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
                            <div className="mt-auto flex justify-between gap-5">
                                    <button className="w-full bg-red-900 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 cursor-pointer">
                                    Edit
                                    </button>
                                    <button className="w-full bg-red-900 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 cursor-pointer">
                                    Delete
                                    </button>
                            </div>
                        </div>
                        </div>
                        )
                    }
                </div>
                }
            </div>
        <Footer></Footer>
        </div>
    );
};

export default MyCollections;