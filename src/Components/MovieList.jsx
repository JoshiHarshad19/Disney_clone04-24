import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useRef } from 'react';
import HrMovieCard from './HrMovieCard';


function MovieList({ genreId,index_ }) {
    /* const elementRef = useRef(null);
 */
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        getMovieByGenreId();
    }, [])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const elementRef = useRef(null);

    const slideLeft = (element) => {
        element.scrollLeft -= 500
    }
    const slideRight = (element) => {
        element.scrollLeft += 500
    }

    return (
        <div className='relative'>
            <HiChevronLeft className={`z-10 p-2 text-white text-[50px] absolute hidden md:block hover:drop-shadow-xl cursor-pointer ${index_%3==0?'mt-[75px]':'mt-[150px]'}`} onClick={()=>slideLeft(elementRef.current)} />
            <HiChevronRight className={`z-10 p-2 text-white text-[50px] absolute hidden md:block hover:drop-shadow-xl cursor-pointer ${index_%3==0?'mt-[75px]':'mt-[150px]'} right-0`} onClick={()=> slideRight(elementRef.current)} />

            <div className='flex w-full overflow-x-auto scrollbar-hide scroll-smooth gap-4 md:gap-8 py-5 px-3' ref={elementRef}>
                {movieList.map((item, index) => (
                    <>
                    {index_%3==0? <HrMovieCard movie={item}/> :<MovieCard movie={item} />}
                    </>
                ))}
            </div>



        </div>


    )
}

export default MovieList