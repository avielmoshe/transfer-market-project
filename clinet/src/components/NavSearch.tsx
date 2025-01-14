import React, { useEffect, useState } from 'react'
import { IoSettingsSharp } from "react-icons/io5";



const navSearch = () => {
   const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
              setIsScrolled(window.scrollY > 200);
            };
        
            window.addEventListener("scroll", handleScroll);
            return () => {
              window.removeEventListener("scroll", handleScroll);
            };
          }, []);
  return (
    <div className={`flex items-center justify-between px-[5px] m-[7px] text-[14.5px] bg-[#00193f] text-[rgb(233,233,233)] transition-all duration-300 ease-in-out ${isScrolled ? " h-[35px]" : "h-[53px]"}`}>
<div className="flex items-center gap-[10px]">
  <button
    className={`${isScrolled ? "py-1.5" : "py-3"} px-3.2 hover:bg-[#1a3151] transition-colors duration-200`}>
    
  </button>
</div>

  <div>
    <IoSettingsSharp className="text-[28px]" />
  </div>
</div>

  )
}

export default navSearch