import { RiMenu3Fill } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex bg-[#00193f] ${
        isScrolled ? " h-[35px]" : " h-[53px]"
      } text-white text-[13px] font-bold items-center  transition-all duration-300  ease-in-out`}
    >
      <div className="grid grid-cols-7 gap-[4px]">
        <div className="relative group w-auto flex items-center justify-center">
          <Link to={"/"}>
            <button className="group-hover:text-[rgb(92,166,255)] relative">
              <span className="inline-block">DISCOVER</span>
              <span className="absolute left-0 bottom-[-18px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <Link to={"/transfers"}>
            <button className="group-hover:text-[rgb(92,166,255)] relative">
              <span className="inline-block">TRANSFERS & RUMOURS</span>
              <span className="absolute left-0 bottom-[-11px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <Link to={"/marketValues"}>
            <button className="group-hover:text-[rgb(92,166,255)] relative">
              <span className="inline-block">MARKET VALUES</span>
              <span className="absolute left-0 bottom-[-18px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <Link to={"/competitions"}>
            <button className="group-hover:text-[rgb(92,166,255)] relative">
              <span className="inline-block">COMPETITIONS</span>
              <span className="absolute left-0 bottom-[-18px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <Link to={"/statistics"}>
            <button className="group-hover:text-[rgb(92,166,255)] relative">
              <span className="inline-block">STATISTICS</span>
              <span className="absolute left-0 bottom-[-18px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <Link to={"/community"}>
            <button className="group-hover:text-[rgb(92,166,255)] relative">
              <span className="inline-block">COMMUNITY</span>
              <span className="absolute left-0 bottom-[-18px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <Link to={"/gaming"}>
            <button className="group-hover:text-[rgb(92,166,255)] relative">
              <span className="inline-block">GAMING</span>
              <span className="absolute left-0 bottom-[-18px] h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
      </div>
      <div className="p-[15px]">
        <button>
          <RiMenu3Fill className="text-white text-[25px] hover:text-[rgb(92,166,255)]" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
