import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Update = () => {
    const movies=useLoaderData();
    const {id}=useParams();
    const movieInfo=movies.find(mv=>mv._id===id);
    const {title, director, cast, posterUrl, releaseYear, genre, duration, rating, language, country, plotSummary, addedBy}=movieInfo;
    
    //update movie and save to database
    const handleMovieUpdate=(e)=>{
        e.preventDefault();
        const updatedTitle=e.target.title.value;
        const updatedDirector=e.target.director.value;
        const updatedCast=e.target.cast.value;
        const updatedPosterUrl=e.target.posterUrl.value;
        const updatedReleaseYear=e.target.releaseYear.value;
        const updatedGenre=e.target.genre.value;
        const updatedDuration=e.target.duration.value;
        const updatedRating=e.target.rating.value;
        const updatedLanguage=e.target.language.value;
        const updatedCountry=e.target.country.value;
        const updatedPlotSummary=e.target.plotSummary.value;

        const updatedMovie={
            title:updatedTitle,
            director:updatedDirector,
            cast:updatedCast,
            posterUrl:updatedPosterUrl,
            releaseYear:updatedReleaseYear,
            genre:updatedGenre,
            duration:updatedDuration,
            rating:updatedRating,
            language:updatedLanguage,
            country:updatedCountry,
            plotSummary:updatedPlotSummary,
            addedBy:addedBy
        }

        //send updated data to the database
        fetch(`http://localhost:3000/movies/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedMovie)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('movie updated',data);
            alert('Movie updated successfully!');
        })
    }   
    return (
        <div className='mt-30 mb-15 bg-black rounded-2xl'>
            <form onSubmit={handleMovieUpdate} className="space-y-6 p-10">
                <div className='flex items-center border-b-2 border-red-900 pb-4'>
                    <h1 className='font-bold text-4xl'>Update Your Movie here</h1>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                <label for="title" className="mb-2 text-sm font-medium text-gray-300">
                    Movie Title <span className="text-red-500">*</span>
                </label>
                <input defaultValue={title} id="title" name="title" type="text" required
                    className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div className="flex flex-col">
                <label for="director" className="mb-2 text-sm font-medium text-gray-300">
                    Director <span className="text-red-500">*</span>
                </label>
                <input defaultValue={director} id="director" name="director" type="text" required
                    className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div className="flex flex-col">
                <label for="cast" className="mb-2 text-sm font-medium text-gray-300">
                    Starring Cast (Comma separated) <span className="text-red-500">*</span>
                </label>
                <input defaultValue={cast} id="cast" name="cast" type="text" placeholder="e.g., C. Bale, H. Ledger, A. Eckhart" required
                    className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div className="flex flex-col">
                <label for="posterUrl" className="mb-2 text-sm font-medium text-gray-300">
                    Poster URL
                </label>
                <input defaultValue={posterUrl} id="posterUrl" name="posterUrl" type="url" placeholder="https://i.postimg.cc/image.jpg"
                    className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-200 pt-4 border-t border-zinc-800">Numerical & Metadata</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className="flex flex-col">
                <label for="releaseYear" className="mb-2 text-sm font-medium text-gray-300">Release Year <span className="text-red-500">*</span></label>
                <input defaultValue={releaseYear} id="releaseYear" name="releaseYear" type="number" min="1888" max="2026" required
                    className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div className="flex flex-col">
                <label for="genre" className="mb-2 text-sm font-medium text-gray-300">Genre <span className="text-red-500">*</span></label>
                <input defaultValue={genre} id="genre" name="genre" type="text" placeholder="e.g., Action, Sci-Fi" required
                    className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div className="flex flex-col">
                <label for="duration" className="mb-2 text-sm font-medium text-gray-300">Duration (Minutes) <span className="text-red-500">*</span></label>
                <input defaultValue={duration} id="duration" name="duration" type="number" min="1" required
                    className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div className="flex flex-col">
                <label for="rating" className="mb-2 text-sm font-medium text-gray-300">Rating (0-10) <span className="text-red-500">*</span></label>
                <input defaultValue={rating} id="rating" name="rating" type="number" step="0.1" min="0" max="10" required
                    className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div className="flex flex-col">
                <label for="language" className="mb-2 text-sm font-medium text-gray-300">Language <span className="text-red-500">*</span></label>
                <input defaultValue={language} id="language" name="language" type="text" placeholder="e.g., English" required
                    className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div className="flex flex-col">
                <label for="country" className="mb-2 text-sm font-medium text-gray-300">Country <span className="text-red-500">*</span></label>
                <input defaultValue={country} id="country" name="country" type="text" placeholder="e.g., USA" required
                    className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-200 pt-4 border-t border-zinc-800">Summary & Attribution</h2>

            <div className="flex flex-col">
                <label for="plotSummary" className="mb-2 text-sm font-medium text-gray-300">Plot Summary <span className="text-red-500">*</span></label>
                <textarea defaultValue={plotSummary} id="plotSummary" name="plotSummary" rows="4" required
                className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500"></textarea>
            </div>

            <div className="flex flex-col">
                <label for="addedBy" className="mb-2 text-sm font-medium text-gray-300">Added By (Email/Username) <span className="text-red-500">*</span></label>
                <input defaultValue={addedBy} disabled id="addedBy" name="addedBy" type="email"  
                 required
                className="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
            </div>

            <button type="submit"
                className="w-full py-3 mt-8 text-lg font-bold rounded-lg transition-colors flex items-center justify-center bg-red-900 hover:bg-red-700 text-white shadow-lg shadow-red-500/40 cursor-pointer">
                Submit Updated Movie
            </button>
            </form>
        </div>
    );
};

export default Update;