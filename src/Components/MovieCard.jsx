import React from 'react'
const imgBaseUrl = 'https://image.tmdb.org/t/p/original'

function MovieCard({movie}) {
  return (
    <>
      <img src={imgBaseUrl+movie.poster_path} className='w-[110px] md:w-[200px] cursor-pointer rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-200 ease-in'/>
    </>
  )
}

export default MovieCard