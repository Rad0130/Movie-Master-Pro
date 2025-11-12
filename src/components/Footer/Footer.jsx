import React from 'react';
import { Facebook, Linkedin, Code, Mail, Home, Film, PlusCircle, Group } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Define the application quick links
    const quickLinks = [
        { name: 'Home', path: '/', Icon: Home },
        { name: 'All Movies', path: '/allmovies', Icon: Film },
        { name: 'Add Movie', path: '/addmovies', Icon: PlusCircle },
        { name: 'My Collections', path:'/collections', Icon:Group}
         // Assuming you'll add this route later
    ];

    // Define the social media links
    const socialLinks = [
        { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100072754745638&mibextid=ZbWKwL', Icon: Facebook, color: 'text-blue-500' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shafiur-rahman-rad-879717290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', Icon: Linkedin, color: 'text-blue-400' },
        { name: 'LeetCode', url: 'https://leetcode.com/u/Rad008/', Icon: Code, color: 'text-yellow-500' },
        { name: 'Email', url: 'mailto:shafiurrahmanrad25@gmail.com', Icon: Mail, color: 'text-red-500' },
    ];

    return (
        <footer className="bg-zinc-900 border-t border-zinc-800 text-gray-400 font-[Inter] p-8 md:p-12">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
                
                {/* 1. App/Quick Links */}
                <nav className="space-y-3">
                    <h6 className="font-bold text-lg text-white mb-3 border-b border-red-600/50 pb-1">Quick Links</h6>
                    {quickLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.path} 
                            className="flex items-center link link-hover text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <link.Icon className="w-4 h-4 mr-2" />
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* 2. Company */}
                <nav className="space-y-3">
                    <h6 className="font-bold text-lg text-white mb-3 border-b border-red-600/50 pb-1">Company</h6>
                    <div><a href="#" className="link link-hover">About us</a></div>
                    <div><a href="#" className="link link-hover">Contact</a></div>
                    <div><a href="#" className="link link-hover">Jobs</a></div>  
                </nav>

                {/* 3. Legal */}
                <nav className="space-y-3">
                    <h6 className="font-bold text-lg text-white mb-3 border-b border-red-600/50 pb-1">Legal</h6>
                    <div><a href="#" className="link link-hover">Terms of use</a></div>
                    <div><a href="#" className="link link-hover">Privacy policy</a></div>
                    <div><a href="#" className="link link-hover">Cookie policy</a></div>    
                </nav>

                {/* 4. Social Media */}
                <nav className="space-y-3">
                    <h6 className="font-bold text-lg text-white mb-3 border-b border-red-600/50 pb-1">Social & Contact</h6>
                    <div className="flex flex-col space-y-3">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`flex items-center text-sm link link-hover text-gray-400 hover:text-white transition-colors group`}
                            >
                                <link.Icon className={`w-5 h-5 mr-3 ${link.color} group-hover:scale-110 transition-transform`} />
                                {link.name}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Copyright Section */}
            <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
                <p className="text-xl font-bold text-red-600 mb-2">MovieMaster</p>
                <p className="text-sm text-gray-500">
                    &copy; {currentYear} MovieMaster. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;