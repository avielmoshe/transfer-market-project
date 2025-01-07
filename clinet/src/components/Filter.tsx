import React from 'react'
import { ImHome } from "react-icons/im";
import { IoFlagSharp } from "react-icons/io5";
import { HiMiniTrophy } from "react-icons/hi2";
import { FaTshirt } from "react-icons/fa";
import player from "../assets/img/bc-players.svg"


const Filter = () => {
  return (
    <div className='bg-[#fff] h-[50px] p-[10px]'>
      <div className='flex gap-[7px]'>
        <div><ImHome /></div>
        <div className='flex'>
          <div><IoFlagSharp /></div>
        <div></div>
        <div></div>
        </div>
        <div>
          <div><HiMiniTrophy /></div>
        <div></div>
        <div></div>
        </div>
        <div>
          <div><FaTshirt /></div>
        <div></div>
        <div></div>
        </div>
        <div>
          <div className='bg-black'><img className='' src={player} alt="player" />bh</div>
        <div></div>
        <div></div>
        </div>
      </div>
      </div>
  )
}

export default Filter