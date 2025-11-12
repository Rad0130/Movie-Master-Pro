import { Film, Home, TriangleAlert } from 'lucide-react';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white font-[Inter] p-6">
        <div className="max-w-xl w-full bg-zinc-900 p-8 sm:p-12 rounded-xl shadow-2xl border border-red-800/50 text-center">
            
            {/* Error Icon */}
            <TriangleAlert className="w-16 h-16 mx-auto text-red-600 mb-6" />

            {/* Title */}
            <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
            
            {/* Subtitle */}
            <h2 className="text-3xl font-bold text-white mb-6">Houston, We Have a Problem.</h2>
            
            {/* Message */}
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            It looks like the reel stopped rolling. The page you requested could not be found. Please check the URL or use one of the links below to get back to the show.
            </p>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            {/* Home Button */}
            <a 
                href="/" 
                className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md shadow-red-500/30"
            >
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
            </a>
            
            {/* All Movies Button */}
            <a 
                href="/allmovies" 
                className="flex items-center justify-center border border-zinc-700 text-gray-300 hover:bg-zinc-800 py-3 px-6 rounded-lg transition duration-200"
            >
                <Film className="w-5 h-5 mr-2" />
                Browse Movies
            </a>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;