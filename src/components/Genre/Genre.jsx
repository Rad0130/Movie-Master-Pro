import React from 'react';

const Genre = ({allMovies}) => {
    const genres=[]
    for(const movie of allMovies){
        if(!genres.includes(movie.genre)){
            genres.push(movie.genre);
        }
    }

    return (
        <div className='grid grid-cols-7 gap-5'>
            {
                genres.map(genre=><div className='bg-black flex justify-center items-center p-20 rounded-xl text-red-900 font-bold text-3xl cursor-pointer hover:scale-105 transition-transform duration-300'>{genre}</div>)
            }
        </div>
    );
};

export default Genre;