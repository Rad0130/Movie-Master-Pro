import { PlusCircle } from 'lucide-react';
import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthContext';

const AddMovies = () => {
    const {user}=use(AuthContext);
    const handleMovieSubmit=(e)=>{
        e.preventDefault();
        const title=e.target.title.value;
        const director=e.target.director.value;
        const cast=e.target.cast.value;
        const posterUrl=e.target.posterUrl.value;
        const releaseYear=e.target.releaseYear.value;
        const genre=e.target.genre.value;
        const duration=e.target.duration.value;
        const rating=e.target.rating.value;
        const language=e.target.language.value;
        const country=e.target.country.value;
        const plotSummary=e.target.plotSummary.value;
        const addedBy=e.target.addedBy.value;

        console.log(title,director,cast,posterUrl,releaseYear,genre,duration,rating,language,country,plotSummary,addedBy);

        const newMovie={
            title:title,
            director:director,
            cast:cast,
            posterUrl:posterUrl,
            releaseYear:releaseYear,
            genre:genre,
            duration:duration,
            rating:rating,
            language:language,
            country:country,
            plotSummary:plotSummary,
            addedBy:addedBy
        }

        //send data to the database
        fetch('http://localhost:3000/movies',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newMovie)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('new movie added',data);
            alert('Movie added successfully!');
            e.target.reset();
        })
    }
    return (
        <div className='mt-30 mb-15 bg-black rounded-2xl'>
            <form onSubmit={handleMovieSubmit} class="space-y-6 p-10">
                <div className='flex items-center border-b-2 border-red-900 pb-4'>
                    <PlusCircle className="w-8 h-8 mr-3 text-red-600" />
                    <h1 className='font-bold text-4xl'>Add New Movie here</h1>
                </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col">
                <label for="title" class="mb-2 text-sm font-medium text-gray-300">
                    Movie Title <span class="text-red-500">*</span>
                </label>
                <input id="title" name="title" type="text" required
                    class="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div class="flex flex-col">
                <label for="director" class="mb-2 text-sm font-medium text-gray-300">
                    Director <span class="text-red-500">*</span>
                </label>
                <input id="director" name="director" type="text" required
                    class="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div class="flex flex-col">
                <label for="cast" class="mb-2 text-sm font-medium text-gray-300">
                    Starring Cast (Comma separated) <span class="text-red-500">*</span>
                </label>
                <input id="cast" name="cast" type="text" placeholder="e.g., C. Bale, H. Ledger, A. Eckhart" required
                    class="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div class="flex flex-col">
                <label for="posterUrl" class="mb-2 text-sm font-medium text-gray-300">
                    Poster URL
                </label>
                <input id="posterUrl" name="posterUrl" type="url" placeholder="https://i.postimg.cc/image.jpg"
                    class="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>
            </div>

            <h2 class="text-xl font-semibold text-gray-200 pt-4 border-t border-zinc-800">Numerical & Metadata</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div class="flex flex-col">
                <label for="releaseYear" class="mb-2 text-sm font-medium text-gray-300">Release Year <span class="text-red-500">*</span></label>
                <input id="releaseYear" name="releaseYear" type="number" min="1888" max="2026" required
                    class="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div class="flex flex-col">
                <label for="genre" class="mb-2 text-sm font-medium text-gray-300">Genre <span class="text-red-500">*</span></label>
                <input id="genre" name="genre" type="text" placeholder="e.g., Action, Sci-Fi" required
                    class="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div class="flex flex-col">
                <label for="duration" class="mb-2 text-sm font-medium text-gray-300">Duration (Minutes) <span class="text-red-500">*</span></label>
                <input id="duration" name="duration" type="number" min="1" required
                    class="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div class="flex flex-col">
                <label for="rating" class="mb-2 text-sm font-medium text-gray-300">Rating (0-10) <span class="text-red-500">*</span></label>
                <input id="rating" name="rating" type="number" step="0.1" min="0" max="10" required
                    class="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div class="flex flex-col">
                <label for="language" class="mb-2 text-sm font-medium text-gray-300">Language <span class="text-red-500">*</span></label>
                <input id="language" name="language" type="text" placeholder="e.g., English" required
                    class="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>

                <div class="flex flex-col">
                <label for="country" class="mb-2 text-sm font-medium text-gray-300">Country <span class="text-red-500">*</span></label>
                <input id="country" name="country" type="text" placeholder="e.g., USA" required
                    class="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
                </div>
            </div>

            <h2 class="text-xl font-semibold text-gray-200 pt-4 border-t border-zinc-800">Summary & Attribution</h2>

            <div class="flex flex-col">
                <label for="plotSummary" class="mb-2 text-sm font-medium text-gray-300">Plot Summary <span class="text-red-500">*</span></label>
                <textarea id="plotSummary" name="plotSummary" rows="4" required
                class="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500"></textarea>
            </div>

            <div class="flex flex-col">
                <label for="addedBy" class="mb-2 text-sm font-medium text-gray-300">Added By (Email/Username) <span class="text-red-500">*</span></label>
                <input id="addedBy" name="addedBy" type="email"  
                defaultValue={user.email} required
                class="w-full bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 focus:ring-red-600 rounded-lg p-3 transition-colors placeholder-gray-500" />
            </div>

            <button type="submit"
                className="w-full py-3 mt-8 text-lg font-bold rounded-lg transition-colors flex items-center justify-center bg-red-900 hover:bg-red-700 text-white shadow-lg shadow-red-500/40 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                Submit Movie
            </button>
            </form>
        </div>
    );
};

export default AddMovies;