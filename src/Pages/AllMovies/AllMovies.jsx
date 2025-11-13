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
    const [minRating,setMinRating]=useState('');
    const [maxRating,setMaxRating]=useState('');

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
        let url=`http://localhost:3000/movies?`;

        if(selectedGenres>0){
            url +=`genres=${selectedGenres.join(',')}&`;
        }
        if(minRating){
            url +=`minRating=${minRating}&`;
        }
        if(maxRating){
            url +=`maxRating=${maxRating}&`;
        }
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setAllMovies(data);
            setLoading(false);
        })
        .catch(error=>{
            console.log(error);
            setLoading(false);
        })
    },[selectedGenres,minRating,maxRating])

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='mt-30'>
            <h1 className='font-bold text-4xl'>All Movies</h1>
            <div className='gird grid-cols-4 md:grid-cols-15 mt-5'>
                {
                    genres.map(genre=><button onClick={()=>handleGenreButton(genre)} className={`btn btn-outline m-2 ${selectedGenres.includes(genre)?'bg-red-800':'btn-secondary'}`}>{genre}</button>)
                }
            </div>
            <div className='mt-5 flex flex-col md:flex-row items-center '>
                <label className='px-4 py-2 bg-red-800 rounded-[5px] font-bold mr-4 mb-4 md:mb-0'>Rating Range: </label>
                <div className='flex flex-col md:flex-row'>
                    <input className='text-center text-red-800 font-bold border border-red-800 rounded-[5px]' type="number" step={0.1} min={0} max={10} value={minRating} placeholder='min' onChange={(e)=>setMinRating(e.target.value)} />
                    <span className='mx-2 font-bold text-center'>to</span>
                    <input className='text-center text-red-800 font-bold border border-red-800 rounded-[5px]' type="number" step={0.1} min={0} max={10} value={maxRating} placeholder='Max' onChange={(e)=>setMaxRating(e.target.value)} />
                </div>
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