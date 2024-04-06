import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const imgBaseUrl = 'https://image.tmdb.org/t/p/original'
const screenWidth = window.innerWidth


function Slider() {

  const [movieList, setMovieList] = useState([]);
  useEffect(() => { getTrendingMovies(); }, [])
  const elementRef = useRef();

  const getTrendingMovies = () => {
    GlobalApi.getTrending.then(resp => {
      //console.log(resp.data.results);
      setMovieList(resp.data.results)
    })
  }

  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth
  }
  const slideRight = (element) => {
    element.scrollLeft += screenWidth
  }
  return (
    <div>
      <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[170px] cursor-pointer' onClick={() => slideLeft(elementRef.current)} />
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[170px] cursor-pointer right-0' onClick={() => slideRight(elementRef.current)} />
      <div className='flex overflow-x-auto w-full px-10 py-5 scrollbar-hide scroll-smooth' ref={elementRef}>
        {movieList.map((item, index) => (
          <img src={imgBaseUrl + item.backdrop_path} className='min-w-full md:h-[370px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
        ))}
      </div>
    </div>
  )
}

export default Slider