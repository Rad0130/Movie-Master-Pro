import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

const SingleMovie = ({movie}) => {
    const {title, posterUrl, rating, genre, releaseYear}=movie;
    return (
        <div className="
      max-w-xs w-full
      bg-zinc-900
      rounded-xl
      shadow-2xl
      overflow-hidden
      transform transition-all duration-300 ease-in-out
      hover:scale-[1.03]
      hover:shadow-red-600/50
      font-[Inter]
    ">
      {/* Poster Image Section */}
      <div className="relative h-64 sm:h-72">
        <img
          src={posterUrl}
          alt={`Poster for ${title}`}
          className="w-full h-full object-cover transition duration-500 ease-in-out"
          // Fallback placeholder image in case the provided URL fails to load
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/300x400/181818/ffffff?text=Poster+Unavailable";
            e.target.className = "w-full h-full object-contain bg-zinc-800 p-8";
          }}
        />
        {/* Rating Overlay Badge */}
        <div className="absolute top-3 right-3 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center shadow-lg">
          <Star className="w-4 h-4 mr-1 fill-yellow-400 stroke-yellow-400" />
          {rating.toFixed(1)}
        </div>
      </div>

      {/* Content and Details Section */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h2 className="text-xl font-bold text-white truncate">{title}</h2>

        {/* Metadata (Genre & Year) */}
        <div className="flex items-center space-x-3 text-sm text-gray-400">
          <p className="font-medium text-red-500">{releaseYear}</p>
          <span className="text-gray-600">•</span>
          <p className="truncate">{genre}</p>
        </div>

        {/* Details Button */}
        <Link to={`/details/${movie._id}`}
          className="
            w-full
            flex items-center justify-center
            bg-red-600 hover:bg-red-700
            text-white font-semibold
            py-2 px-4
            rounded-lg
            transition duration-200
            shadow-md shadow-red-500/30
            cursor-pointer
          "
        >
          View Details
        </Link>
      </div>
    </div>
    );
};

export default SingleMovie;