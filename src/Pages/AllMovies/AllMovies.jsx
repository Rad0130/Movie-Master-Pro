import React, { useEffect, useState } from 'react';
import SingleMovie from '../../components/SingleMovie/SingleMovie';
import Loading from '../Loading/Loading';

const AllMovies = () => {
    const [allMovies,setAllMovies]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setLoading(true);
        fetch('http://localhost:3000/movies')
        .then(res=>res.json())
        .then(data=>{
            setAllMovies(data);
            setLoading(false);
        })
        .catch(error=>{
            console.log(error);
            setLoading(false);
        })
    },[])

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='mt-30'>
            <h1 className='font-bold text-4xl'>All Movies</h1>
            <div className='grid geid-cols-1 md:grid-cols-5 gap-5 my-10'>
                {
                    allMovies.map(movie=><SingleMovie movie={movie}></SingleMovie>)
                }
            </div>
        </div>
    );
};

export default AllMovies;