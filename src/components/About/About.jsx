import React from 'react';

const About = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white rounded-xl mb-20">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-800 to-red-900 bg-clip-text text-transparent">
                        MovieMaster
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Your ultimate cinematic companion for discovering, organizing, and sharing 
                        the world's finest films. Curate your personal movie universe with powerful 
                        tools designed for true cinephiles.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Feature 1 */}
                    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Smart Discovery</h3>
                        <p className="text-gray-300">
                            Advanced filtering by genre, year, rating, director, and cast. 
                            Find your next favorite movie with intelligent recommendations.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Personal Collections</h3>
                        <p className="text-gray-300">
                            Create and manage custom movie collections. Organize by mood, 
                            genre, or your personal rating system.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Community Driven</h3>
                        <p className="text-gray-300">
                            Contribute to our growing database. Add new movies, update information, 
                            and share your cinematic knowledge.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
                        <p className="text-gray-300">
                            Optimized performance with instant search results and seamless 
                            navigation. Enjoy a smooth, responsive experience.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
                        <p className="text-gray-300">
                            Your data and collections are protected with enterprise-grade 
                            security. Your cinematic journey remains yours alone.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Always Evolving</h3>
                        <p className="text-gray-300">
                            Regular updates with new features, improved algorithms, 
                            and expanded movie databases. We grow with your passion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;