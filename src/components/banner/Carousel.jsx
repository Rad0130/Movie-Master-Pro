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
                        <img
                        src={movie.posterUrl}
                        className="w-full h-180 bg-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#slide${prevSlide}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${nextSlide}`} className="btn btn-circle">❯</a>
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