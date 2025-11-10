import React from 'react';
import Carousel from '../../components/banner/Carousel';
import { useLoaderData } from 'react-router';

const Home = () => {
    const allMovies=useLoaderData();
    return (
        <div>
            <Carousel key={allMovies._id} allMovies={allMovies}></Carousel>
        </div>
    );
};

export default Home;