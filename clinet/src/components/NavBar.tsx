import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className='bg-[#00193f] h-[50px] grid grid-cols-8 gap-[6px] text-white text-[12px] font-bold justify-items-center justify-between items-center'>
      <button>DISCOVER</button>
      <button>TRANSFERS & RUMOURS</button>
      <button>MARKET VALUES</button>
      <button>COMPETITIONS</button>
      <button>STATISTICS</button>
      <button>COMMUNITY</button>
      <button>GAMING</button>
      <button><RiMenu3Fill className='text-white text-[25px]' /></button>
    </div>
  )
}

export default NavBar