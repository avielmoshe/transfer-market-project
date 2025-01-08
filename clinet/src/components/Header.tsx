import React, { useState } from "react";
import logo from "../assets/img/Transfermarkt_logo.png";
import { BiSolidShieldPlus } from "react-icons/bi";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      alert("Please enter a valid search term.");
      return;
    }
    navigate(`/SearchPage?query=${searchTerm}`);
  };

  return (
    <div className="bg-[rgb(233,233,233)] p-[15px] grid grid-cols-[1fr_2fr_1fr] h-[92px]  items-center gap-[5px]">
      <img
        className="h-[58px] w-[140px] flex items-center justify-center"
        src={logo}
        alt='"Logo'
      />
      <div className="h-[35px] ml-[95px] gap-[5px] flex items-center justify-center">
        <form
          className="flex bg-white p-[5px] rounded-[4px] w-[100%] h-[100%]"
          onSubmit={handleSubmit}
        >
          <input
            className="text-[13px] ml-[4.5px] font-bold w-[300px] h-[100%]"
            placeholder="Enter your search term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update the state on input change
          />
          <button type="submit">
            <GoSearch className="hover:text-[rgb(92,166,255)] text-[22px] p-[1px] mr-[5px]" />
          </button>
        </form>
        <button className="bg-white p-[5px] h-[35px] rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-[#00193f] group">
          <MdPersonSearch className="text-[#00193f] text-[20px] transition-all duration-300 group-hover:text-white" />
        </button>
      </div>
      <div className="ml-[28px] gap-[7px] rounded-[4px] flex items-center justify-center">
        <button className="bg-white p-[6px] rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-[#00193f] group">
          <BsBookmarkStarFill className="text-[#00193f] text-[18px] transition-all duration-300 group-hover:text-white" />
        </button>
        <button className="bg-white p-[6px] rounded-[4px] flex items-center justify-center transition-all duration-300 hover:bg-[#00193f] group">
          <BiSolidShieldPlus className="text-[#00193f] text-[18px] transition-all duration-300 group-hover:text-white" />
        </button>
        <button className="bg-[rgb(92,166,255)] flex items-center gap-[5px] rounded-[4px] p-[7px] w-auto hover:bg-[#00193f] hover:w-[calc(33%+1px)] transition-all duration-300 ease-in-out">
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
