import React from 'react';

const Carousel = ({ allMovies }) => {
    return (
        <div className="carousel w-full">
            {allMovies.map((movie, index) => {
                const prevSlide = index === 0 ? allMovies.length - 1 : index - 1;
                const nextSlide = index === allMovies.length - 1 ? 0 : index + 1;

                return (
                    <div
                        key={movie._id || index}
                        id={`slide${index}`}
                        className="carousel-item relative w-full"
                    >
                        <div
                            className="w-full h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center flex items-end"
                            style={{ backgroundImage: `url(${movie.posterUrl})` }}
                        >
                            <div className="space-y-2 sm:space-y-3 md:space-y-4 ml-6 sm:ml-10 md:ml-20 lg:ml-30 mb-10 sm:mb-16 md:mb-20 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] bg-black/40 p-4 sm:p-6 md:p-8 rounded-xl backdrop-blur-sm">
                                <div className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-red-700">
                                    {movie.title}
                                </div>
                                <div className="font-medium text-sm sm:text-base md:text-lg text-white line-clamp-3 sm:line-clamp-4">
                                    {movie.plotSummary}
                                </div>
                                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-red-800 hover:bg-red-900 rounded-xl cursor-pointer font-bold text-white transition-colors duration-300">
                                    Watch Now
                                </button>
                            </div>
                        </div>

                        <div className="absolute left-3 right-3 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a
                                href={`#slide${prevSlide}`}
                                className="btn btn-circle bg-black/70 hover:bg-black text-white text-lg sm:text-xl"
                            >
                                ❮
                            </a>
                            <a
                                href={`#slide${nextSlide}`}
                                className="btn btn-circle bg-black/70 hover:bg-black text-white text-lg sm:text-xl"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Carousel;