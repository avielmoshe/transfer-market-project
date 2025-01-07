import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { LuChevronRight } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import inta from "../assets/img/instaRebrush.svg";
import fb from "../assets/img/fbRebrush.svg";
import whatsapp from "../assets/img/whatsappRebrush.svg";
import twitter from "../assets/img/twitter_rebrush.svg";
import threads from "../assets/img/threadsRebrush.svg";
import tiktok from "../assets/img/tiktokRebrush.svg";
import youtube from "../assets/img/RebrushYoutube.svg";
import telegram from "../assets/img/telegramRebrush.svg";

const FooterLinks = () => {
  return (
    <div className="bg-[#00193F] h-[300px] grid grid-cols-3  text-white py-[37px] px-[35px] ">
      <div >
        <div className="font-bold text-[15px] mb-[17px]">QUICK LINKS</div>
        <div className="text-[10px] flex flex-col gap-[3px]">
          <div className="flex items-center">
            {" "}
            <LuChevronRight className="mr-[3px]" />
            Most valuable players in the world
          </div>
          <div className="flex items-center">
            {" "}
            <LuChevronRight className="mr-[3px]" />
            Latest transfers
          </div>
          <div className="flex items-center">
            {" "}
            <LuChevronRight className="mr-[3px]" />
            Latest rumours
          </div>
          <div className="flex items-center">
            {" "}
            <LuChevronRight className="mr-[3px]" />
            Latest market value updates
          </div>
          <div className="flex items-center">
            {" "}
            <LuChevronRight className="mr-[3px]" />
            FIFA World Ranking
          </div>
          <div className="flex items-center">
            {" "}
            <LuChevronRight className="mr-[3px]" />
            Betting
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className="font-bold text-[15px] mb-[17px]">BE INVOLVED</div>
        <div className="text-[10px] flex flex-col gap-[3px]">
          <div className="flex items-center">
            {" "}
            <LuChevronRight className="mr-[3px]" />
            Mods & Data Scouts
          </div>
          <div className="flex items-center">
            {" "}
            <LuChevronRight className="mr-[3px]" />
            Apply as Mod or Datascout
          </div>
          <div className="flex items-center">
            {" "}
            <LuChevronRight className="mr-[3px]" />
            11 commandments
          </div>
          <div className="flex items-center">
            {" "}
            <LuChevronRight className="mr-[3px]" />
            Found a mistake?
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold text-[15px] mb-[17px]">SOCIAL MEDIA</div>
        <div className="grid grid-cols-5">
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={inta} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={fb} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={whatsapp} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={twitter} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={threads} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={tiktok} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={youtube} alt="" />
          </div>
          <div className="h-[40px]">
            <img className="h-[25px] w-[20px]" src={telegram} alt="" />
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-400 my-2" />
      <hr className="border-t border-gray-400 my-2" />
      <div></div>
      <div>
        <div className="font-bold text-[15px] mb-[17px]">CAREER</div>
        <div className="flex items-center text-[10px]">
          {" "}
          <LuChevronRight className="mr-[3px]" />
          Contact
        </div>
      </div>
      <div>
        {" "}
        <div className="font-bold text-[15px] mb-[17px]">ABOUT US</div>
        <div className="flex items-center text-[10px]">
          {" "}
          <LuChevronRight className="mr-[3px]" />
          TM-Team
        </div>
        <div className="flex items-center text-[10px]">
          {" "}
          <LuChevronRight className="mr-[3px]" />
          FAQ
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
