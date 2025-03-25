import { RiMenu3Fill } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


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
      <div className="hidden sm:grid grid-cols-7 gap-[4px]">
        <div className="relative group w-auto h-full flex items-center justify-center">
          <Link to={"/"} className="h-full flex ">
            <button className="group-hover:text-[rgb(92,166,255)] relative flex items-center">
              <span className="inline-block">DISCOVER</span>
              <span className="absolute left-0 bottom-0 h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>

        <div className="relative group w-full h-full flex items-center justify-center">
          <Link to={"/transfers"} className="h-full flex ">
          <button className="group-hover:text-[rgb(92,166,255)] relative flex items-center">
              <span className="inline-block">TRANSFERS & RUMOURS</span>
              <span className="absolute left-0 bottom-0 h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <Link to={"/marketValues"} className="h-full flex">
          <button className="group-hover:text-[rgb(92,166,255)] relative flex items-center">
              <span className="inline-block">MARKET VALUES</span>
              <span className="absolute left-0 bottom-0 h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <Link to={"/competitions"} className="h-full flex">
          <button className="group-hover:text-[rgb(92,166,255)] relative flex items-center">
              <span className="inline-block">COMPETITIONS</span>
              <span className="absolute left-0 bottom-0 h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <Link to={"/statistics"} className="h-full flex">
          <button className="group-hover:text-[rgb(92,166,255)] relative flex items-center">
              <span className="inline-block">STATISTICS</span>
              <span className="absolute left-0 bottom-0 h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <Link to={"/community"} className="h-full flex">
          <button className="group-hover:text-[rgb(92,166,255)] relative flex items-center">
              <span className="inline-block">COMMUNITY</span>
              <span className="absolute left-0 bottom-0 h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
        <div className="relative group w-full h-full flex items-center justify-center">
          <Link to={"/gaming"} className="h-full flex">
          <button className="group-hover:text-[rgb(92,166,255)] relative flex items-center">
              <span className="inline-block">GAMING</span>
              <span className="absolute left-0 bottom-0 h-[3.2px] w-0 bg-[rgb(92,166,255)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
      </div>
      <div className="sm:hidden flex justify-end items-end w-full">
        <Sheet>
          <SheetTrigger>
            <RiMenu3Fill className="text-white text-[25px] hover:text-[rgb(92,166,255)]" />
          </SheetTrigger>
          <SheetContent className="bg-[#00193f]">
            <SheetHeader>
              <SheetTitle className="text-white">Menu</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col gap-4">
                  <Link to={"/"} className="hover:text-[rgb(92,166,255)]">
                    DISCOVER
                  </Link>
                  <Link to={"/transfers"} className="hover:text-[rgb(92,166,255)]">
                    TRANSFERS & RUMOURS
                  </Link>
                  <Link to={"/marketValues"} className="hover:text-[rgb(92,166,255)]">
                    MARKET VALUES
                  </Link>
                  <Link to={"/competitions"} className="hover:text-[rgb(92,166,255)]">
                    COMPETITIONS
                  </Link>
                  <Link to={"/statistics"} className="hover:text-[rgb(92,166,255)]">
                    STATISTICS
                  </Link>
                  <Link to={"/community"} className="hover:text-[rgb(92,166,255)]">
                    COMMUNITY
                  </Link>
                  <Link to={"/gaming"} className="hover:text-[rgb(92,166,255)]">
                    GAMING
                  </Link>
                  <Link to={"/FilterPage"} className="hover:text-[rgb(92,166,255)]">
                    FILTER
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
