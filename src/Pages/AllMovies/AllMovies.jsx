import React from 'react';
import SingleMovie from '../../components/SingleMovie/SingleMovie';
import { useLoaderData } from 'react-router';

const AllMovies = () => {
    const allMovies=useLoaderData();
    return (
        <div className='mt-30'>
            <h1 className='font-bold text-4xl'>All Movies</h1>
            <div className='grid geid-cols-1 md:grid-cols-5 gap-5 my-10'>
                {
                    allMovies.map(movie=><SingleMovie movie={movie}></SingleMovie>)
                }
            </div>
        </div>
    );
};

export default AllMovies;