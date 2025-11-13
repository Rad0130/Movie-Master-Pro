import React, { useEffect, useState } from 'react';
import SingleMovie from '../../components/SingleMovie/SingleMovie';
import Loading from '../Loading/Loading';
import { useLoaderData } from 'react-router';

const AllMovies = () => {
    const moviesFromRoutes=useLoaderData();
    const [allMovies,setAllMovies]=useState([]);
    const [loading,setLoading]=useState(true);
    const [selectedGenres,setSelectedGenres]=useState([]);
    const [filteredMoviesWithGenres,setFilteredMoviesWithGenres]=useState([]);

    const genres=[]
    for(const movie of moviesFromRoutes){
        if(!genres.includes(movie.genre)){
            genres.push(movie.genre);
        }
    }

    const handleGenreButton=(Genre)=>{
        setSelectedGenres(prev=>{
            if(prev.includes(Genre)){
                return prev.filter(g=>g!==Genre)
            }
            else{
                return [...prev,Genre]
            }
        })
        
    }

    useEffect(()=>{
        if(selectedGenres.length==0){
            setFilteredMoviesWithGenres(allMovies);
        }
        else{
            const filteredMovies=allMovies.filter(movie=>selectedGenres.includes(movie.genre));
            setFilteredMoviesWithGenres(filteredMovies);
        }
    },[allMovies,selectedGenres])

    useEffect(()=>{
        setLoading(true);
        fetch(`http://localhost:3000/movies?genres=${selectedGenres.join(',')}`)
        .then(res=>res.json())
        .then(data=>{
            setAllMovies(data);
            setLoading(false);
        })
        .catch(error=>{
            console.log(error);
            setLoading(false);
        })
    },[selectedGenres])

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='mt-30'>
            <h1 className='font-bold text-4xl'>All Movies</h1>
            <div className='flex gap-2 mt-5'>
                {
                    genres.map(genre=><button onClick={()=>handleGenreButton(genre)} className={`btn btn-outline ${selectedGenres.includes(genre)?'bg-red-800':'btn-secondary'}`}>{genre}</button>)
                }
            </div>
            <div className='grid geid-cols-1 md:grid-cols-5 gap-5 my-10'>
                {
                    filteredMoviesWithGenres.map(movie=><SingleMovie movie={movie}></SingleMovie>)
                }
            </div>
        </div>
    );
};

export default AllMovies;