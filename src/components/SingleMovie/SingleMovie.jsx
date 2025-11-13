import React, { use } from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import swal from 'sweetalert';


const SingleMovie = ({movie}) => {
  const {user}=use(AuthContext);
    const {_id, title, posterUrl, rating, genre, releaseYear}=movie;


    //watchlist to the database
    const handleWatchList=()=>{
      const newWatchList={
          movieId:_id,
          requestEmail:user.email,
      }
      fetch('http://localhost:3000/watchList',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(newWatchList)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log('watchlist added',data)
        swal("OK!", "WatchList Added Successfully!", "success");
      })
    }
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
          {rating}
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

        <div className='flex justify-between gap-2'>
          <button onClick={handleWatchList}
          className='w-full bg-red-600 hover:bg-red-700
              text-center
              text-white font-semibold
              py-2 px-4
              rounded-lg
              transition duration-200
              shadow-md shadow-red-500/30
              cursor-pointer'>
              Add To WatchList
          </button>
          {/* Details Button */}
          <Link to={`/details/${_id}`}
            className=" w-full text-center
              bg-red-600 hover:bg-red-700
              text-white font-semibold
              py-2 px-4
              rounded-lg
              transition duration-200
              shadow-md shadow-red-500/30
              cursor-pointer
              flex items-center
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
    );
};

export default SingleMovie;