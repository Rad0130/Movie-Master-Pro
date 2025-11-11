import React from 'react';
import { Star, Clock, Calendar, Film, Users, Globe, MapPin, UserPlus } from 'lucide-react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../../components/Header/Navbar';

const MovieDetails = () => {
    const {id}=useParams();
    const movies=useLoaderData();
    const detailedMovie=movies.find(movie=>movie._id==id);
    const {title,genre,releaseYear,director,cast,rating,duration,plotSummary,posterUrl,language,country,addedBy}=detailedMovie;
    const castList = cast.split(',').map(item => item.trim());
    return (
        <div className='w-8/10 mx-auto'>
            <div className='mb-15'>
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen bg-gray-950 text-white font-[Inter] pb-12">

            {/* Hero Section: Poster and Key Info */}
            <div
                className="relative bg-cover bg-center h-[500px] sm:h-[600px] md:h-[700px] flex items-end"
                style={{ backgroundImage: `url(${posterUrl})` }}
            >
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-90"></div>

                <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Poster Image (Visible on larger screens) */}
                    <div className="hidden md:block flex-shrink-0 w-48 h-72 rounded-xl shadow-2xl overflow-hidden">
                    <img
                        src={posterUrl}
                        alt={`Poster for ${title}`}
                        className="w-full h-full object-cover"
                        onError={(e) => e.target.src = "https://placehold.co/300x400/181818/ffffff?text=Poster"}
                    />
                    </div>

                    {/* Title and Quick Metadata */}
                    <div className="flex flex-col justify-end">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                        {title}
                    </h1>

                    {/* Quick Info Bar */}
                    <div className="flex flex-wrap items-center gap-4 text-lg font-medium">
                        {/* Rating */}
                        <span className="flex items-center text-yellow-400 bg-gray-800/70 px-3 py-1 rounded-full">
                        <Star className="w-5 h-5 fill-yellow-400 mr-2" />
                        {rating.toFixed(1)}/10
                        </span>

                        {/* Release Year */}
                        <span className="flex items-center text-red-500">
                        <Calendar className="w-5 h-5 mr-2" />
                        {releaseYear}
                        </span>

                        {/* Duration */}
                        <span className="flex items-center text-gray-400">
                        <Clock className="w-5 h-5 mr-2" />
                        {duration} min
                        </span>

                        {/* Genre */}
                        <span className="text-gray-300 border border-gray-600 px-3 py-1 rounded-full text-sm">
                        {genre}
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Main Content: Summary and Detailed Facts */}
            <div className="max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Column 1: Plot Summary */}
                <div className="lg:col-span-2 space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-red-600 pb-2 mb-4">Plot Summary</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    {plotSummary}
                </p>

                {/* Director and Primary Cast */}
                <div className="pt-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-200">Creative Team</h3>
                    
                    {/* Director */}
                    <div className="flex items-start">
                    <Film className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                        <p className="text-sm font-semibold text-gray-400 uppercase">Director</p>
                        <p className="text-xl font-medium text-white">{director}</p>
                    </div>
                    </div>
                    
                    {/* Cast */}
                    <div>
                    <div className="flex items-center mb-2">
                        <Users className="w-6 h-6 text-red-500 mr-3" />
                        <p className="text-sm font-semibold text-gray-400 uppercase">Starring Cast</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {castList.map((actor, index) => (
                        <span
                            key={index}
                            className="bg-zinc-800 text-white text-sm px-3 py-1 rounded-full hover:bg-red-600 transition-colors"
                        >
                            {actor}
                        </span>
                        ))}
                    </div>
                    </div>
                </div>
                </div>

                {/* Column 2/3: Detailed Metadata Facts */}
                <div className="lg:col-span-1 bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-800 space-y-6">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Movie Facts</h2>

                <div className="space-y-4">
                    {/* Language */}
                    <div className="flex items-center text-gray-300">
                    <Globe className="w-5 h-5 text-gray-500 mr-3" />
                    <span className="font-semibold mr-2">Language:</span>
                    <span className="text-white">{language}</span>
                    </div>

                    {/* Country */}
                    <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 text-gray-500 mr-3" />
                    <span className="font-semibold mr-2">Country:</span>
                    <span className="text-white">{country}</span>
                    </div>

                    {/* Release Status */}
                    <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                    <span className="font-semibold mr-2">Original Release:</span>
                    <span className="text-white">{releaseYear}</span>
                    </div>

                    {/* Identifier */}
                    <div className="text-gray-300 pt-4 border-t border-zinc-800">
                    <p className="text-sm font-semibold mb-1">Database ID:</p>
                    <p className="text-xs break-all bg-zinc-800 p-2 rounded-md">{detailedMovie._id}</p>
                    </div>

                    {/* Added By */}
                    <div className="flex flex-col pt-4">
                    <div className="flex items-center text-gray-400 mb-1">
                        <UserPlus className="w-5 h-5 text-gray-500 mr-2" />
                        <span className="text-sm font-semibold uppercase">Data Added By</span>
                    </div>
                    <p className="text-white text-sm">{addedBy}</p>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
            
    );
};

export default MovieDetails;