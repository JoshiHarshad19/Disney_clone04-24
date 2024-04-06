import React from 'react'
const imgBaseUrl = 'https://image.tmdb.org/t/p/original'

function HrMovieCard({movie}) {
  return (
    <section>
      <img src={imgBaseUrl+movie.backdrop_path} className='w-[110px] md:w-[260px] cursor-pointer rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-200 ease-in'/>
      <h2 className='w-[110px] md:w-[260px]w-[110px] md:w-[260px] hover:scale-110 transition-all duration-200 ease-in text-white text-center mt-2'>{movie.title}</h2>
    </section>
    )
}

export default HrMovieCard