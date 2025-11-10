import React from 'react';

const Carousel = ({allMovies}) => {
    return (
        <div className="carousel w-full">
            {
                allMovies.map((movie,index)=>
                {
                    const prevSlide = index === 0 ? allMovies.length - 1 : index - 1;
                    const nextSlide = index === allMovies.length - 1 ? 0 : index + 1;

                    return (
                        <div key={movie._id || index}
                             id={`slide${index}`} 
                             className="carousel-item relative w-full">
                        <div className='w-full h-160 bg-cover flex items-end'
                            style={{ backgroundImage: `url(${movie.posterUrl})` }}>
                            <div className='space-y-3 ml-30 mb-20 w-200'>
                                <div className='font-bold text-7xl text-red-900'>{movie.title}</div>
                                <div className='font-bold'>{movie.plotSummary}</div>
                                <button className='px-4 py-2 bg-red-900 rounded-xl cursor-pointer font-bold'>Watch Now</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#slide${prevSlide}`} className="btn btn-circle bg-black">❮</a>
                        <a href={`#slide${nextSlide}`} className="btn btn-circle bg-black">❯</a>
                        </div>
                        </div>
                    )
                }
                )
            }
        </div>
    );
};

export default Carousel;