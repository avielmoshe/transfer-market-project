import React from "react";
import { ImHome } from "react-icons/im";
import { FaTshirt } from "react-icons/fa";
import player from "../assets/img/bc-players.svg";
import flag from "../assets/img/bc-countries.svg";
import cup from "../assets/img/bc-competitions.svg";
import { RxDoubleArrowRight } from "react-icons/rx";

const Filter = () => {
  return (
    <div className="bg-[#fff] h-[55px] p-[10px]">
      <div className="flex gap-[18px] item-center">
        <div className="h-[35px] w-[35px] bg-[#e9e9e9] flex justify-center items-center">
          <ImHome className="text-[#00193f] text-[20px]" />
        </div>
        <div className="flex">
          <div className=" bg-[#00193f] h-[35px] w-[35px]  text-[#fff] flex justify-center items-center">
          <img className="" src={flag} alt="player" />
          </div>
          <div className="text-[#1A3151] font-bold text-[12px] bg-[#F2F2F2] h-[35px] p-[10px] flex justify-center items-center">Country</div>
          <button className="bg-[#DDDDDD] h-[35px] w-[25px] flex justify-center items-center text-[18px] text-[#0EB1EE] hover:bg-[#0EB1EE] hover:text-[#DDDDDD]"><RxDoubleArrowRight /></button>
        </div>
        <div className="flex">
          <div className=" bg-[#00193f] h-[35px] w-[35px]  text-[#fff] flex justify-center items-center">
          <img className="" src={cup} alt="player" />
          </div>
          <div className="text-[#1A3151] font-bold text-[12px] bg-[#F2F2F2] h-[35px] p-[10px] flex justify-center items-center">Competition</div>
          <button className="bg-[#DDDDDD] h-[35px] w-[25px] flex justify-center items-center text-[18px] text-[#0EB1EE] hover:bg-[#0EB1EE] hover:text-[#DDDDDD]"><RxDoubleArrowRight /></button>
        </div>
        <div className="flex">
          <div className=" bg-[#00193f] h-[35px] w-[35px]  text-[#fff] flex justify-center items-center">
            <FaTshirt />
          </div>
          <div className="text-[#1A3151] font-bold text-[12px] bg-[#F2F2F2] h-[35px] p-[10px] flex justify-center items-center">Club</div>
          <button className="bg-[#DDDDDD] h-[35px] w-[25px] flex justify-center items-center text-[18px] text-[#0EB1EE] hover:bg-[#0EB1EE] hover:text-[#DDDDDD]"><RxDoubleArrowRight /></button>
        </div>
        <div className="flex">
          <div className=" bg-[#00193f] h-[35px] w-[35px]  text-[#fff] flex justify-center items-center">
          <img className="" src={player} alt="player" />
          </div>
          <div className="text-[#1A3151] font-bold text-[12px] bg-[#F2F2F2] h-[35px] p-[10px] flex justify-center items-center">Player</div>
          <button className="bg-[#DDDDDD] h-[35px] w-[25px] flex justify-center items-center text-[18px] text-[#0EB1EE] hover:bg-[#0EB1EE] hover:text-[#DDDDDD]"><RxDoubleArrowRight /></button>
        </div>

      </div>
    </div>
  );
};

export default Filter;
