import React from "react";
import logo from "../assets/img/Transfermarkt_logo.png";
import { BiSolidShieldPlus } from "react-icons/bi";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <div className="bg-[rgb(233,233,233)] p-[15px] grid grid-cols-[1fr_2fr_1fr]  items-center justify-between gap-4">
      <img className="h-[62px] w-[156px] flex items-center justify-center" src={logo} alt='"Logo' />
      <div className="h-[40px] gap-[5px] flex items-center justify-center">
        <form className="flex bg-white p-[5px] rounded-[4px]">
          <input
            className="text-[12px] font-bold"
            placeholder="Enter your search term "
          ></input>
          <button>
            <GoSearch className="hover:text-[rgb(92,166,255)]"/>
          </button>
        </form>
        <button className="bg-white p-[5px] rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-[#00193f] group">
          <MdPersonSearch className="text-[#00193f] text-[17px] transition-all duration-300 group-hover:text-white" />
        </button>
      </div>
      <div className="h-[18px] gap-[7px] rounded-[4px] flex items-center justify-center">
        <button className="bg-white p-[5px] rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-[#00193f] group">
          <BsBookmarkStarFill className="text-[#00193f] text-[17px] transition-all duration-300 group-hover:text-white" />
        </button>
        <button className="bg-white p-[5px] rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-[#00193f] group">
          <BiSolidShieldPlus className="text-[#00193f] text-[17px] transition-all duration-300 group-hover:text-white" />
        </button>
        <button className="bg-[rgb(92,166,255)] flex items-center gap-[5px] rounded-[4px] p-[4px] w-auto hover:bg-[#00193f] hover:w-[calc(25%+1px)] transition-all duration-300 ease-in-out">
  <div>
    <FaUser className="text-white" />
  </div>
  <div className="text-white text-[10px]">LOG IN</div>
</button>
      </div>
    </div>
  );
};

export default Header;
