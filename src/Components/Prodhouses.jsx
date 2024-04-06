import React from 'react'

import disney from './../assets/Images/disneylogo.png'
import marvel from './../assets/Images/marvellogo.png'
import natgeo from './../assets/Images/natgeologo.png'
import pixar from './../assets/Images/pixarlogo.png'
import starwars from './../assets/Images/starwarslogo.png'

import disneyV from './../assets/Videos/disneyvideo.mp4'
import marvelV from './../assets/Videos/marvelvideo.mp4'
import natgeoV from './../assets/Videos/natgeovideo.mp4'
import pixarV from './../assets/Videos/pixarvideo.mp4'
import starwarsV from './../assets/Videos/starwarsvideo.mp4'

function Prodhouses() {
    const prodhousesList = [
        {
            id: 1,
            image: disney,
            video: disneyV
        },
        {
            id: 2,
            image: marvel,
            video: marvelV
        },
        {
            id: 3,
            image: natgeo,
            video: natgeoV
        },
        {
            id: 4,
            image: pixar,
            video: pixarV
        },
        {
            id: 5,
            image: starwars,
            video: starwarsV
        },
    ]

    
    return (
        <div className='flex gap-2 md:gap-5  p-5 md:px-16 w-full'>
            {prodhousesList.map((item) => (
                <div className='w-1/5 h-1/5 object-cover rounded-lg border-[2px] border-gray-500 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black'>
                    <video src={item.video} autoPlay playsInline loop muted className='absolute top-0 rounded-lg z-0 opacity-0 hover:opacity-80'></video>
                    <img src={item.image} className='w-full rounded-lg z-[1]' />
                </div>
            ))}
        </div>

    )
}

export default Prodhouses