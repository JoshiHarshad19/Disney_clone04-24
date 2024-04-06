import React, { useState } from 'react'
import logo from './../assets/Images/logo.jpg'
import user from './../assets/Images/user.png'
import { HiHome, HiMiniMagnifyingGlass, HiPlus, HiMiniStar, HiOutlineEllipsisVertical, HiPlayCircle, HiTv } from "react-icons/hi2";
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle, setToggle] = useState(false)
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMiniMagnifyingGlass
    },
    {
      name: 'WATCHLIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiMiniStar
    },
    {
      name: 'TVSHOWS',
      icon: HiTv
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    }
  ]
  return (
    <div className='flex items-center gap-10 w-full justify-between'>

      <div className='flex items-center gap-10'>
        <img src={logo} className='w-[80px] md:w-[115px] lg:w-[150px] object-cover' alt="logo" />

        <div className='hidden md:flex gap-10'>
          {menu.map((item) => (<HeaderItem name={item.name} Icon={item.icon} />))}
        </div>

        <div className='flex gap-10 md:hidden'>
          {menu.map((item, index) => index < 3 && (<HeaderItem name={''} Icon={item.icon} />))}
        </div>

        <div className='flex gap-10 md:hidden' onMouseEnter={() => setToggle(!toggle)} onMouseLeave={() => setToggle(!toggle)} onClick={() => setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiOutlineEllipsisVertical} />
          {toggle ?
            <div className='absolute mt-5 p-2 bg-[#0b0b22] border-[1px] border-gray-700'>
              {menu.map((item, index) => index > 2 && (<HeaderItem name={item.name} Icon={item.icon} />))}
            </div> : null}
        </div>

      </div>

      <div>
        <img src={user} className='w-[40px] md:w-[60px] lg:[80px] rounded-full mr-[15px]' alt="" />
      </div>
    </div>
  )
}

export default Header