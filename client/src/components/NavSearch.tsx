import { DataForNavSearch } from "@/types/types";
import React, { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RiMenu3Fill } from "react-icons/ri";

interface DynamicNavProp {
  dataOfNavSearch: DataForNavSearch;
}

const NavSearch = (dataOfNavSearch: DynamicNavProp) => {
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
    <div
      className={`flex items-center justify-between px-[5px] m-[7px] text-[14.5px] bg-[#00193f] text-[rgb(233,233,233)] transition-all duration-300 ease-in-out ${
        isScrolled ? " h-[35px]" : "h-[53px]"
      }`}
    >
      <div className="hidden sm:flex items-center gap-[10px]">
        {dataOfNavSearch.dataOfNavSearch.map((category) => {
          return (
            <button
              key={category.name}
              className={`${
                isScrolled ? "py-1.5" : "py-3"
              } px-3.2 hover:bg-[#1a3151] transition-colors duration-200`}
              onClick={category.onClick}
            >
              {category.name}
            </button>
          );
        })}
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
                <div className=" flex flex-col items-center gap-[10px]">
                  {dataOfNavSearch.dataOfNavSearch.map((category) => {
                    return (
                      <button
                        key={category.name}
                        className={`${
                          isScrolled ? "py-1.5" : "py-3"
                        } px-3.2 hover:bg-[#1a3151] transition-colors duration-200`}
                        onClick={category.onClick}
                      >
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavSearch;
